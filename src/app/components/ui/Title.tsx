'use client';
interface TitleProps {
  bold: string;
  normal: string;
}

export default function Title({ bold, normal }: TitleProps) {
  return (
    <div className="flex items-end gap-2">
      <div className="relative">
        <h2 className="text-2xl font-bold text-black">{bold}</h2>
        <div className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 rounded-sm" />
      </div>
      <h2 className="text-2xl text-black">{normal}</h2>
    </div>
  );
}
