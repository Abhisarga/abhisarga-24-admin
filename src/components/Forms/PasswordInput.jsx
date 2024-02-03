'use client'

import { useState } from 'react'
import { PasswordEyeIcon } from './FormIcons'
import InputBox from './InputBox'
import InputAlert from './InputAlert';

export default function PasswordInputBox({ id }) {
    const [password, setPassword] = useState('');
    const [retype, setRetype] = useState('');

    return (
        <>
            {(retype && password != retype) && <InputAlert title={'Passwords do not match'} description={'The passwords in the password box and retype box must match'} type={0} />}
            <InputBox
                id={'password'}
                label={'Password'}
                type={'password'}
                placeholder={'Enter password'}
                icon={<PasswordEyeIcon />}
                value={password}
                onChange={(event) => { setPassword(event.target.value) }}
            />
            <InputBox
                id={'@exclude.password-confirmation'}
                label={'Confirm Password'}
                type={'password'}
                placeholder={'Retype password'}
                icon={<PasswordEyeIcon />}
                value={retype}
                onChange={(event) => {
                    setRetype(event.target.value)
                }

                }


            />

        </>
    )
}
