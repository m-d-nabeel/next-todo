import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getSession();
  if (user) {
    redirect("/todos");
  }
  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-full h-full bg-gradient-to-r to-purple-400 via-pink-500 from-red-500 absolute animate-pulse" />
      <header className="flex h-1/3 items-center justify-start p-6 z-10">
        <div className="text-2xl font-bold mb-auto text-white">Next Todo</div>
      </header>
      <main className="flex h-1/4 items-center justify-center">
        <div className="w-full max-w-md p-6 h-full bg-white rounded-md shadow-md relative">
          <h2 className="text-2xl font-bold text-center mb-4">Welcome</h2>
          <div className="flex justify-center absolute inset-0 top-1/2">
            <Link
              className="w-64 h-12 flex items-center justify-center bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              href={"/api/auth/login"}
            >
              Sign In
            </Link>
          </div>
        </div>
      </main>
      <footer className="p-6 mt-auto h-fit text-center text-white z-10">
        <p>© 2024 Next Todo. All rights reserved.</p>
      </footer>
    </div>
  );
}
