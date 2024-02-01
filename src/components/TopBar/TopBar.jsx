import { useContext } from 'react'
import { MenuIcon } from '../Icons/Icons'
import { AdminContext } from '@/app/admin/context'

export default function TopBar() {
    const [hidden, setHidden] = useContext(AdminContext)
    return (
        <>
            <div className="">
                <header>
                    <div className="w-full mx-auto px-4 py-1 sm:px-6 lg:px-8 block sm:hidden">
                        <button
                            className="hover:shadow-lg inline-block rounded-full p-4"
                            onClick={() => setHidden(!hidden)}
                        >
                            <MenuIcon />
                        </button>
                    </div>
                </header>
            </div>
        </>
    )
}
