import { useState, useEffect } from "react";

const messages = [
    "Consistency is key! Keep your streak alive.",
    "Practice a little every day for big results.",
    "ልሳን በቀላሉ ትማራለህ – You’ll learn Amharic easily!",
    "Celebrate your progress, no matter how small.",
    "Challenge yourself to reach your daily goal!",
];

export default function Motivation() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % messages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gray-800 rounded-2xl shadow-xl p-4 border border-gray-700 w-full text-center mb-6">
            <span className="text-lg text-yellow-400 font-semibold">
                {messages[index]}
            </span>
        </div>
    );
}
