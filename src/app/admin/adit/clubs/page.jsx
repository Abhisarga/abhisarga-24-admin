
import InputBox from '@/Components/Forms/InputBox';
import { EmailIcon } from '@/Components/Forms/FormIcons';
import { Arena, ArenaTitle, ArenaDescription } from '@/Components/Arena/Arena';
import Form from '@/Components/Forms/Form';
import SubmitButton from '@/Components/Forms/Submit';

export default function Page() {
    return (
        <>


            <Arena>
                <ArenaTitle title={'Add a new club'} />

                <ArenaDescription description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat mollitia?'} />


                <Form>
                    <p className="text-center text-lg font-medium">Club Details</p>
                    <p className="text-center text-md font-light"> Put the details of club here</p>


                    <InputBox htmlFor={'email'} label={'Email'} type={'email'} placeholder={'Enter Club Email'} icon={
                        <EmailIcon />
                    } />



                    <SubmitButton type={'submit'} label={'Add a Club'} />

                    <p className="text-center text-sm text-gray-500">
                        <a className="underline" href="">View All Clubs</a>
                    </p>
                </Form>
            </Arena>
        </>
    );
}
