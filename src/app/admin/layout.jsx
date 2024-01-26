'use client'

import { SideMenu, SideMenuGroup } from "@/components/Sidebar/SideMenu";
import SideBar from "@/components/Sidebar/Sidebar";

export default function RootLayout({ children }) {

    const urlBase = '/admin/adit/';
    return (<>
        <div className="flex">
            <SideBar appName={'Abhisarga 24'} homeLink={'/admin'}>
                <SideMenu title={'Users'} link={urlBase + 'users'} />

                <SideMenuGroup title={'Clubs'}>
                    <SideMenu title={'Club'} link={urlBase + 'clubs'} />
                    <SideMenu title={'Events'} link={urlBase + 'events'} />
                </SideMenuGroup>


                <SideMenu title={'Sponsors'} link={urlBase + 'sponsors'} />

                <SideMenu title={'Persons'} link={urlBase + 'person'} />


            </SideBar>


            <div className="bg-gray-50 w-full">

                <div className="w-full mx-auto text-black">
                    {children}
                </div>
            </div>

        </div>


    </>);

}