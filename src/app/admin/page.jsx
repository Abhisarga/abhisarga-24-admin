import { Arena, ArenaDescription, ArenaTitle } from '@/components/Arena/Arena'
export default function Page() {
    return (
        <>
            <Arena>
                <ArenaTitle title={'Welcome to Abhisarga Admin'} />
                <ArenaDescription
                    description={
                        'Navigate to different pages through the side bar'
                    }
                />
            </Arena>
        </>
    )
}
