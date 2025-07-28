import DailyGoal from "./components/DailyGoal";
import Greeting from "./components/Greeting";
import LearningPath from "./components/LearningPath";
import PracticeButton from "./components/PracticeButton";
import Motivation from "./components/Motivation";

const user = {
    name: "Eyob",
    streak: 7,
    totalXP: 1200,
    xpToday: 45,
    dailyGoal: 50,
    currentUnit: 3,
    units: [
        { id: 1, name: "Basics", completed: true },
        { id: 2, name: "Greetings", completed: true },
        { id: 3, name: "Food", completed: false },
        // ...more units
    ],
};

export default function HomePage() {
    const handlePractice = () => {
        alert("Practice started!");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-4 relative">
            {/* Decorative Amharic glyphs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-5 text-5xl opacity-8 font-bold amharic-text" style={{ color: "#F1CC06" }}>ረ</div>
                <div className="absolute top-32 right-10 text-3xl opacity-8 font-bold amharic-text" style={{ color: "#F1CC06" }}>ሰ</div>
                <div className="absolute bottom-32 left-16 text-4xl opacity-8 font-bold amharic-text" style={{ color: "#F1CC06" }}>ቀ</div>
                <div className="absolute bottom-10 right-5 text-6xl opacity-8 font-bold amharic-text" style={{ color: "#F1CC06" }}>ተ</div>
            </div>
            <div className="w-full max-w-2xl relative z-10">
                <Greeting
                    name={user.name}
                    streak={user.streak}
                    totalXP={user.totalXP}
                />
                <DailyGoal
                    xpToday={user.xpToday}
                    dailyGoal={user.dailyGoal}
                />
                <LearningPath
                    units={user.units}
                    currentUnit={user.currentUnit}
                />
                <PracticeButton onPractice={handlePractice} />
                <Motivation />
            </div>
        </div>
    );
}