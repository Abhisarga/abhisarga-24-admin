export default function InputBox({ id, label, type = "text", placeholder, icon }) {
    return (
        <>
            <div>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 p-1">{label}</label>

                <div className="relative">
                    <input
                        id={id}
                        name={id}
                        type={type}
                        className="w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm"
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