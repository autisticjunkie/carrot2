import { Home, Terminal, Database, Twitter, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function NavBar() {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-lg rounded-full px-8 py-4 border border-white/10">
      <ul className="flex items-center gap-8">
        <NavItem icon={<Home className="w-5 h-5" />} href="/" label="Home" />
        <NavItem icon={<Terminal className="w-5 h-5" />} href="/terminal" label="Terminal" />
        <NavItem icon={<Database className="w-5 h-5" />} href="/portal" label="Portal" />
        <NavItem icon={<Twitter className="w-5 h-5" />} href="/twitter" label="Twitter" />
        <NavItem icon={<MessageCircle className="w-5 h-5" />} href="/telegram" label="Telegram" />
      </ul>
    </nav>
  )
}

function NavItem({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-white/70 hover:text-white transition-colors duration-200"
        aria-label={label}
      >
        {icon}
      </Link>
    </li>
  )
}

