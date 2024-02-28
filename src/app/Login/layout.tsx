import type { Metadata } from 'next'
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Entre ou Cadastre',
  description: 'Generated by next',
}

interface Props {
  children: ReactNode;
}

export default function LoginLayout({ children }: Props) {
  return (
    <html lang="pt-pt">
      <body>{children}</body>
    </html>
  )
}
