'use client'
import Modal from '@/components/Modals/Modal'
import { useState } from 'react'

export default function Page() {
    const [opened, setOpened] = useState(false)
    return (
        <>
            <button
                className="bg-blue-500 text-white rounded-lg shadow-lg p-4"
                onClick={() => setOpened(true)}
            >
                Open Modal
            </button>

            <Modal opened={opened} setOpened={setOpened} title={'Modal'}>
                <div>
                    <p>hello world</p>
                </div>
            </Modal>
        </>
    )
}
