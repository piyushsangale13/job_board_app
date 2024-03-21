import Suggest from "./Suggest";

export default function Home() {
    const suggestions = [
        { title: "Founder" },
        { title: "Founding partner" },
        { title: "Board member" },
        { title: "Entrepreneur in residence" },
        { title: "Personal Assistant" },
        { title: "Sales" },
        { title: "Project Manager" },
        { title: "Co-founder" },
        { title: "Developer" },
        { title: "Managing director" }
    ];
    return (
        <div className='my-14'>
            <h1>Suggested job searches</h1>
            <div className="flex justify-center mt-6 space-y-3 space-x-3 flex-wrap">
                {suggestions.map((suggestProps, index) => (
                    <Suggest key={index} {...suggestProps} />
                ))}
            </div>
        </div>
    );
}