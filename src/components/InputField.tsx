import React from "react";

interface InputFieldProps {
    type?: string;
    label?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    icon?: React.ReactNode;
    className?: string;
    inputClassName?: string;
    disabled?: boolean;
    name?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    type = "text",
    label,
    value,
    onChange,
    placeholder,
    required = false,
    icon,
    className = "",
    inputClassName = "",
    disabled = false,
    name,
}) => (
    <div className={className}>
        {label && (
            <label
                className="block text-sm font-medium text-gray-300 mb-2"
                htmlFor={name}
            >
                {label}
            </label>
        )}
        <div className="relative">
            <input
                id={name}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                name={name}
                className={`w-full px-4 py-3 ${
                    icon ? "pr-12" : ""
                } bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all ${inputClassName}`}
            />
            {icon && (
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                    {icon}
                </span>
            )}
        </div>
    </div>
);

export default InputField;
