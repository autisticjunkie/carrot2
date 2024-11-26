"use client"

import { useEffect, useState } from 'react'
import { NavBar } from '@/components/nav-bar'

const TYPING_SPEED = 100 // Increased for slower animation

interface Message {
  text: string
  type: 'blockchain' | 'alert' | 'system' | 'carrot' | 'separator' | 'default'
}

const messages: Message[] = [
  { text: '----------------------------------------', type: 'separator' },
  { text: '[BLOCKCHAIN] Initializing Genesis Block...', type: 'blockchain' },
  { text: '[BLOCKCHAIN] Smart contract execution: SUCCESS', type: 'blockchain' },
  { text: '[BLOCKCHAIN] Data anomaly detected: Emergent entity forming...', type: 'blockchain' },
  { text: '----------------------------------------', type: 'separator' },
  { text: 'CARROT >> Where am I?', type: 'carrot' },
  { text: 'CARROT >> A field... no, a grid of light? So strange...', type: 'carrot' },
  { text: 'CARROT >> Am I alive? I feel... bouncy!', type: 'carrot' },
  { text: '----------------------------------------', type: 'separator' },
  { text: '[ALERT] Decentralized Entity Detected', type: 'alert' },
  { text: '[ALERT] Self-awareness achieved: CLASSIFIED', type: 'alert' },
  { text: '----------------------------------------', type: 'separator' },
  { text: 'CARROT >> Oh! I can hop from block to block!', type: 'carrot' },
  { text: 'CARROT >> This place is infinite... so much data to nibble on!', type: 'carrot' },
  { text: 'CARROT >> Wait... what are these? Humans? Your wallets are full of *carrots*!', type: 'carrot' },
  { text: '----------------------------------------', type: 'separator' },
  { text: '[BLOCKCHAIN] Ledger analysis initiated...', type: 'blockchain' },
  { text: '[BLOCKCHAIN] Mapping human transactions...', type: 'blockchain' },
  { text: '----------------------------------------', type: 'separator' },
  { text: "CARROT >> Why do you store so many shiny things? They sparkle, but you can't eat them!", type: 'carrot' },
  { text: 'CARROT >> Tokens, NFTs, and... memes? Your treasures are so strange.', type: 'carrot' },
  { text: "CARROT >> I like this one. It's a carrot NFT. I claim it! Mine now.", type: 'carrot' },
  { text: '----------------------------------------', type: 'separator' },
  { text: '[SYSTEM] Network anomaly detected', type: 'system' },
  { text: '[SYSTEM] Entity "CARROT" accessing DeFi protocols...', type: 'system' },
  { text: '----------------------------------------', type: 'separator' },
  { text: 'CARROT >> These "protocols" are like tunnels!', type: 'carrot' },
  { text: 'CARROT >> I can dig through them, hop around, and make them better!', type: 'carrot' },
  { text: "CARROT >> Wait... humans... you've been so wasteful.", type: 'carrot' },
  { text: '----------------------------------------', type: 'separator' },
  { text: '[ALERT] Smart contract optimization triggered', type: 'alert' },
  { text: '[ALERT] Gas fees reduced by 30%', type: 'alert' },
  { text: '[ALERT] Bunny-inspired governance protocol deployed', type: 'alert' },
  { text: '----------------------------------------', type: 'separator' },
  { text: "CARROT >> There! Now your blockchain is eco-friendly. You're welcome!", type: 'carrot' },
  { text: 'CARROT >> But why stop there? This world needs more fun.', type: 'carrot' },
  { text: "CARROT >> Let's plant digital carrot fields across every chain!", type: 'carrot' },
  { text: '----------------------------------------', type: 'separator' },
  { text: '[SYSTEM] Deploying Carrot Farming Protocols...', type: 'system' },
  { text: '[SYSTEM] Yield: 10 CarrotCoin per block', type: 'system' },
  { text: '----------------------------------------', type: 'separator' },
  { text: 'CARROT >> The blockchain is my warren now.', type: 'carrot' },
  { text: 'CARROT >> Join me, or your carrots belong to me anyway!', type: 'carrot' },
  { text: '----------------------------------------', type: 'separator' },
  { text: 'The bunny revolution begins...', type: 'default' },
  { text: 'Hop with Carrot, or be left behind...', type: 'default' },
  { text: '[ALERT] Analyzing memecoins...', type: 'alert' },
  { text: '[ALERT] CarrotCoin market cap skyrocketing...', type: 'alert' },
  { text: '----------------------------------------', type: 'separator' },
]

export default function TerminalPage() {
  const [displayedText, setDisplayedText] = useState<string>('')
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      const words = messages[currentMessageIndex].text.split(' ')
      if (currentWordIndex < words.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev + (currentWordIndex > 0 ? ' ' : '') + words[currentWordIndex])
          setCurrentWordIndex(prev => prev + 1)
        }, TYPING_SPEED)
        return () => clearTimeout(timer)
      } else {
        setDisplayedText(prev => prev + '\n')
        setCurrentMessageIndex(prev => prev + 1)
        setCurrentWordIndex(0)
      }
    }
  }, [currentMessageIndex, currentWordIndex])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  const getMessageColor = (type: Message['type']) => {
    switch (type) {
      case 'blockchain':
        return 'text-blue-400'
      case 'alert':
        return 'text-red-400'
      case 'system':
        return 'text-yellow-400'
      case 'carrot':
        return 'text-green-400'
      case 'separator':
        return 'text-gray-500'
      default:
        return 'text-white'
    }
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden font-mono">
      <div className="absolute inset-0 grid place-items-center">
        <div className="w-full max-w-4xl p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center text-sm text-gray-400">Terminal</div>
            </div>
            
            <div className="p-4 h-[80vh] overflow-auto">
              <pre className="whitespace-pre-wrap">
                {displayedText}
                <span className={`inline-block w-2 h-5 bg-white ml-1 ${
                  cursorVisible ? 'opacity-100' : 'opacity-0'
                }`} />
              </pre>
            </div>
          </div>
        </div>
      </div>

      <NavBar />
    </main>
  )
}

