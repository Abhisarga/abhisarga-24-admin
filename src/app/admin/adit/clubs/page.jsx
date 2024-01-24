
import InputBox from '@/components/Forms/InputBox';
import { EmailIcon } from '@/components/Forms/FormIcons';
import { Arena, ArenaTitle, ArenaDescription } from '@/components/Arena/Arena';
import { ExtraLink, FormCard, FormDescription, FormFooter, FormHeader, FormTitle } from '@/components/Forms/Form';
import SubmitButton from '@/components/Forms/Submit';
import TextArea from '@/components/Forms/TextArea';
import { SelectAutoComplete } from '@/components/Forms/SelectAutoComplete';
import { SelectDropDown } from '@/components/Forms/SelectDropDown';
import { RadioGroup, RadioItem } from '@/components/Forms/RadioGroup';

export default function Page() {
    return (
        <>


            <Arena>


                <ArenaTitle title={'Add a new club'} />

                <ArenaDescription description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat mollitia?'} />


                <FormCard action={'/'}>

                    <FormHeader>
                        <FormTitle title={'Club Details'} />
                        <FormDescription description={'Put the details of club here'} />
                    </FormHeader>


                    <InputBox id={'email'} label={'Email'} type={'email'} placeholder={'Enter Club Email'} icon={
                        <EmailIcon />
                    } />

                    <TextArea id={'club.description'} label={'Club Description'}
                        placeholder={'Enter club description'} />

                    <SelectAutoComplete>

                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
                    </SelectAutoComplete>

                    <SelectDropDown>
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
                    </SelectDropDown>

                    
                    <RadioGroup id={'groupid'} label={'Glabel'} cols={'2'} >

                        <RadioItem id={'id'} groupName={'GroupRadio'} itemKey={'Hello'} value={'world'} />
                        <RadioItem id={'id2'} groupName={'GroupRadio'} itemKey={'New'} value={'mars'} />
                    </RadioGroup>

                    <FormFooter>
                        <SubmitButton type={'submit'} label={'Add a Club'} />

                        <ExtraLink link={''} label={'View all Clubs'} />
                    </FormFooter>


                </FormCard>
            </Arena>
        </>
    );
}
