import React from 'react'
import Image from 'next/image'
import TrezoaLogo from '../logotype.inline.svg'

export interface HeaderLogoProps {
  href?: string
  width?: number
  height?: number
  className?: string
}

export const HeaderLogo = React.memo<HeaderLogoProps>(
  ({ href = 'https://trezoa.com', width = 149, height = 22, className = 'text-white' }) => {
    return (
      <a href={href} rel="noopener noreferrer">
        <Image src={TrezoaLogo} alt="Trezoa Logo" width={width} height={height} className={className} />
      </a>
    )
  },
)

HeaderLogo.displayName = 'HeaderLogo'
