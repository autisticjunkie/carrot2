'use client'

import { useEffect, useState } from 'react'
import { NavBar } from '@/components/nav-bar'

export default function OraclePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-[#041424] text-cyan-500 relative overflow-hidden">
      {/* Central Orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-20 animate-pulse" />
          <div className="absolute inset-2 bg-cyan-400 rounded-full opacity-30 animate-ping" />
          <div className="absolute inset-4 bg-cyan-300 rounded-full opacity-40" />
          <div className="absolute inset-0 border-4 border-cyan-500 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
          <div className="absolute inset-0 border-4 border-cyan-400 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          <div className="absolute inset-8 bg-white rounded-full blur-sm animate-pulse" />
        </div>
      </div>

      {/* Circuit Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full border-r border-cyan-900/30">
          <div className="absolute top-1/4 right-0 w-8 h-8 bg-cyan-500/20 rounded-full animate-pulse" />
          <div className="absolute top-1/4 right-0 w-32 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-cyan-900/30">
          <div className="absolute top-3/4 left-0 w-8 h-8 bg-cyan-500/20 rounded-full animate-pulse" />
          <div className="absolute top-3/4 left-0 w-32 h-px bg-gradient-to-l from-cyan-500 to-transparent" />
        </div>
      </div>

      {/* Data Panels */}
      <div className="absolute top-8 left-8 w-64 bg-cyan-950/50 backdrop-blur-sm rounded-lg border border-cyan-500/20 p-4">
        <div className="space-y-4">
          <div className="h-2 bg-cyan-900 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-500 rounded-full animate-progress" style={{ width: '75%' }} />
          </div>
          <div className="h-2 bg-cyan-900 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-400 rounded-full animate-progress" style={{ width: '90%' }} />
          </div>
          <div className="h-2 bg-cyan-900 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-300 rounded-full animate-progress" style={{ width: '60%' }} />
          </div>
        </div>
      </div>

      <div className="absolute top-8 right-8 w-64 bg-cyan-950/50 backdrop-blur-sm rounded-lg border border-cyan-500/20 p-4">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div 
              key={i} 
              className="aspect-square rounded-full border border-cyan-500/50 animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Loading Overlay */}
      <div 
        className={`absolute inset-0 bg-[#041424] transition-opacity duration-1000 flex items-center justify-center ${
          loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-2xl font-mono">INITIALIZING ORACLE...</div>
      </div>

      <NavBar />

      <style jsx>{`
        @keyframes progress {
          0% { transform: translateX(-100%) }
          100% { transform: translateX(0) }
        }
        .animate-progress {
          animation: progress 2s ease-out forwards;
        }
      `}</style>
    </main>
  )
}

