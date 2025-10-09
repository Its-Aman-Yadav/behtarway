// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Behtar‑Way | Smart Pedestrian Navigation in Varanasi',
  applicationName: 'Behtar‑Way',
  generator: '',
  referrer: 'origin-when-cross-origin',
  creator: 'Behtar‑Way',
  publisher: 'Behtar‑Way',
  metadataBase: new URL('https://www.behtarway.com'),
  keywords: [
    'BehtarWay',
    'Behtar‑Way',
    'behtarway',
    'behtar-way',
    'crowd management app Varanasi',
    'smart pedestrian navigation India',
    'AI crowd monitoring',
    'Smart City Varanasi',
    'Toyota Mobility Challenge finalist',
    'AI CCTV insights',
    'BehtarWay tourist app',
    'Kashi navigation'
  ],
  authors: [{ name: 'VOGIC AI / Behtar‑Way Team', url: 'https://www.behtarway.com' }],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Canonical & alternate links */}
        <link rel="canonical" href="https://www.behtarway.com/" />

        {/* Geo & Multilingual SEO */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Varanasi, Uttar Pradesh, India" />
        <meta name="language" content="English, Hindi" />
        <meta name="distribution" content="global" />
        <meta name="target" content="all" />
        <meta name="coverage" content="Varanasi, Uttar Pradesh, India" />

        {/* Hindi-specific keywords and description */}
        <meta name="keywords" content="बेहतर वे, भीड़ प्रबंधन ऐप, वाराणसी भीड़ ऐप, काशी भीड़ प्रबंधन, बेहतरवे, स्मार्ट सिटी वाराणसी, पैदल यात्री नेविगेशन, यात्री गाइड ऐप, BehtarWay ऐप, बेहतरवे ऐप, भीड़ नियंत्रण तकनीक, वाराणसी स्मार्ट मोबिलिटी, तीर्थयात्री नेविगेशन" />
        <meta name="description" lang="hi" content="बेहतर-वे: वाराणसी के लिए एक AI आधारित पैदल यात्री नेविगेशन प्लेटफॉर्म। छिपी गलियों को खोजें, भीड़ से बचें और सुरक्षित यात्रा का अनुभव करें। टॉयोटा मोबिलिटी फाउंडेशन द्वारा चयनित।" />

        {/* JSON-LD: App Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Behtar‑Way",
              alternateName: "behtarway",
              operatingSystem: "Web / Android",
              applicationCategory: "NavigationApplication",
              url: "https://www.behtarway.com/",
              creator: {
                "@type": "Organization",
                name: "VOGIC AI"
              }
            }),
          }}
        />

        {/* JSON-LD: Website Schema with multilingual extension */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BehtarWay",
              alternateName: "बेहतर-वे",
              url: "https://www.behtarway.com/",
              inLanguage: ["en", "hi"],
              description: {
                "@language": "en",
                "@value": "BehtarWay is India's first AI-powered pedestrian navigation and crowd management platform helping citizens and pilgrims walk smarter in Varanasi."
              },
              hasPart: [
                {
                  "@type": "WebPage",
                  "@id": "https://www.behtarway.com/hi/",
                  name: "बेहतर-वे – वाराणसी के लिए भीड़ प्रबंधन ऐप",
                  inLanguage: "hi"
                }
              ]
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
