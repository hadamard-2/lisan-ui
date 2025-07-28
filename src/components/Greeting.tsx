type GreetingProps = {
    name: string;
    streak: number;
    totalXP: number;
};

export default function Greeting({ name, streak, totalXP }: GreetingProps) {
    return (
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 mb-6 border border-gray-700 w-full text-center">
            <h2 className="text-3xl font-bold text-white mb-2">
                <span className="amharic-text font-bold" style={{ color: "#F1CC06" }}>ልሳን</span>
                <span className="ml-3 text-white font-semibold">Lisan</span>
            </h2>
            <p className="text-xl text-gray-200 mb-2">
                Welcome back, <span className="font-bold" style={{ color: "#F1CC06" }}>{name}</span>!
            </p>
            <div className="flex justify-center gap-8 mt-4">
                <div className="flex flex-col items-center">
                    <span className="text-lg text-gray-300">Streak</span>
                    <span className="text-2xl font-bold" style={{ color: "#F1CC06" }}>{streak} 🔥</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-lg text-gray-300">Total XP</span>
                    <span className="text-2xl font-bold text-green-400">{totalXP}</span>
                </div>
            </div>
        </div>
    );
}