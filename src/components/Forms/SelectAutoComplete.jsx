import { UpDownArrowIcon } from './FormIcons'
import { useRef } from 'react'
// TODO: implement jugaad
// TODO: this component logic is work in progress
// https://chat.openai.com/c/f9f5df48-b893-42fb-9592-5eb1bac549f1
// https://stackoverflow.com/questions/29882361/show-datalist-labels-but-submit-the-actual-value

export function WipIncomplete({ id, label, placeholder, options, children }) {
    /*
    SelectAutoComplete
pass the options as children
*/
    const inputRef = useRef(null)
    const hiddenInputRef = useRef(null)
    return (
        <>
            <div>
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700 p-1"
                >
                    {label}{' '}
                </label>

                <div className="relative mt-1.5">
                    <input
                        type="text"
                        name={`@exclude.${id}`}
                        list={`${id}List`}
                        id={`@exclude.${id}`}
                        className="w-full rounded-lg border-gray-300 pe-10 p-3 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
                        placeholder={placeholder}
                    />
                    <input
                        ref={inputRef}
                        type="hidden"
                        name={id}
                        id={id}
                        className="hidden"
                        onInput={() => {}}
                    />

                    <span className="absolute inset-y-0 end-0 flex w-8 items-center">
                        <UpDownArrowIcon />
                    </span>
                </div>

                {!options && (
                    <datalist name={id} id={`${id}List`}>
                        {children}
                    </datalist>
                )}
                {options && (
                    <datalist name={id} id={`${id}List`}>
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {' '}
                                {option}
                            </option>
                        ))}
                    </datalist>
                )}
            </div>
        </>
    )
}

export function AutoCompleteItem({ data, display }) {
    return (
        <>
            <option data={data} value={display}>
                {display}
            </option>
        </>
    )
}
