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

export default function Page() {


    return (
        <>


            <Arena>



                <ArenaTitle title={'Add a new event'} />

                <ArenaDescription description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat mollitia?'} />


                <FormCard handleSubmit={(event) => {
                    event.preventDefault();
                    const data = new FormData(event.target)
                    data.forEach(console.log);

                }}>

                    <FormHeader>
                        <FormTitle title={'Event Details'} />
                        <FormDescription description={'Put the details of event here'} />
                    </FormHeader>


                    <InputBox id={'event.name'} label={'Event Name'} type={'text'} placeholder={'Enter event name'} />



                    <SelectAutoComplete id={'event.club'} placeholder={'Enter club'}>
                        <option value="Nirvana">Nirvana</option>
                        <option value="Enigma">Enigma</option>
                        <option value="GDSC">GDSC</option>
                        <option value="IOTA">IOTA</option>
                        <option value="Meraki">Meraki</option>
                    </SelectAutoComplete>

                    <TextArea id={'event.description'} placeholder={'Enter event details'} />

                    <InputBox id={'event.poster'} label={'Event Poster'} placeholder={'Enter event poster link'} />

                    <InputBox id={'event.registration'} label={'Event Registration'} placeholder={'Enter event registration link'} />


                    <ListInput label={'Round'} getContent={(lid) => {
                        return (
                            <>
                                <InputBox id={`round.number.${lid}`} label={'Round Number'} placeholder={'Round Number'} />
                                <RadioGroup id={`round.mode.${lid}`} label={'Round Mode'} cols={3} options={['Online', 'Offline', 'Hybrid']}>
                                    <RadioItem itemKey={'Online'} id={`round.mode.online.${lid}`} groupName={`round.mode.${lid}`} />
                                    <RadioItem itemKey={'Offline'} id={`round.mode.offline.${lid}`} groupName={`round.mode.${lid}`} />
                                    <RadioItem itemKey={'Hybrid'} id={`round.mode.hybrid.${lid}`} groupName={`round.mode.${lid}`} />
                                </RadioGroup>
                            </>
                        );


                    }} />


                    <FormFooter>
                        <SubmitButton type={'submit'} label={'Add Event'} />

                        <ExtraLink link={''} label={'View all events'} />
                    </FormFooter>


                </FormCard>
            </Arena>
        </>
    );
}
