type DailyGoalProps = {
    xpToday: number;
    dailyGoal: number;
};

export default function DailyGoal({ xpToday, dailyGoal }: DailyGoalProps) {
    const percent = Math.min(100, Math.round((xpToday / dailyGoal) * 100));
    const goalMet = xpToday >= dailyGoal;

    return (
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 mb-6 border border-gray-700 w-full">
            <div className="flex items-center justify-between mb-2">
                <span className="text-lg text-gray-200 font-semibold">
                    Daily Goal
                </span>
                <span
                    className={`font-bold ${
                        goalMet ? "text-green-400" : "text-yellow-400"
                    }`}
                >
                    {xpToday} / {dailyGoal} XP
                </span>
            </div>
            <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full transition-all duration-300 ${
                        goalMet ? "bg-green-400" : "bg-yellow-400"
                    }`}
                    style={{ width: `${percent}%` }}
                />
            </div>
            <div className="mt-2 text-sm text-gray-400 text-center">
                {goalMet
                    ? "Goal reached! 🎉"
                    : "Keep going to reach your goal!"}
            </div>
        </div>
    );
}
