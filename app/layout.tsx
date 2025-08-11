import './globals.css'
import Providers from '../components/providers/Providers'

export const metadata = {
  title: 'NextGenApp',
  description: 'Fullstack Next.js boilerplate'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen p-6 max-w-6xl mx-auto">{children}</div>
      </Providers>
      </body>
    </html>
  )
}
