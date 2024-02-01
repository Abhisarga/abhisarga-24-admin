'use client'

import { ExpandDownIcon } from '../Icons/Icons'
import { usePathname } from 'next/navigation'
import { AdminContext } from '@/app/admin/context'
import { useContext } from 'react'

export function SideMenu({ title, link }) {
    const pathname = usePathname()
    console.log(pathname)
    console.log(link)
    const isActive = pathname === link
    const [hidden, setHidden] = useContext(AdminContext)
    return (
        <>
            <li>
                <a
                    href={link}
                    className={`block rounded-lg px-4 py-2 text-sm text-gray-500 ${isActive ? 'bg-indigo-600 font-semibold text-white hover:shadow-lg hover:font-bold' : 'font-medium hover:bg-indigo-100 hover:text-gray-700'}`}
                    onClick={() => setHidden(true)}
                >
                    {title}
                </a>
            </li>
        </>
    )
}

export function SideMenuGroup({ title, children }) {
    // pass SideMenu items as children
    return (
        <>
            <li>
                <details
                    className="group [&_summary::-webkit-details-marker]:hidden"
                    open
                >
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-indigo-100 hover:text-gray-700">
                        <span className="text-sm font-medium"> {title} </span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                            <ExpandDownIcon />
                        </span>
                    </summary>

                    <ul className="mt-2 space-y-1 px-4">{children}</ul>
                </details>
            </li>
        </>
    )
}
