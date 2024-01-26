import { SideMenu, SideMenuGroup } from "@/components/Sidebar/SideMenu";
import SideBar from "@/components/Sidebar/Sidebar";

export default function RootLayout({ children }) {
    return (<>
        <div className="flex">
            <SideBar appName={'Abhisarga 24'}>
                <SideMenu title={'Admin Users'} link={''} />

                <SideMenuGroup title={'Clubs'}>
                    <SideMenu title={'Club'} link={'clubs'} />
                    <SideMenu title={'Events'} link={'events'} />
                </SideMenuGroup>


                <SideMenu title={'Sponsors'} link={'sponsors'} />

                <SideMenu title={'Persons'} link={'person'} />

                <SideMenuGroup title={'Account'}>

                    <SideMenu title={'Details'} link={''} />
                    <SideMenu title={'Security'} link={''} />
                    <SideMenu title={'Logout'} link={''} />
                </SideMenuGroup>



            </SideBar>


            <div className="bg-gray-50 w-full">

                <div className="w-full mx-auto text-black">
                    {children}
                </div>
            </div>

        </div>


    </>);

}