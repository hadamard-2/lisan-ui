import { useState, type ChangeEvent } from "react";
import { EyeOff, Eye } from "lucide-react";

interface InputProps {
    label: string;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required?: boolean;
    className?: string;
}

export function Input({
    label,
    type = "text",
    value,
    onChange,
    placeholder,
    required = false,
    className = "",
}: InputProps) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-xl focus:border-[#F1CC06] focus:outline-none text-white placeholder-gray-400 transition-all ${className}`}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}

interface PasswordInputProps {
    label?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
}

export function PasswordInput({
    label = "Password",
    value,
    onChange,
    placeholder = "Enter your password",
    required = false,
}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
                {label}
            </label>
            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    className="w-full px-4 py-3 pr-12 bg-gray-700 border-2 border-gray-600 rounded-xl focus:border-[#F1CC06] focus:outline-none text-white placeholder-gray-400 transition-all"
                    placeholder={placeholder}
                    required={required}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
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
    );
}
