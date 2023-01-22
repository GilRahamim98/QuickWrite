// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAIApi } from "openai"
import { configuration } from '@/utils/constants';

type Data = {
  article: string,
  header?: string
}

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { input, headerOption } = req.body
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Write an article about the ${input} ${headerOption?.result ? ',and give it a header' : ''}`,
    temperature: 1,
    max_tokens: 2500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  const suggestion = response.data?.choices?.[0].text
  if (suggestion === undefined) {
    throw new Error("No suggstion found")
  }
  if (headerOption?.result) {
    res.status(200).json({ article: suggestion.split("\n\n").splice(2, suggestion.length).join("\n\n"), header: suggestion.split("\n\n")[1] })
  } else {
    res.status(200).json({ article: suggestion })

  }

}
