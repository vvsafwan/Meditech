import { services } from "@/data/data";
import { galleryImages } from "@/data/data";

export default function DiagnosticServices() {

    return (
        <div>

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
                        Diagnostic Services
                    </h1>

                    <p className="text-sm sm:text-base text-gray-200">
                        Home &gt; Diagnostic Services
                    </p>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="py-16 px-6 sm:px-12 lg:px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6
                            bg-white shadow-md rounded-lg hover:shadow-xl transition-all"
                        >
                            <div className="w-20 h-20 flex items-center justify-center 
                                        bg-[#163c71]/10 text-[#163c71] rounded-full mb-4">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-[#163c71] mb-2">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </section>

            {/* GALLERY HEADING */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#163c71] uppercase">
                    Diagnostic Lab <br />
                    <span className="text-[#609129]">Image Gallery</span>
                </h2>

                <div className="w-40 h-1 bg-[#609129] mx-auto mt-4 rounded-full shadow-[0_0_20px_#609129]"></div>
            </div>

            {/* IMAGE GALLERY / COLLAGE */}
            <section className="px-6 sm:px-12 lg:px-20 pb-20">
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-7xl mx-auto">

                    {galleryImages.map((img, index) => (
                        <div key={index} className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md group">
                            <img
                                src={img}
                                alt="Diagnostic Lab"
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    ))}

                </div>
            </section>


        </div>
    );
}
