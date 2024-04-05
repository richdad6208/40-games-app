import Image from "next/image";

export default function page() {
  return (
    <div className="h-[100dvh] bg-gray-200">
      <h2 className="mb-4 font-bold text-center text-ellipsis text-4xl">
        About
      </h2>
      <p className="text-center mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta enim
        deleniti
      </p>
      <div className="flex px-7 gap-5">
        <div className="flex-auto relative w-[100px] h-[300px] rounded-md overflow-hidden">
          <Image
            src="/images/mountain.jpg"
            alt="산"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-auto bg-white rounded-md">
          <div className="flex">
            <div className="flex-auto text-center">History</div>
            <div className="flex-auto text-center">Vision</div>
            <div className="flex-auto text-center">Goals</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
