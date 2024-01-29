'use client';

import InputBox from '@/components/Forms/InputBox';
import { EmailIcon } from '@/components/Forms/FormIcons';
import { Arena, ArenaTitle, ArenaDescription } from '@/components/Arena/Arena';
import { ExtraLink, FormCard, FormDescription, FormFooter, FormHeader, FormTitle } from '@/components/Forms/Form';
import SubmitButton from '@/components/Forms/Submit';
import TextArea from '@/components/Forms/TextArea';
import { SelectAutoComplete } from '@/components/Forms/SelectAutoComplete';
import { SelectDropDown } from '@/components/Forms/SelectDropDown';
import { RadioGroup, RadioItem } from '@/components/Forms/RadioGroup';
import { ListInput, ListItem } from '@/components/Forms/ListInput';
import FileUpload from '@/components/Forms/FileUpload';

export default function Page() {


    return (
        <>

            <Arena>
                <ArenaTitle title={'Add a new event'} />

                <ArenaDescription description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat mollitia?'} />


                <FormCard>

                    <FormHeader>
                        <FormTitle title={'Event Details'} />
                        <FormDescription description={'Put the details of event here'} />
                    </FormHeader>


                    <InputBox id={'name'} label={'Event Name'} type={'text'} placeholder={'Enter event name'} />



                    <SelectDropDown id={'club'} placeholder={'Select Club'} label={'Host Club'}>
                        <option data-value="something" value="aesfhjasdkf">Nirvana</option>
                        <option data-value="something" value="Enigma">Enigma</option>
                        <option data-value="something" value="GDSC">Eniota</option>
                        <option data-value="something" value="IOTA">Enpota</option>
                        <option data-value="something" value="Meraki">Meraki</option>
                    </SelectDropDown>

                    <TextArea id={'description'} placeholder={'Enter event details'} label={'Event Description'} />

                    <FileUpload id={'poster'} label={'Event Poster'} help={'JPEG, PNG'} />

                    <InputBox id={'registration'} label={'Event Registration'} placeholder={'Enter event registration link'} />

                    <InputBox id={'prizePool'} label={'Prize Pool'} placeholder={'Enter event prize pool'} />

                    <ListInput label={'Round'} getContent={(lid) => {
                        return (
                            <>
                                <InputBox id={`rounds-${lid}.name`} label={'Enter round name'} />
                                <RadioGroup id={`rounds-${lid}.mode`} label={'Round Mode'} cols={3}>
                                    <RadioItem itemKey={'Online'} id={`round.mode.online.${lid}`} groupName={`rounds-${lid}.mode`} value={'online'} />
                                    <RadioItem itemKey={'Offline'} id={`round.mode.offline.${lid}`} groupName={`rounds-${lid}.mode`} value={'offline'} />
                                    <RadioItem itemKey={'Hybrid'} id={`round.mode.hybrid.${lid}`} groupName={`rounds-${lid}.mode`} value={'hybrid'} />
                                </RadioGroup>
                                <TextArea label={'Description'} id={`rounds-${lid}.description`} />

                                <InputBox
                                    type={'datetime-local'}
                                    label={'Select start datetime'}
                                    id={`rounds-${lid}.start`}
                                />
                                <InputBox
                                    type={'datetime-local'}
                                    label={'Select end datetime'}
                                    id={`rounds-${lid}.end`}
                                />

                                <ListInput label={'Organizer'} getContent={(lidInner) => {
                                    return (
                                        <>
                                            <SelectDropDown id={`rounds-${lid}.organizers-${lidInner}`} label={'Organizer Name'} placeholder={'Search and Select organizer name'}>
                                                <option value="data">data</option>

                                            </SelectDropDown>
                                        </>
                                    );

                                }} />

                            </>
                        );

                    }} />




                    <FormFooter>
                        <SubmitButton type={'submit'} label={'Save Event'} />

                        <ExtraLink link={''} label={'View all events'} />
                    </FormFooter>


                </FormCard>
            </Arena>
        </>
    );
}
