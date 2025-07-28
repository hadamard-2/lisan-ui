import { type ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
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

            <div className="w-full max-w-md relative">{children}</div>
        </div>
    );
}
