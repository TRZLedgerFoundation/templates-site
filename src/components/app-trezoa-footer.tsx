import React from 'react'

export function AppTrezoaFooter() {
  return (
    <footer className="bg-black p-6">
      <div className="max-w-[1200] container text-center text-xs text-neutral-500 mx-auto py-md px-6">
        <a
          className="link hover:text-neutral-500 dark:hover:text-white"
          href="https://trezoa.com"
          rel="noopener noreferrer"
        >
          © 2025 Trezoa Foundation. All rights reserved.
        </a>
      </div>
    </footer>
  )
}
