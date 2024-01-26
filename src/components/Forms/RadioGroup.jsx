'use client'

import { CheckIcon } from "./FormIcons";

export function RadioGroup({ id, label, children, cols = 1 }) {
    /*
    pass RadioItem s as children
    */
    return (<>
        {/* make tailwind generate css for all these grid cols options */}
        <div className="hidden grid-cols-2"></div>
        <div className="hidden grid-cols-1"></div>
        <div className="hidden grid-cols-3"></div>

        <fieldset id={id} className={`grid grid-cols-${cols} gap-4`}>
            <legend className="block text-sm font-medium text-gray-700 p-1">{label}</legend>

            {children}
        </fieldset>
    </>);
}

export function RadioItem({ id, groupName, itemKey, value }) {
    return (<>
        <div>
            <input
                type="radio"
                name={groupName}
                value={id}
                id={id}
                className="peer hidden [&:checked_+_label_svg]:block"
            />

            <label
                htmlFor={id}
                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
            >
                <div className="flex items-center gap-2">
                    <CheckIcon />

                    <p className="text-gray-700">{itemKey}</p>
                </div>

                <p className="text-gray-900">{value}</p>
            </label>
        </div>

    </>);
}