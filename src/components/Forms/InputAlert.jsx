export default function InputAlert({ title, description, type = 0 }) {
    // valid types: 0:error, 1:warning, 2:success
    const colorMap = ['red', 'amber', 'green']
    if (!(type >= 0 && type <= 2)) type = 0
    const color = colorMap[type]
    console.log(color)
    return (<>
        <div className="hidden border-red-500 bg-red-50 text-red-800 "> tailwind effector </div>
        <p className="text-red-700"></p>
        <div className="hidden border-amber-500 bg-amber-50 text-amber-800"> tailwind effector </div>
        <p className="text-amber-700"></p>

        <div className="hidden border-green-500 bg-green-50 text-green-800"> tailwind effector </div>
        <p className="text-green-700"></p>

        <div role="alert" className={`rounded border-s-4 border-${color}-500 bg-${color}-50 p-4 m-2`}>
            <strong className={`block font-medium text-${color}-800`}> {title} </strong>

            <p className={`mt-2 text-sm text-${color}-700`}>
                {description}
            </p>
        </div >
    </>);
}