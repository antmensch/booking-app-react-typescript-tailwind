import SignupForm from "../../../src/components/signup/SignupForm";

function SignupPage(props: any) {
    return (
        <div className="h-screen">
            <div className="flex h-screen justify-center overflow-scroll pt-32 dark:bg-darkGray-200">
                <div className="w-1/2 md:w-1/3">
                    <SignupForm />
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
