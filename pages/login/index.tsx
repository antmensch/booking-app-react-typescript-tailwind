import LoginForm from "../../src/components/login/LoginForm";

function LoginPage() {
    return (
        <div className="h-screen">
            <div className="flex h-screen justify-center overflow-scroll pt-40 dark:bg-darkGray-200">
                <div className="w-1/2 md:w-1/3">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
