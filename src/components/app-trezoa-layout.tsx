'use client'

import React from 'react'
import { AppTrezoaHeader, HeaderNavigationLink } from './header'
import { AppTrezoaFooter } from './app-trezoa-footer'

const links: HeaderNavigationLink[] = [
  { label: 'Documentation', href: 'https://trezoa.com/docs' },
  { label: 'Cookbook', href: 'https://trezoa.com/developers/cookbook' },
]

export function AppTrezoaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <AppTrezoaHeader links={links} />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <AppTrezoaFooter />
    </div>
  )
}
