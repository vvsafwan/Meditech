export const metadata = {
    title: "Blog | Meditech Diagnostics Center",
    description: "Industry insights, health tips, and company updates from Meditech Diagnostics Center",
};

export default function Blog() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">

            {/* HERO SECTION */}
            <section
                className="relative w-full h-[200px] flex items-center justify-center text-white overflow-hidden"
                style={{
                    background: `linear-gradient(to right, #163c71 40%, rgba(22,60,113,0.5) 100%), url('/medherobg.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="relative z-10 text-center px-6 sm:px-10 max-w-5xl">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Industry Insights & Updates
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200">
                        Home &gt; Blog
                    </p>
                </div>
            </section>

            {/* BLOG CONTENT */}
            <div className="max-w-7xl mx-auto py-10 px-2 space-y-12">

                {/* INDUSTRY INSIGHTS */}
                <section>
                    <h2 className="text-3xl font-bold text-[#163c71] mb-6 border-b-2 border-[#609129] pb-2">
                        Industry Insights: Know Your Body
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        <BlogCard
                            title="Thyroid & TSH Test"
                            content="Don't overlook subtle symptoms like fatigue or mood changes. The TSH Test is the essential, accurate measure for detecting thyroid disorders early, allowing for timely treatment and improved health."
                            image="/blog/thyroid.jpg"
                        />
                        <BlogCard
                            title="Chronic Fatigue"
                            content="Persistent, debilitating exhaustion is more than just being tired. It is often a sign of underlying issues like anemia, vitamin deficiency (D or B12), or organ dysfunction. Testing is key to identifying and treating the root cause."
                            image="/blog/fatigue.jpg"
                        />
                        <BlogCard
                            title="Kidney Health"
                            content="Kidneys often fail silently. Routine tests like Serum Creatinine (to estimate GFR) and Urine Albumin-Creatinine Ratio (UACR) are crucial for early detection of damage, ensuring timely care and preservation of kidney function."
                            image="/blog/kidney.jpg"
                        />
                    </div>
                </section>

                {/* COMPANY UPDATES */}
                <section>
                    <h2 className="text-3xl font-bold text-[#163c71] mb-6 border-b-2 border-[#609129] pb-2">
                        Company Updates / Case Studies
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        <BlogCard
                            title="New Health Packages"
                            content="We have launched a range of new, comprehensive Preventive Health Packages. These tailored bundles offer better value and convenience, supporting your commitment to proactive health management."
                            image="/blog/package.jpg"
                        />
                        <BlogCard
                            title="Lab@Home Expansion"
                            content="Our convenient Lab@Home service, providing at-home sample collection by certified phlebotomists, has significantly expanded its coverage area, making diagnostics more accessible and hassle-free."
                            image="/blog/lab.jpg"
                        />
                        <BlogCard
                            title="Accurate Diagnosis Case Study"
                            content="A recent case study demonstrated how our specialized testing and expert interpretation quickly achieved an accurate, early diagnosis of rheumatoid arthritis, leading to immediate and successful targeted treatment for the patient."
                            image="/blog/accurate.jpg"
                        />
                    </div>
                </section>

            </div>
        </div>
    );
}

/* ----------------------------------------- */
/* REUSABLE COMPONENTS */
/* ----------------------------------------- */

function BlogCard({ title, content, image }) {
    return (
        <div className="bg-white shadow-lg overflow-hidden border border-gray-100 flex flex-col">
            {image && (
                <div className="h-48 w-full overflow-hidden">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
                {/* <h3 className="text-xl font-semibold text-[#609129] mb-2">{title}</h3> */}
                <p className="text-[#609129] font-semibold uppercase text-lg tracking-widest mb-2">
                    { title }
                </p>
                <p className="text-gray-600 font-semibold flex-1 text-sm">{content}</p>
                {/* <button className="mt-4 self-start px-4 py-2 bg-[#163c71] text-white rounded-lg hover:bg-[#0f2a50] transition">
          Read More
        </button> */}
            </div>
        </div>
    );
}
