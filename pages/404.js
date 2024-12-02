// pages/404.jsx
import Image from "next/image";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  const handleGoBack = () => {
    window.history.go(-2); // Go back two steps in the browser history
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/404.png"
        width={500}
        height={500}
        alt="404 - Page Not Found"
      />
      <button
        onClick={handleGoBack}
        className="text-lg font-medium px-4 py-2 border-2 bg-sig-blue border-sig-blue text-white rounded-lg hover:bg-black hover:text-night-blue hover:border-night-blue transition-all ease-in-out duration-200"
      >
        Go Back
      </button>
    </div>
  );
}
