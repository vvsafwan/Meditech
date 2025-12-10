import Image from "next/image";
import { team } from "../data/data"; // import the team array

export default function TeamSection() {
  return (
    <section className="py-16 px-5 bg-[#f4f6f9]">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase">
          <span className="text-[#609129]">OUR TEAM</span>
        </h2>
        <div className="w-40 h-1 bg-[#609129] mx-auto mt-4 rounded-full shadow-[0_0_20px_#609129]"></div>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-2">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition hover:scale-[1.03] hover:shadow-lg"
          >
            <div className="w-35 md:w-55 h-50 md:h-70 mb-4 relative">
              <Image
                src={member.image}
                alt={member.name}
                width={750}
                height={750}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#163c71]">{member.name}</h3>
            <p className="text-[#609129] font-semibold uppercase text-sm tracking-widest mb-2">
                {member.designation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
