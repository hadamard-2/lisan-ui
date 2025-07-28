interface AuthHeaderProps {
    title: string;
    subtitle: string;
    showAmharic?: boolean;
}

export default function AuthHeader({
    title,
    subtitle,
    showAmharic = true,
}: AuthHeaderProps) {
    return (
        <div className="text-center mb-8">
            <h1 className="text-4xl text-white mb-2">
                {showAmharic && (
                    <span
                        className="amharic-text font-bold"
                        style={{ color: "#F1CC06" }}
                    >
                        ልሳን
                    </span>
                )}
                <span className="text-white font-medium ml-3">{title}</span>
            </h1>
            <p className="text-gray-300 text-lg">{subtitle}</p>
        </div>
    );
}
