import Image from 'next/image'

export default function Home() {
    return (
        <div className="text-black mx-auto w-full p-8">
            hello server is up... hit
            <a className="text-indigo-600" href="/admin">
                {' '}
                /admin
            </a>
        </div>
    )
}
