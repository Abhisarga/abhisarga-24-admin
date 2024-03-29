
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

export default function Page() {


    const personTypesArray = [
        "Lead",
        "Co-lead",
        "Representative",
        "SDC Team",
        "SLC Team",
        "Design Team",
        "Sponsorship Team",
        "Pro Shows Team",
        "Stage & Sound Team",
        "Stalls Team",
        "Hospitality Team",
        "MarketingTeam",
        "Invitation Team",
        "Transportation Team",
        "Decoration Team",
        "Logistics Team",
        "Tech Team"
    ];

    return (
        <>


            <Arena>


                <ArenaTitle title={'Add a new Person'} />

                <ArenaDescription description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat mollitia?'} />


                <FormCard action={'/'}>

                    <FormHeader>
                        <FormTitle title={'Person Details'} />
                        <FormDescription description={'Create a new Person entity'} />
                    </FormHeader>


                    <InputBox id={'person.name'} label={'Name'} type={'text'} placeholder={'Enter Person Name'} />
                    <InputBox id={'person.email'} label={'Email'} type={'email'} placeholder={'Enter Person email'} />

                    <InputBox id={'person.phone'} label={'Phone'} type={'text'} placeholder={'Enter person phone'} />





                    <SelectAutoComplete id={'lead'} label={'Person Type'} placeholder={'Enter Person Type'} options={personTypesArray} />
                    <ListItem label={'Person Socials'} id='person.socials'>
                        <InputBox id={'person.socials.instagram'} label={'Instagram'} type={'text'} placeholder={'Enter instagram url'} />
                        <InputBox id={'person.socials.linkedin'} label={'Linkedin'} type={'text'} placeholder={'Enter linkedin url'} />
                    </ListItem>

                    <InputBox id={'person.profilePhoto'} label={'Profile Photo'} type={'text'} placeholder={'Enter profile photo url'} />



                    <FormFooter>
                        <SubmitButton type={'submit'} label={'Save Person'} />

                        <ExtraLink link={''} label={'View all Person'} />
                    </FormFooter>


                </FormCard>
            </Arena>
        </>
    );
}
