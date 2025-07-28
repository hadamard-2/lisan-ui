type PracticeButtonProps = {
    onPractice: () => void;
};

export default function PracticeButton({ onPractice }: PracticeButtonProps) {
    return (
        <button
            onClick={onPractice}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 rounded-2xl shadow-lg text-xl transition-all duration-200 mb-6"
        >
            Start Practice
        </button>
    );
}
