

export default function SideBar({ appName, homeLink, children }) {
    // pass the sidebaritems as children
    return (<>
        <div className="h-screen sticky top-0 flex flex-col justify-between border-e bg-white max-w-sm lg:max-w-md">
            <div className="px-4 py-6">
                <a href={homeLink}> <span className="hover:shadow-lg hover:font-extrabold grid h-10 w-32 place-content-center rounded-lg bg-indigo-700 text-sm text-white font-bold">
                    {appName}
                </span></a>


                <ul className="mt-6 space-y-1">
                    {children}
                </ul>
            </div>

            <SideBarFooter />
        </div>

    </>);
}

export function SideBarFooter({ }) {
    return (<>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <CurrentUserProfile />
        </div>
    </>);
}

export function CurrentUserProfile({ }) {
    // use context to get current user name, profile photo and email
    return (<>
        <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
            <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-10 w-10 rounded-full object-cover"
            />

            <div>
                <p className="text-xs">
                    <strong className="block font-medium">Eric Frusciante</strong>

                    <span> eric@frusciante.com </span>
                </p>
            </div>
        </a>
    </>);
}