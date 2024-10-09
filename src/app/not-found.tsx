import notFoundImage from "@/assets/not-found.svg";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-96 h-72 relative">
        <Image
          layout="responsive"
          className="rounded-2xl"
          src={notFoundImage}
          alt="Not Found Visual"
        />
      </div>
    </div>
  );
}
