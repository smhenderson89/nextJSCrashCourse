import './globals.css'

export const metadata = {
  title: 'Demo site',
  description: 'nextJS crash crouse site',
  keywords: "web development, web design, javsacript, nextjs, vue, html, css, tdd"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
