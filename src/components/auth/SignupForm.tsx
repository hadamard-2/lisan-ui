import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Input, PasswordInput } from "../ui/Input";
import Button from "../ui/Button";

interface SignupCredentials {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeToTerms: boolean;
}

interface SignupFormProps {
    onSubmit: (credentials: SignupCredentials) => void;
    isLoading: boolean;
}

export default function SignupForm({ onSubmit, isLoading }: SignupFormProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [error, setError] = useState("");

    const passwordStrength = () => {
        if (password.length === 0) return 0;
        if (password.length < 6) return 1;
        if (password.length < 10) return 2;
        return 3;
    };

    const getPasswordStrengthText = () => {
        const strength = passwordStrength();
        if (strength === 0) return "";
        if (strength === 1) return "Weak";
        if (strength === 2) return "Good";
        return "Strong";
    };

    const getPasswordStrengthColor = () => {
        const strength = passwordStrength();
        if (strength === 0) return "bg-gray-600";
        if (strength === 1) return "bg-red-500";
        if (strength === 2) return "bg-yellow-500";
        return "bg-green-500";
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        if (!agreeToTerms) {
            setError("Please agree to the terms and conditions.");
            return;
        }
        onSubmit({
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            agreeToTerms,
        });
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
                <Input
                    label="First Name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    required
                />
                <Input
                    label="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    required
                />
            </div>

            <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />

            <div>
                <PasswordInput
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {/* Password Strength Indicator */}
                {password && (
                    <div className="mt-2">
                        <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-600 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                                    style={{
                                        width: `${
                                            (passwordStrength() / 3) * 100
                                        }%`,
                                    }}
                                ></div>
                            </div>
                            <span className="text-xs text-gray-400">
                                {getPasswordStrengthText()}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            <PasswordInput
                label="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            {confirmPassword && password !== confirmPassword && (
                <div className="text-xs text-red-500">
                    Passwords do not match
                </div>
            )}

            {/* Terms and Conditions */}
            <div className="mt-8 flex items-start gap-3">
                <button
                    type="button"
                    onClick={() => setAgreeToTerms(!agreeToTerms)}
                    className="mt-0.5 flex-shrink-0"
                >
                    <div
                        className={`w-5 h-5 rounded border-2 transition-all flex items-center justify-center ${
                            agreeToTerms
                                ? "border-transparent"
                                : "border-gray-600 hover:border-gray-500"
                        }`}
                        style={{
                            backgroundColor: agreeToTerms
                                ? "#F1CC06"
                                : "transparent",
                        }}
                    >
                        {agreeToTerms && (
                            <Check className="w-3 h-3 text-black" />
                        )}
                    </div>
                </button>
                <p className="text-sm text-gray-300 leading-relaxed">
                    I agree to the{" "}
                    <button
                        className="hover:underline"
                        style={{ color: "#F1CC06" }}
                    >
                        Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                        className="hover:underline"
                        style={{ color: "#F1CC06" }}
                    >
                        Privacy Policy
                    </button>
                </p>
            </div>

            {error && <div className="text-xs text-red-500">{error}</div>}

            <Button
                type="submit"
                isLoading={isLoading}
                disabled={isLoading || !agreeToTerms}
            >
                <span>Sign Up</span>
                <ArrowRight className="w-4 h-4" />
            </Button>
        </form>
    );
}