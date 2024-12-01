
export default function Overview({ overview }: { overview: string }) {
    return (
        <section className="mb-8">
            <h2 className="project-title text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">{overview}</p>
        </section>
    );
}
