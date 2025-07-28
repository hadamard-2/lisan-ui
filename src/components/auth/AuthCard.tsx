import { type ReactNode } from "react";

interface AuthCardProps {
    children: ReactNode;
    className?: string;
}

export default function AuthCard({ children, className = "" }: AuthCardProps) {
    return (
        <div
            className={`bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700 ${className}`}
        >
            {children}
        </div>
    );
}
