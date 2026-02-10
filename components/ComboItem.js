import Image from "next/image";

export default function ComboItem({ item, className }) {
  return (
    <div
      key={item.id}
      className={`flex-shrink-0  border-2 border-gray-300 rounded-lg transition-all duration-300 ease-in-out hover:border-green-500 hover:shadow-lg cursor-pointer ${className}`}
    >
      <div className="relative w-full rounded-t-lg h-48 sm:h-56 md:h-60 lg:h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="100vw"
          className="object-cover transition-opacity duration-1000 ease-in-out"
          priority
        />
      </div>
      <div className="p-4">
        <span className="font-bold text-lg mb-4 block">{item.title}</span>
        <p className="text-sm text-gray-600">{item.description}</p>
        <span className="font-extrabold mt-4 block text-lg">RS. {item.price}</span>
      </div>
    </div>
  );
}
