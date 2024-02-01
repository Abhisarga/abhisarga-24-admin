'use client'

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
import { ListInput, ListItem } from '@/components/Forms/ListInput'
import FileUpload from '@/components/Forms/FileUpload'
import { CREATE_CLUB_MUTATION } from '@/graphql/mutations'

export default function Page() {
    return (
        <>
            <Arena>
                <ArenaTitle title={'Add a new club'} />

                <ArenaDescription
                    description={
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat mollitia?'
                    }
                />

                <FormCard mutation={CREATE_CLUB_MUTATION}>
                    <FormHeader>
                        <FormTitle title={'Club Details'} />
                        <FormDescription
                            description={'Put the details of club here'}
                        />
                    </FormHeader>

                    <InputBox
                        id={'name'}
                        label={'Name'}
                        type={'text'}
                        placeholder={'Enter Club Name'}
                    />
                    <InputBox
                        id={'abbreviation'}
                        label={'Abbreviation'}
                        type={'text'}
                        placeholder={'Enter Club Abbreviation'}
                    />

                    <TextArea
                        id={'description'}
                        label={'Club Description'}
                        placeholder={'Enter club description'}
                    />

                    <FileUpload
                        id={'logo'}
                        label={'Club Logo'}
                        help={'PNG, JPEG'}
                    />

                    <ListItem label={'Club Socials'} id="socials">
                        <InputBox
                            id={'socials.instagram'}
                            label={'Instagram'}
                            type={'text'}
                            placeholder={'Enter instagram url'}
                        />
                        <InputBox
                            id={'socials.linkedin'}
                            label={'Linkedin'}
                            type={'text'}
                            placeholder={'Enter linkedin url'}
                        />
                    </ListItem>

                    <SelectDropDown
                        id={'lead'}
                        label={'Club Lead'}
                        placeholder={'Enter Club Lead'}
                    >
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
                    </SelectDropDown>

                    <ListInput
                        label={'Co Lead'}
                        getContent={(lid) => {
                            return (
                                <>
                                    <SelectDropDown
                                        id={`coLeads-${lid}`}
                                        label={'Co Lead Person'}
                                        placeholder={'Enter colead'}
                                    >
                                        <option value="JM">John Mayer</option>
                                        <option value="SRV">
                                            Stevie Ray Vaughn
                                        </option>
                                        <option value="JH">Jimi Hendrix</option>
                                        <option value="BBK">B.B King</option>
                                        <option value="AK">Albert King</option>
                                        <option value="BG">Buddy Guy</option>
                                        <option value="EC">Eric Clapton</option>
                                    </SelectDropDown>
                                </>
                            )
                        }}
                    />

                    <SelectDropDown
                        id={'representative'}
                        label={'Club Representative'}
                        placeholder={'Enter Club Representative'}
                    >
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
                    </SelectDropDown>

                    <FormFooter>
                        <SubmitButton type={'submit'} label={'Add a Club'} />

                        <ExtraLink link={''} label={'View all Clubs'} />
                    </FormFooter>
                </FormCard>
            </Arena>
        </>
    )
}
