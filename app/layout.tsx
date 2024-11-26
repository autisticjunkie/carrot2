import "@/styles/globals.css"

export const metadata = {
  title: "CARROT - First AI Bunny",
  description: "Explore the blockchain and have fun with CARROT",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  )
}

