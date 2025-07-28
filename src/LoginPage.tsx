import { useState } from "react";
import AuthLayout from "./components/layout/AuthLayout";
import AuthHeader from "./components/auth/AuthHeader";
import AuthCard from "./components/auth/AuthCard";
import GoogleLoginButton from "./components/auth/GoogleLoginButton";
import Divider from "./components/ui/Divider";
import LoginForm from "./components/auth/LoginForm";
import { AuthLink, AuthDescription } from "./components/auth/AuthFooter";

interface LoginCredentials {
    email: string;
    password: string;
}

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLogin = ({ email, password }: LoginCredentials): void => {
        console.log(email);
        console.log(password);

        setIsLoading(true);
        // Simulate login process
        setTimeout(() => {
            setIsLoading(false);
            alert("Login successful!");
        }, 1000);
    };

    const handleGoogleLogin = (): void => {
        alert("Google login clicked!");
    };

    return (
        <AuthLayout>
            <AuthHeader
                title="Lisan"
                subtitle="Welcome back to your Amharic journey!"
            />

            <AuthCard>
                <GoogleLoginButton onClick={handleGoogleLogin} />
                <Divider text="or" />
                <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
                <Divider/>
                <AuthLink
                    message="New to Lisan?"
                    linkText="Sign up here"
                    linkTo="/signup"
                />
            </AuthCard>

            <AuthDescription description="Continue your journey to fluency in Amharic" />
        </AuthLayout>
    );
}
