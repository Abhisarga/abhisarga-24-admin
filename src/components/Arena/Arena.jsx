export function Arena({ children }) {
    return (
        <>
            <div className="mx-auto max-w-full px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    {children}
                </div>

            </div>
        </>
    );
}

export function ArenaTitle({ title }) {
    return (
        <>
            <h1 className="text-center text-2xl font-bold text-indigo-700 sm:text-3xl">{title}</h1>
        </>
    );
}

export function ArenaDescription({ description }) {
    return (
        <>
            <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                {description}
            </p>
        </>
    );
}