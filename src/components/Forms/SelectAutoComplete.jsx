import { UpDownArrowIcon } from "./FormIcons";
export function SelectAutoComplete({ id, label, placeholder, children }) {
    /*
pass the options as children
*/
    return (
        <>
            <div>
                <label htmlFor={id} className="block text-sm font-medium text-gray-900">{label} </label>

                <div className="relative mt-1.5">
                    <input
                        type="text"
                        list={`${id}List`}
                        id={id}
                        className="w-full rounded-lg border-gray-300 pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
                        placeholder={placeholder}
                    />

                    <span className="absolute inset-y-0 end-0 flex w-8 items-center">
                        <UpDownArrowIcon />
                    </span>
                </div>

                <datalist name={id} id={`${id}List`}>
                    {children}
                </datalist>
            </div>
        </>
    );
}