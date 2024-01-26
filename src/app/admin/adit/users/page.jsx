
import InputBox from '@/components/Forms/InputBox';
import { EmailIcon } from '@/components/Forms/FormIcons';
import { Arena, ArenaTitle, ArenaDescription } from '@/components/Arena/Arena';
import { ExtraLink, FormCard, FormDescription, FormFooter, FormHeader, FormTitle } from '@/components/Forms/Form';
import SubmitButton from '@/components/Forms/Submit';
import TextArea from '@/components/Forms/TextArea';
import { SelectAutoComplete } from '@/components/Forms/SelectAutoComplete';
import { SelectDropDown } from '@/components/Forms/SelectDropDown';
import { RadioGroup, RadioItem } from '@/components/Forms/RadioGroup';
import { ListItem } from '@/components/Forms/ListInput';
import PasswordInputBox from '@/components/Forms/PasswordInput';

export default function Page() {




    return (
        <>


            <Arena>


                <ArenaTitle title={'Add a new User Account'} />

                <ArenaDescription description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat mollitia?'} />


                <FormCard action={'/'}>

                    <FormHeader>
                        <FormTitle title={'User Details'} />
                        <FormDescription description={'Create a new User entity'} />
                    </FormHeader>


                    <InputBox id={'user.name'} label={'Name'} type={'text'} placeholder={'Enter User Name'} />
                    <InputBox id={'user.email'} label={'Email'} type={'email'} placeholder={'Enter User email'} icon={<EmailIcon />} />

                    <InputBox id={'user.phone'} label={'Phone'} type={'text'} placeholder={'Enter User phone'} />
                    <ListItem label={'Account Security'}>



                        <PasswordInputBox id={'user.password'} />
                    </ListItem>

                    <InputBox id={'user.college'} label={'College'} placeholder={'Enter your college'} />

                    <SelectDropDown label={'User Role'}>
                        <option value={'admin'} > Admin </option>
                        <option value={'participant'} > Participant </option>
                        <option value={'club-lead'} > Club Lead </option>

                    </SelectDropDown>

                    <SelectAutoComplete id={'user.club'} label={'Club'}>
                        <option value={'None'} > None </option>
                        <option value={'Enigma'} > Enigma </option>
                        <option value={'GDSC'} > GDSC </option>


                    </SelectAutoComplete>




                    <FormFooter>
                        <SubmitButton type={'submit'} label={'Add new Person'} />

                        <ExtraLink link={''} label={'View all Person'} />
                    </FormFooter>


                </FormCard>
            </Arena>
        </>
    );
}
