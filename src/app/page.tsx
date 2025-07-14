import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-8">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-black tracking-tighter mb-3">
              Language Whisperer
            </h1>
            <div className="h-1 w-16 bg-gray-800 mx-auto"></div>
          </div>

          <div className="space-y-5">
            <p className="text-gray-700 text-lg leading-relaxed">
              Practice speaking your target language through{" "}
              <span className="font-medium text-gray-900">
                natural AI conversations
              </span>
              . Set your fluency level, choose from engaging scenarios, and
              improve your speaking skills with{" "}
              <span className="font-medium text-gray-900">
                real-time voice chat
              </span>
              .
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Get instant translations to bridge understanding and accelerate
              your language learning journey.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-2">
          <Link
            href="/login"
            className="text-center bg-black text-white py-3.5 px-6 rounded-lg text-lg font-medium hover:bg-gray-800 transition duration-200 border border-black shadow-sm hover:shadow-md"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-center bg-white text-black py-3.5 px-6 rounded-lg text-lg font-medium hover:bg-gray-50 transition duration-200 border border-gray-300 shadow-sm hover:shadow-md"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
