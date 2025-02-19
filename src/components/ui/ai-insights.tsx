export default function AIInsights() {
    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg">
            <h2 className="text-2xl font-bold mb-4">AI Insights</h2>
            <p>Get AI-driven analysis of user engagement trends.</p>

            <div className="mt-6">
                <h3 className="text-xl font-semibold">Real-Time Engagement Metrics</h3>
                <ul className="list-disc pl-6">
                    <li>User attention time: <span className="text-green-400">72%</span></li>
                    <li>Drop-off rates: <span className="text-red-400">25%</span></li>
                    <li>Conversion likelihood: <span className="text-yellow-400">43%</span></li>
                </ul>
            </div>
        </div>
    );
}
