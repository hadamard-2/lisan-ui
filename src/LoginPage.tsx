import { useState } from "react";
import { Mail, Phone, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [loginMethod, setLoginMethod] = useState("email");
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        setIsLoading(true);
        // Simulate login process
        setTimeout(() => {
            setIsLoading(false);
            alert("Login successful!");
        }, 1000);
    };

    const handleGoogleLogin = () => {
        alert("Google login clicked!");
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4"
            style={{ backgroundColor: "#14161B" }}
        >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-20 left-10 text-6xl opacity-10 font-bold amharic-text"
                    style={{ color: "#F1CC06" }}
                >
                    ሀ
                </div>
                <div
                    className="absolute top-40 right-20 text-4xl opacity-10 font-bold amharic-text"
                    style={{ color: "#F1CC06" }}
                >
                    ለ
                </div>
                <div
                    className="absolute bottom-20 left-20 text-5xl opacity-10 font-bold amharic-text"
                    style={{ color: "#F1CC06" }}
                >
                    መ
                </div>
                <div
                    className="absolute bottom-40 right-10 text-3xl opacity-10 font-bold amharic-text"
                    style={{ color: "#F1CC06" }}
                >
                    ሠ
                </div>
            </div>

            <div className="w-full max-w-md relative">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl text-white mb-2">
                        <span
                            className="amharic-text font-bold"
                            style={{ color: "#F1CC06" }}
                        >
                            ልሳን
                        </span>
                        <span className="text-white font-medium ml-3">Lisan</span>
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Welcome back to your Amharic journey!
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
                    {/* Google Login Button */}
                    <button
                        onClick={handleGoogleLogin}
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
                            Continue with Google
                        </span>
                    </button>

                    {/* Divider */}
                    <div className="flex items-center mb-6">
                        <div className="flex-1 border-t border-gray-600"></div>
                        <span className="px-4 text-gray-400 text-sm">or</span>
                        <div className="flex-1 border-t border-gray-600"></div>
                    </div>

                    {/* Login Method Toggle */}
                    <div className="flex bg-gray-700 rounded-xl p-1 mb-6">
                        <button
                            onClick={() => setLoginMethod("email")}
                            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-all ${
                                loginMethod === "email"
                                    ? "bg-gray-600 shadow-sm text-white"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            <Mail className="w-4 h-4" />
                            <span className="text-sm font-medium">Email</span>
                        </button>
                        <button
                            onClick={() => setLoginMethod("phone")}
                            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-all ${
                                loginMethod === "phone"
                                    ? "bg-gray-600 shadow-sm text-white"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            <Phone className="w-4 h-4" />
                            <span className="text-sm font-medium">Phone</span>
                        </button>
                    </div>

                    {/* Login Form */}
                    <div className="space-y-4">
                        {/* Email/Phone Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                {loginMethod === "email"
                                    ? "Email Address"
                                    : "Phone Number"}
                            </label>
                            <input
                                type={loginMethod === "email" ? "email" : "tel"}
                                value={loginMethod === "email" ? email : phone}
                                onChange={(e) =>
                                    loginMethod === "email"
                                        ? setEmail(e.target.value)
                                        : setPhone(e.target.value)
                                }
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all"
                                placeholder={
                                    loginMethod === "email"
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
                                    placeholder="Enter your password"
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
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right">
                            <button
                                type="button"
                                className="text-sm font-medium hover:underline"
                                style={{ color: "#F1CC06" }}
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* Login Button */}
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className="w-full text-black font-semibold py-3 px-4 rounded-xl hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                            style={{ backgroundColor: "#F1CC06" }}
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <span>Log In</span>
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center mt-6 pt-6 border-t border-gray-600">
                        <p className="text-gray-300">
                            New to Lisan?{" "}
                            <Link
                                to={"/signup"}
                                className="font-semibold hover:underline"
                                style={{ color: "#F1CC06" }}
                            >
                                Sign up here
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-sm text-gray-400">
                    <p>Start your journey to fluency in Amharic</p>
                </div>
            </div>
        </div>
    );
}
