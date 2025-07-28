import { useState } from "react";
import AuthLayout from "./components/layout/AuthLayout";
import AuthHeader from "./components/auth/AuthHeader";
import AuthCard from "./components/auth/AuthCard";
import GoogleSignupButton from "./components/auth/GoogleLoginButton";
import Divider from "./components/ui/Divider";
import SignupForm from "./components/auth/SignupForm";
import { AuthLink, AuthDescription } from "./components/auth/AuthFooter";

interface SignupCredentials {
    email: string;
    password: string;
}

export default function SignupPage() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSignup = ({ email, password }: SignupCredentials): void => {
        console.log(email);
        console.log(password);

        setIsLoading(true);
        // Simulate Signup process
        setTimeout(() => {
            setIsLoading(false);
            alert("Signup successful!");
        }, 1000);
    };

    const handleGoogleSignup = (): void => {
        alert("Google Signup clicked!");
    };

    return (
        <AuthLayout>
            <AuthHeader
                title="Lisan"
                subtitle="Ready to start learning Amharic?"
            />

            <AuthCard>
                <GoogleSignupButton onClick={handleGoogleSignup} />
                <Divider text="or" />

                <SignupForm onSubmit={handleSignup} isLoading={isLoading} />

                <Divider />
                <AuthLink
                    message="Already have an account?"
                    linkText="Log in here"
                    linkTo="/login"
                />
            </AuthCard>

            <AuthDescription description="Join thousands learning Amharic with Lisan" />
        </AuthLayout>
    );
}
