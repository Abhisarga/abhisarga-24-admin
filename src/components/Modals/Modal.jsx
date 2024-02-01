'use client'

import React, { useState, useEffect } from 'react'
import { CloseIcon } from '../Icons/Icons'

const Modal = ({ opened, setOpened, title, children }) => {
    const closeModal = () => {
        setOpened(false)
    }

    useEffect(() => {
        setOpened(opened)
    }, [opened, setOpened])

    return (
        <>
            {opened && (
                <div
                    id="hs-basic-modal"
                    className="hs-overlay opacity-100 hs-overlay-open:duration-500 fixed inset-0 z-80  overflow-x-hidden transition-all overflow-y-auto pointer-events-none"
                >
                    <div className="opacity-100 hs-overlay-open:duration-500 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                        {/* ... your modal content ... */}
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                                <h3 className="font-bold text-gray-800 dark:text-white">
                                    {title}
                                </h3>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                    <CloseIcon />
                                </button>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
