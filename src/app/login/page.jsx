import { ExtraLink, FormCard } from "@/components/Forms/Form";
import { EmailIcon, PasswordEyeIcon } from "@/components/Forms/FormIcons";
import InputBox from "@/components/Forms/InputBox";
import SubmitButton from "@/components/Forms/Submit";

export default function Page() {
    return (
        <>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="relative h-96 w-full lg:h-full lg:w-1/2">
                    <img
                        alt="Welcome"
                        src="https://images.nightcafe.studio/jobs/53TmCKQUbAf9QSXBiq5C/53TmCKQUbAf9QSXBiq5C--1--0qazc.jpg?tr=w-1600,c-at_max"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center text-indigo-600">
                        <h1 className="text-2xl font-bold sm:text-3xl">
                            Welcome to Abhisarga 2024
                        </h1>

                        <p className="mt-4 text-gray-500">
                            Login to your account to access the admin page!
                        </p>
                    </div>

                    <div className="max-w-lg mx-auto">
                        <FormCard>

                            <InputBox id={'email'} label={'Email'} placeholder={"Enter your emaili"} icon={<EmailIcon />} />
                            <InputBox id={'password'} label={'Password'} placeholder={"Enter your password"} icon={<PasswordEyeIcon />} />
                            <SubmitButton type={'submit'} label={"Sign in"} />
                            <ExtraLink link={'/register'} text={'Dont have an account? '} label={'Register'} />

                        </FormCard>

                    </div>

                </div>


            </section>
        </>
    )
}
