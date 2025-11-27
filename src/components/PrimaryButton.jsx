export default function PrimaryButton({ text, color = 'bg-[#163c71]' }) {
  const hoverColor = color === 'bg-[#163c71]' ? 'hover:bg-[#153d7e]' : 'hover:opacity-90';
  
  return (
    <button
      className={`${color} text-white px-10 py-3 font-medium ${hoverColor} transition cursor-pointer`}
    >
      {text}
    </button>
  );
}
