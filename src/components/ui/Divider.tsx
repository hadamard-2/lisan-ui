interface DividerProps {
    text?: string;
}

export default function Divider({ text }: DividerProps) {
    return (
        <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-600" />
            {text && (
                <>
                    <span className="px-4 text-gray-400 text-sm">{text}</span>
                    <hr className="flex-1 border-gray-600" />
                </>
            )}
        </div>
    );
}
