export default function WhyChooseUs() {
  return (
    <section className="pt-5 pb-15 px-4 sm:px-8">
      {/* TITLE SECTION */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#163c71] uppercase">
          Why Choose <br />
          <span className="text-[#609129]">Our Diagnostic Centre?</span>
        </h2>

        <div className="w-40 h-1 bg-[#609129] mx-auto mt-4 rounded-full shadow-[0_0_20px_#609129]"></div>
      </div>

      {/* POINTS SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">

        {/* CARD */}
        {[
          {
            title: "Trust",
            text: "NABL stands for the National Accreditation Board for Testing and Calibration Laboratories.",
          },
          {
            title: "Speed",
            text: "Results for key tests in hours — faster results allow doctors to begin treatment sooner.",
          },
          {
            title: "Convenience",
            text: "Lab@Home service available with highly trained phlebotomists visiting the patient's home.",
          },
          {
            title: "Precision",
            text: "Utilizes state-of-the-art equipment including fully automated hematology and biochemistry analyzers.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="
              bg-[#163c71] text-white p-6 rounded-xl shadow-lg 
              transition-all duration-300 ease-out transform 
              hover:scale-[1.03] hover:shadow-[0_0_25px_#163c71cc]
              hover:-translate-y-1
            "
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
