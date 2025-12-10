'use client'

import { Suspense, useState } from "react";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";
import { labCenters } from "@/data/data";
import Loader from "@/components/Loader";

export default function LabCenters() {
    const [selectedMap, setSelectedMap] = useState(null);

    return (
        <Suspense fallback={<Loader />}>
            <div>

                {/* PAGE HEADING */}
                <div className="text-center mb-12 mt-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#163c71] uppercase">
                        Our Lab <br />
                        <span className="text-[#609129]">Diagnostic Centers</span>
                    </h2>

                    <div className="w-40 h-1 bg-[#609129] mx-auto mt-4 rounded-full shadow-[0_0_20px_#609129]"></div>
                </div>

                {selectedMap && (
                    <section className="px-6 sm:px-12 lg:px-20 pb-20">
                        <h3 className="text-2xl font-bold text-[#163c71] mb-4">Location Map</h3>
                        <div>{selectedMap}</div>
                    </section>
                )}

                {/* CENTERS GRID */}
                <section className="px-6 sm:px-12 lg:px-20 pb-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

                        {labCenters.map((center, index) => (
                            <div
                                key={index}
                                className="p-5 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl cursor-pointer transition-all"
                                onClick={() => setSelectedMap(center.map)}
                            >
                                <h3 className="text-xl font-semibold text-[#163c71] mb-2">
                                    {center.name}
                                </h3>

                                <p className="text-gray-600 text-sm mb-3 flex gap-2">
                                    <FiMapPin className="text-[#609129] mt-1" />
                                    {center.address}
                                </p>

                                <p className="text-gray-700 font-semibold flex gap-2">
                                    <FiPhoneCall className="text-[#163c71] mt-1" />
                                    {center.phone}
                                </p>

                                <button className="mt-4 text-sm text-white bg-[#163c71] px-4 py-2 rounded-md">
                                    View on Map
                                </button>
                            </div>
                        ))}

                    </div>
                </section>

            </div>
        </Suspense>
    );
}
