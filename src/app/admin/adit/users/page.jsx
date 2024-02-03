import InputBox from '@/components/Forms/InputBox'
import { EmailIcon } from '@/components/Forms/FormIcons'
import { Arena, ArenaTitle, ArenaDescription } from '@/components/Arena/Arena'
import {
    ExtraLink,
    FormCard,
    FormDescription,
    FormFooter,
    FormHeader,
    FormTitle,
} from '@/components/Forms/Form'
import SubmitButton from '@/components/Forms/Submit'
import TextArea from '@/components/Forms/TextArea'
import { SelectDropDown } from '@/components/Forms/SelectDropDown'
import { RadioGroup, RadioItem } from '@/components/Forms/RadioGroup'
import { ListItem } from '@/components/Forms/ListInput'
import PasswordInputBox from '@/components/Forms/PasswordInput'
import { REGISTER_MUTATION } from '@/graphql/mutations'
import RegistrationFormCard from '@/components/FormCards/RegistrationFormCard'
export default function Page() {
    return (
        <>
            <Arena>
                <ArenaTitle title={'Add a new User Account'} />

                <ArenaDescription
                    description={
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat mollitia?'
                    }
                />

                <RegistrationFormCard submitLabel={'Save User'} forAdmin={true} />
            </Arena>
        </>
    )
}
