import Image from "next/image"
import { NavBar } from "@/components/nav-bar"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Hero Section */}
      <div className="h-screen relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/79782931-71f5-445d-90fa-5985c30a3804.jpg-F16HkUdvHH6mgL29FtfXIAMqkDgcNq.jpeg"
          alt="Neon bunny logo with rainbow gradient"
          fill
          className="object-contain opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              First AI Bunny
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Explore the blockchain and have fun with CARROT
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <NavBar />
    </main>
  )
}

