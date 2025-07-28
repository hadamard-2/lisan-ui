import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Input, PasswordInput } from "../ui/Input";
import Button from "../ui/Button";

interface LoginCredentials {
    email: string;
    password: string;
}

interface LoginFormProps {
    onSubmit: (credentials: LoginCredentials) => void;
    isLoading: boolean;
}

export default function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        onSubmit({ email, password });
    };

    return (
        <div className="space-y-4">
            <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                }
                placeholder="Enter your email"
                required
            />

            <PasswordInput
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                }
                required
            />

            <div className="text-right">
                <button
                    type="button"
                    className="text-sm font-medium hover:underline"
                    style={{ color: "#F1CC06" } as React.CSSProperties}
                >
                    Forgot password?
                </button>
            </div>

            <Button onClick={handleSubmit} isLoading={isLoading}>
                <span>Log In</span>
                <ArrowRight className="w-4 h-4" />
            </Button>
        </div>
    );
}
