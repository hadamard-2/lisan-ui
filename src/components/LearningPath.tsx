type Unit = {
    id: number;
    name: string;
    completed: boolean;
};

type LearningPathProps = {
    units: Unit[];
    currentUnit: number;
};

export default function LearningPath({
    units,
    currentUnit,
}: LearningPathProps) {
    return (
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 mb-6 border border-gray-700 w-full">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
                Your Learning Path
            </h3>
            <div className="flex gap-6 justify-center items-center">
                {units.map((unit) => (
                    <div
                        key={unit.id}
                        className={`flex flex-col items-center px-2`}
                    >
                        <div
                            className={`w-12 h-12 flex items-center justify-center rounded-full border-2
                                ${
                                    unit.completed
                                        ? "bg-green-400 border-green-500 text-white"
                                        : unit.id === currentUnit
                                        ? "bg-yellow-400 border-yellow-500 text-gray-900 font-bold"
                                        : "bg-gray-700 border-gray-600 text-gray-400"
                                }
                            `}
                        >
                            {unit.completed
                                ? "✓"
                                : unit.id === currentUnit
                                ? "▶"
                                : unit.id}
                        </div>
                        <span
                            className={`mt-2 text-sm ${
                                unit.completed
                                    ? "text-green-400"
                                    : unit.id === currentUnit
                                    ? "text-yellow-400"
                                    : "text-gray-400"
                            }`}
                        >
                            {unit.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
