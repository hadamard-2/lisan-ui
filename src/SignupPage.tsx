import { useState } from "react";
import { Mail, Phone, Eye, EyeOff, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
    const [signupMethod, setSignupMethod] = useState("email");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (!agreeToTerms) {
            alert("Please agree to the terms and conditions");
            return;
        }

        setIsLoading(true);
        // Simulate signup process
        setTimeout(() => {
            setIsLoading(false);
            alert("Account created successfully!");
        }, 1500);
    };

    const handleGoogleSignup = () => {
        alert("Google signup clicked!");
    };

    const passwordStrength = () => {
        if (password.length === 0) return 0;
        if (password.length < 6) return 1;
        if (password.length < 10) return 2;
        return 3;
    };

    const getPasswordStrengthColor = () => {
        const strength = passwordStrength();
        if (strength === 0) return "bg-gray-600";
        if (strength === 1) return "bg-red-500";
        if (strength === 2) return "bg-yellow-500";
        return "bg-green-500";
    };

    const getPasswordStrengthText = () => {
        const strength = passwordStrength();
        if (strength === 0) return "";
        if (strength === 1) return "Weak";
        if (strength === 2) return "Good";
        return "Strong";
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4"
            style={{ backgroundColor: "#14161B" }}
        >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-10 left-5 text-5xl opacity-8 font-bold amharic-text"
                    style={{ color: "#F1CC06" }}
                >
                    ረ
                </div>
                <div
                    className="absolute top-32 right-10 text-3xl opacity-8 font-bold amharic-text"
                    style={{ color: "#F1CC06" }}
                >
                    ሰ
                </div>
                <div
                    className="absolute bottom-32 left-16 text-4xl opacity-8 font-bold amharic-text"
                    style={{ color: "#F1CC06" }}
                >
                    ቀ
                </div>
                <div
                    className="absolute bottom-10 right-5 text-6xl opacity-8 font-bold amharic-text"
                    style={{ color: "#F1CC06" }}
                >
                    ተ
                </div>
                <div
                    className="absolute top-1/2 left-1/4 text-2xl opacity-5 font-bold amharic-text"
                    style={{ color: "#F1CC06" }}
                >
                    ወ
                </div>
                <div
                    className="absolute top-1/3 right-1/4 text-3xl opacity-5 font-bold amharic-text"
                    style={{ color: "#F1CC06" }}
                >
                    ዘ
                </div>
            </div>

            <div className="w-full max-w-md relative">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl text-white mb-2">
                        <span className="amharic-text font-bold" style={{ color: "#F1CC06" }}>ልሳን</span>
                        <span className="text-white font-semibold ml-3">Lisan</span>
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Ready to start learning Amharic?
                    </p>
                </div>

                {/* Signup Card */}
                <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
                    {/* Google Signup Button */}
                    <button
                        onClick={handleGoogleSignup}
                        className="w-full flex items-center justify-center gap-3 bg-gray-700 border border-gray-600 rounded-xl py-3 px-4 hover:bg-gray-600 hover:border-gray-500 transition-all duration-200 mb-6"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        <span className="text-white font-medium">
                            Sign up with Google
                        </span>
                    </button>

                    {/* Divider */}
                    <div className="flex items-center mb-6">
                        <div className="flex-1 border-t border-gray-600"></div>
                        <span className="px-4 text-gray-400 text-sm">or</span>
                        <div className="flex-1 border-t border-gray-600"></div>
                    </div>

                    {/* Signup Method Toggle */}
                    <div className="flex bg-gray-700 rounded-xl p-1 mb-6">
                        <button
                            onClick={() => setSignupMethod("email")}
                            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-all ${
                                signupMethod === "email"
                                    ? "bg-gray-600 shadow-sm text-white"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            <Mail className="w-4 h-4" />
                            <span className="text-sm font-medium">Email</span>
                        </button>
                        <button
                            onClick={() => setSignupMethod("phone")}
                            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-all ${
                                signupMethod === "phone"
                                    ? "bg-gray-600 shadow-sm text-white"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            <Phone className="w-4 h-4" />
                            <span className="text-sm font-medium">Phone</span>
                        </button>
                    </div>

                    {/* Signup Form */}
                    <div className="space-y-4">
                        {/* Name Fields */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all"
                                    placeholder="First name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all"
                                    placeholder="Last name"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email/Phone Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                {signupMethod === "email"
                                    ? "Email Address"
                                    : "Phone Number"}
                            </label>
                            <input
                                type={
                                    signupMethod === "email" ? "email" : "tel"
                                }
                                value={signupMethod === "email" ? email : phone}
                                onChange={(e) =>
                                    signupMethod === "email"
                                        ? setEmail(e.target.value)
                                        : setPhone(e.target.value)
                                }
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all"
                                placeholder={
                                    signupMethod === "email"
                                        ? "Enter your email"
                                        : "Enter your phone number"
                                }
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full px-4 py-3 pr-12 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all"
                                    placeholder="Create a password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>

                            {/* Password Strength Indicator */}
                            {password && (
                                <div className="mt-2">
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 bg-gray-600 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                                                style={{
                                                    width: `${
                                                        (passwordStrength() /
                                                            3) *
                                                        100
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

                        {/* Confirm Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    className="w-full px-4 py-3 pr-12 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all"
                                    placeholder="Confirm your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>

                            {/* Password Match Indicator */}
                            {confirmPassword && (
                                <div className="mt-2">
                                    {password === confirmPassword ? (
                                        <div className="flex items-center gap-2 text-green-400">
                                            <Check className="w-4 h-4" />
                                            <span className="text-xs">
                                                Passwords match
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 text-red-400">
                                            <span className="text-xs">
                                                Passwords do not match
                                            </span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-start gap-3">
                            <button
                                type="button"
                                onClick={() => setAgreeToTerms(!agreeToTerms)}
                                className="mt-1 flex-shrink-0"
                            >
                                <div
                                    className={`w-5 h-5 rounded border-2 transition-all ${
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
                                        <Check className="w-3 h-3 text-black m-auto" />
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

                        {/* Sign Up Button */}
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading || !agreeToTerms}
                            className="w-full text-black font-semibold py-3 px-4 rounded-xl hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                            style={{ backgroundColor: "#F1CC06" }}
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <span>Create Account</span>
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </div>

                    {/* Login Link */}
                    <div className="text-center mt-6 pt-6 border-t border-gray-600">
                        <p className="text-gray-300">
                            Already have an account?{" "}
                            <Link
                                to={"/login"}
                                className="font-semibold hover:underline"
                                style={{ color: "#F1CC06" }}
                            >
                                Log in here
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-sm text-gray-400">
                    <p>Join thousands learning Amharic with Lisan</p>
                </div>
            </div>
        </div>
    );
}
