export default function Messaging() {
    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Messaging Optimization</h2>
            <p>Improve CTAs, headlines, and messaging clarity with AI.</p>

            <div className="mt-6">
                <h3 className="text-xl font-semibold">Enter Your Message</h3>
                <textarea
                    placeholder="Paste your CTA or ad copy here..."
                    className="p-2 rounded bg-gray-700 text-white w-full h-20"
                ></textarea>
                <button className="mt-4 p-2 bg-green-500 rounded">Analyze Message</button>
            </div>
        </div>
    );
}
