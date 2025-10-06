import type { Metadata } from 'next'
import './globals.css'

// 🔹 SEO metadata for Behtar-Way
export const metadata: Metadata = {
  title: 'Behtar‑Way | Smart Pedestrian Navigation in Varanasi',
  generator: '',
  keywords: [
    'Behtar Way',
    'Behtar‑Way',
    'Varanasi navigation app',
    'pedestrian navigation Varanasi',
    'crowd management Kashi',
    'smart mobility Varanasi',
    'VOGIC AI Behtar Way',
    'hidden lanes Kashi'
  ],
  authors: [{ name: 'VOGIC AI / Behtar‑Way Team', url: 'https://behtarway.com' }],
  applicationName: 'Behtar‑Way',
  referrer: 'origin-when-cross-origin',
  creator: 'Behtar‑Way',
  publisher: 'Behtar‑Way',
  metadataBase: new URL('https://behtarway.com'),


  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

}

// 🔹 Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Optional structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Behtar‑Way',
              operatingSystem: 'Web / Android',
              applicationCategory: 'NavigationApplication',
              url: 'https://behtarway.com/',
              creator: {
                '@type': 'Organization',
                name: 'VOGIC AI',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
