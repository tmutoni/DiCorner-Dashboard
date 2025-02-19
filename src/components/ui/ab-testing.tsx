export default function ABTesting() {
    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg">
            <h2 className="text-2xl font-bold mb-4">A/B Testing</h2>
            <p>Optimize your website with AI-powered experiments.</p>

            <div className="mt-6">
                <h3 className="text-xl font-semibold">Create a New Test</h3>
                <input
                    type="text"
                    placeholder="Enter test name"
                    className="p-2 rounded bg-gray-700 text-white w-full"
                />
                <button className="mt-4 p-2 bg-blue-500 rounded">Start A/B Test</button>
            </div>
        </div>
    );
}
