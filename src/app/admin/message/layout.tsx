import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Mensagem | SD-distribuidora',
  description: 'Generated by next',
}

export default function RequestLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="pt-pt">
        <body >{children}</body>
      </html>
    )
  }