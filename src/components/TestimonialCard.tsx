import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  content: string;
  avatarUrl: string;
}

export default function TestimonialCard({ name, content, avatarUrl }: TestimonialCardProps) {
  return (
    <div className="bg-[#1e293b] text-white p-6 rounded-xl shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12">
          <Image
            src={avatarUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h4 className="font-semibold text-lg">{name}</h4>
      </div>
      <p className="text-gray-300 italic">“{content}”</p>
    </div>
  );
}
