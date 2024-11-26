import { NavBar } from "@/components/nav-bar"

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>
      <p className="text-xl text-gray-400">This feature is under development. Stay tuned!</p>
      <NavBar />
    </main>
  )
}

