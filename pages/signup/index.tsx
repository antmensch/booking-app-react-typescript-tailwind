import SignupForm from "../../src/components/signup/SignupForm";

function SignupPage() {
    return (
        <div className="h-screen">
            <div className="flex h-screen justify-center overflow-scroll pt-32 dark:bg-darkGray-200">
                <SignupForm />
            </div>
        </div>
    );
}

export default SignupPage;
