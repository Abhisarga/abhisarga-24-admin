import InputBox from '@/components/Forms/InputBox'
import {
    ExtraLink,
    FormCard,
    FormDescription,
    FormFooter,
    FormHeader,
    FormTitle,
} from '@/components/Forms/Form'
import SubmitButton from '@/components/Forms/Submit'
import { SelectDropDown } from '@/components/Forms/SelectDropDown'
import { ListItem } from '@/components/Forms/ListInput'
import PasswordInputBox from '@/components/Forms/PasswordInput'
import { REGISTER_MUTATION } from '@/graphql/mutations'
import { EmailIcon, PasswordEyeIcon } from '@/components/Forms/FormIcons'

export default function RegistrationFormCard({ submitLabel = 'Add new User', forAdmin = false }) {
    return (<>
        <FormCard mutation={REGISTER_MUTATION}>
            {forAdmin && <FormHeader>
                <FormTitle title={'User Details'} />
                <FormDescription
                    description={'Create a new User entity'}
                />
            </FormHeader>}

            <InputBox
                id={'name'}
                label={'Name'}
                type={'text'}
                placeholder={'Enter User Name'}
            />
            <InputBox
                id={'email'}
                label={'Email'}
                type={'email'}
                placeholder={'Enter User email'}
                icon={<EmailIcon />}
            />

            <InputBox
                id={'phone'}
                label={'Phone'}
                type={'text'}
                placeholder={'Enter User phone'}
            />
            <ListItem label={'Account Security'}>
                <PasswordInputBox id={'password'} />
            </ListItem>

            {!forAdmin && <InputBox
                id={'college'}
                label={'College'}
                placeholder={'Enter your college'}
            />
            }
            {forAdmin && <>
                <SelectDropDown id={'role'} label={'User Role'} placeholder={'Select Role'}>
                    <option value={'admin'}> Admin </option>
                    <option value={'participant'}> Participant </option>
                    <option value={'club-lead'}> Club Lead </option>
                </SelectDropDown>

                <SelectDropDown id={'club'} label={'Club'} placeholder={'Select Club'}>
                    <option value={'None'}> None </option>
                    <option value={'Enigma'}> Enigma </option>
                    <option value={'GDSC'}> GDSC </option>
                </SelectDropDown>
            </>}

            {!forAdmin && <SelectDropDown id={'role'} label={'User Role'} isDisabled={true} placeholder={'Select Role'}>
                <option value={'admin'}> Admin </option>
                <option selected value={'participant'}> Participant </option>
                <option value={'club-lead'}> Club Lead </option>
            </SelectDropDown>}

            <FormFooter>
                <SubmitButton
                    type={'submit'}
                    label={submitLabel}
                />

                {!forAdmin && <ExtraLink link={'/login'} text={'Already have an account ? '} label={'Login'} />}
                {forAdmin && <ExtraLink link={'/view/users'} label={'View All Users'} />}
            </FormFooter>
        </FormCard>
    </>);

}