import Link from "next/link";

export default function PrimaryButton({ text, color = 'bg-[#163c71]', pageLink }) {
  const hoverColor = color === 'bg-[#163c71]' ? 'hover:bg-[#153d7e]' : 'hover:opacity-90';
  
  return (
    <Link
      href={pageLink}
      className={`${color} text-white px-10 py-3 font-medium ${hoverColor} transition cursor-pointer`}
    >
      {text}
    </Link>
  );
}
