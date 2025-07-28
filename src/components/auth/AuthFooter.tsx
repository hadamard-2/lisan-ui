import { Link } from "react-router-dom";

interface AuthLinkProps {
    message: string;
    linkText: string;
    linkTo: string;
}

export function AuthLink({ message, linkText, linkTo }: AuthLinkProps) {
    return (
        <div className="text-center">
            <p className="text-gray-300">
                {message}{" "}
                <Link
                    to={linkTo}
                    className="font-semibold hover:underline"
                    style={{ color: "#F1CC06" }}
                >
                    {linkText}
                </Link>
            </p>
        </div>
    );
}

interface AuthDescriptionProps {
    description: string;
}

export function AuthDescription({ description }: AuthDescriptionProps) {
    return (
        <div className="text-center mt-6 text-sm text-gray-400">
            <p>{description}</p>
        </div>
    );
}
