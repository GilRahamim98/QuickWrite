import React from 'react'
import { Checkbox } from "@material-tailwind/react";
import { OptionInterface } from '@/utils/interfaces';
export default function Option(option: OptionInterface) {
    return (
        <div className="flex">
            <div className="flex items-center mr-4">
                <Checkbox id={`inline-checkbox ${option.label}`}
                    type="checkbox" onChange={() => option.onChangeFunction({ ...option, result: !option.result })}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="inline-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{option.label}</label>
            </div>

        </div>
    )
}

