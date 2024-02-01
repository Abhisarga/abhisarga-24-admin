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
import FileUpload from '@/components/Forms/FileUpload'
import { CREATE_SPONSOR_MUTATION } from '@/graphql/mutations'
export default function Page() {
    const sponsorTypes = [
        'Title Sponsor',
        'Associate Title Sponsor',
        'Diamond Sponsor',
        'Platinum Sponsor',
        'Gold Sponsor',
        'Silver Sponsor',
        'Food & Beverages Partner',
        'Banking Partner',
        'Travel Partner',
        'Delivery Partner',
        'Educational Partner',
        'Credential Partner',
        'Crypto Partner',
        'Media & Digital Partner',
        'Event Partner',
    ]
    return (
        <>
            <Arena>
                <ArenaTitle title={'Add a new Sponsor'} />

                <ArenaDescription
                    description={
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat mollitia?'
                    }
                />

                <FormCard mutation={CREATE_SPONSOR_MUTATION}>
                    <FormHeader>
                        <FormTitle title={'Sponsor Details'} />
                        <FormDescription
                            description={'Put the details of sponsor here'}
                        />
                    </FormHeader>

                    <InputBox
                        id={'sponsor.name'}
                        label={'Name'}
                        type={'text'}
                        placeholder={'Enter Sponsor Name'}
                    />

                    <FileUpload
                        id={'sponsor.logo'}
                        label={'Company Logo'}
                        help={'PNG, JPEG'}
                    />

                    <SelectDropDown
                        id={'sponsor.type'}
                        label={'Sponsor Type'}
                        placeholder={'Enter Sponsor Type'}
                        options={sponsorTypes}
                    />

                    <InputBox
                        id={'sponsor.url'}
                        label={'Sponsor Link'}
                        placeholder={'Enter sponsor website url'}
                    />

                    <FormFooter>
                        <SubmitButton type={'submit'} label={'Save Sponsor'} />

                        <ExtraLink link={''} label={'View all Sponsors'} />
                    </FormFooter>
                </FormCard>
            </Arena>
        </>
    )
}
