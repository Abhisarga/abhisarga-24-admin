export default function InputBox({ htmlFor, label, type, placeholder, icon }) {
    return (
        <>
            <div>
                <label htmlFor={htmlFor} className="sr-only">{label}</label>

                <div className="relative">
                    <input
                        type={type}
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder={placeholder}
                    />


                    {icon && <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        {icon}
                    </span>}
                </div>
            </div>
        </>
    );
}