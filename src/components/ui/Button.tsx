import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
    isLoading?: boolean;
}

export default function Button({
    children,
    onClick,
    disabled = false,
    variant = "primary",
    className = "",
    isLoading = false,
    ...props
}: ButtonProps) {
    const baseClasses =
        "w-full font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50";

    const variants = {
        primary: "text-black hover:opacity-90",
        secondary:
            "bg-gray-700 border border-gray-600 text-white hover:bg-gray-600 hover:border-gray-500",
    };

    const primaryStyle =
        variant === "primary" ? { backgroundColor: "#F1CC06" } : {};

    return (
        <button
            onClick={onClick}
            disabled={disabled || isLoading}
            className={`${baseClasses} ${variants[variant]} ${className}`}
            style={primaryStyle}
            {...props}
        >
            {isLoading ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            ) : (
                children
            )}
        </button>
    );
}
