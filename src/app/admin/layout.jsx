'use client'

import { SideMenu, SideMenuGroup } from '@/components/Sidebar/SideMenu'
import SideBar from '@/components/Sidebar/Sidebar'
import TopBar from '@/components/TopBar/TopBar'
import { useState } from 'react'
import { AdminContext } from './context'
export default function RootLayout({ children }) {
    const urlBase = '/admin/adit/'
    const [hidden, setHidden] = useState(true)

    return (
        <>
            <AdminContext.Provider value={[hidden, setHidden]}>
                <TopBar />

                <div className="flex">
                    <SideBar appName={'Abhisarga 24'} homeLink={'/admin'}>
                        <SideMenu title={'Users'} link={urlBase + 'users'} />

                        <SideMenuGroup title={'Clubs'}>
                            <SideMenu title={'Club'} link={urlBase + 'clubs'} />
                            <SideMenu
                                title={'Events'}
                                link={urlBase + 'events'}
                            />
                        </SideMenuGroup>

                        <SideMenu
                            title={'Sponsors'}
                            link={urlBase + 'sponsors'}
                        />

                        <SideMenu title={'Persons'} link={urlBase + 'person'} />
                    </SideBar>

                    <div className="bg-gray-50 w-full">
                        <div className="w-full mx-auto text-black">
                            {children}
                        </div>
                    </div>
                </div>
            </AdminContext.Provider>
        </>
    )
}
