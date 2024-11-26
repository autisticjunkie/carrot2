"use client"

import { useEffect, useState, useRef } from 'react'
import { NavBar } from '@/components/nav-bar'
import Link from 'next/link'
import { Image, ListChecks, Trophy, MessageSquare, Badge, Paintbrush, Vote, Gamepad2, Unlock } from 'lucide-react'

const features = [
  { name: "NFTs", icon: Image, position: "top-[10%] left-[15%]" },
  { name: "Whitelist", icon: ListChecks, position: "top-[15%] right-[20%]" },
  { name: "Leaderboard", icon: Trophy, position: "bottom-[15%] left-[20%]" },
  { name: "ChatBot", icon: MessageSquare, position: "top-[75%] left-[25%]" },
  { name: "Digital Badge", icon: Badge, position: "bottom-[20%] right-[15%]" },
  { name: "Personalization", icon: Paintbrush, position: "top-[25%] left-[80%]" },
  { name: "Voting", icon: Vote, position: "bottom-[25%] left-[75%]" },
  { name: "Play to Earn", icon: Gamepad2, position: "top-[20%] left-[45%]" },
  { name: "Unlock Content", icon: Unlock, position: "bottom-[10%] right-[35%]" }
]

export default function PortalPage() {
  const [loading, setLoading] = useState(true)
  const [countdown, setCountdown] = useState(14 * 24 * 60 * 60) // 2 weeks in seconds
  const svgRef = useRef<SVGSVGElement>(null)
  const centralCircleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown > 0 ? prevCountdown - 1 : 0)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const drawLines = () => {
      if (svgRef.current && centralCircleRef.current) {
        const svg = svgRef.current
        svg.innerHTML = '' // Clear existing lines
        const centralCircle = centralCircleRef.current
        const centralRect = centralCircle.getBoundingClientRect()
        const svgRect = svg.getBoundingClientRect()

        const centralX = (centralRect.left + centralRect.right) / 2 - svgRect.left
        const centralY = (centralRect.top + centralRect.bottom) / 2 - svgRect.top

        features.forEach((feature, index) => {
          const featureElement = document.getElementById(`feature-${index}`)
          if (featureElement) {
            const featureRect = featureElement.getBoundingClientRect()
            const featureX = (featureRect.left + featureRect.right) / 2 - svgRect.left
            const featureY = (featureRect.top + featureRect.bottom) / 2 - svgRect.top
            const featureRadius = featureRect.width / 2

            const angle = Math.atan2(featureY - centralY, featureX - centralX)
            const startX = featureX - Math.cos(angle) * featureRadius
            const startY = featureY - Math.sin(angle) * featureRadius

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
            const controlX = (startX + centralX) / 2 + (Math.random() - 0.5) * 50
            const controlY = (startY + centralY) / 2 + (Math.random() - 0.5) * 50
            path.setAttribute('d', `M${startX},${startY} Q${controlX},${controlY} ${centralX},${centralY}`)
            path.setAttribute('stroke', 'rgba(6, 182, 212, 0.3)')
            path.setAttribute('stroke-width', '1')
            path.setAttribute('fill', 'none')
            svg.appendChild(path)
          }
        })
      }
    }

    drawLines()
    window.addEventListener('resize', drawLines)
    return () => window.removeEventListener('resize', drawLines)
  }, [loading])

  const formatCountdown = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 60 * 60))
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60))
    const minutes = Math.floor((seconds % (60 * 60)) / 60)
    const remainingSeconds = seconds % 60
    return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`
  }

  return (
    <main className="min-h-screen bg-[#041424] text-cyan-500 relative overflow-hidden">
      {/* Central Orb */}
      <div ref={centralCircleRef} className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-20 animate-pulse" />
          <div className="absolute inset-2 bg-cyan-400 rounded-full opacity-30 animate-ping" />
          <div className="absolute inset-4 bg-cyan-300 rounded-full opacity-40" />
          <div className="absolute inset-0 border-4 border-cyan-500 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
          <div className="absolute inset-0 border-4 border-cyan-400 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          <div className="absolute inset-8 bg-white rounded-full blur-sm animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-lg font-bold">
            {formatCountdown(countdown)}
          </div>
        </div>
      </div>

      {/* Feature Buttons */}
      {features.map((feature, i) => (
        <div key={i} id={`feature-${i}`} className={`absolute ${feature.position}`}>
          <Link 
            href="/coming-soon"
            className="group relative w-12 h-12 md:w-16 md:h-16 rounded-full border border-cyan-500/50 flex flex-col items-center justify-center p-2 overflow-hidden transition-all duration-300 hover:scale-150 hover:shadow-lg hover:shadow-cyan-500/20 z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <feature.icon className="w-4 h-4 md:w-6 md:h-6 mb-1 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
            <span className="text-[6px] md:text-[8px] text-center text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300">{feature.name}</span>
            <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-full transition-all duration-300" />
          </Link>
        </div>
      ))}

      {/* Connecting Lines */}
      <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Loading Overlay */}
      <div 
        className={`absolute inset-0 bg-[#041424] transition-opacity duration-1000 flex items-center justify-center ${
          loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-xl md:text-2xl font-mono">INITIALIZING PORTAL...</div>
      </div>

      <NavBar />
    </main>
  )
}

