import { PasswordEyeIcon } from './FormIcons'
import InputBox from './InputBox'

export default function PasswordInputBox({ id }) {
    return (
        <>
            <InputBox
                id={'password'}
                label={'Password'}
                type={'password'}
                placeholder={'Enter password'}
                icon={<PasswordEyeIcon />}
            />
            <InputBox
                id={'password-confirmation'}
                label={'Confirm Password'}
                type={'password'}
                placeholder={'Retype password'}
                icon={<PasswordEyeIcon />}
            />
        </>
    )
}
