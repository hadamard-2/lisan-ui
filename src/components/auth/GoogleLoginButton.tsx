import Button from "../ui/Button";

interface GoogleLoginButtonProps {
    onClick: () => void;
}

export default function GoogleLoginButton({ onClick }: GoogleLoginButtonProps) {
    return (
        <Button variant="secondary" onClick={onClick} className="mb-6">
            <img
                className="w-5 h-5"
                src="/images/google_logo.svg"
                alt="google_logo"
            />
            <span>Continue with Google</span>
        </Button>
    );
}
