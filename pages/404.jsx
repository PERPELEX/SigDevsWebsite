// pages/404.jsx
import Image from "next/image"
import { useRouter } from 'next/router'

export default function Custom404() {
    const router = useRouter()

    const handleGoBack = () => {
        window.history.go(-2) // Go back two steps in the browser history
    }

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
                className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
            >
                Go Back
            </button>
        </div>
    )
}