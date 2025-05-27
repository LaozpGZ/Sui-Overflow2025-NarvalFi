'use client'

import { Github } from 'lucide-react'
import PrimaryButton from './PrimaryButton'

/**
 * HomeHeader - Hero section for the homepage, including logo, title, description, and main buttons.
 * No props.
 */
export default function HomeHeader() {
  return (
    <header className="z-10 relative flex flex-col items-center pt-24 pb-16">
      {/* Logo and brand */}
      {/*
      <div className="relative mb-6">
        <Image src="/logo.svg" alt="NarvalFi Logo" width={80} height={80} className="h-20 mb-4 animate-pulse" />
        <div className="absolute -inset-4 bg-blue-500/20 blur-[20px] rounded-full -z-10"></div>
      </div>
      */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center max-w-4xl bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
        NarvalFi: The Unified Liquidity Layer for Next-Gen DeFi
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl text-white/80 leading-relaxed">
        A groundbreaking DeFi protocol designed to solve liquidity fragmentation and maximize capital efficiency. 
        Built on Sui, it integrates lending, vaults, and DEX into a single, composable liquidity layer.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <PrimaryButton href="https://github.com/OlendDAO/Sui-Overflow2025-NarvalFi/tree/main/packages/contract/narval/sources">
          Sui Move Contract Repository
        </PrimaryButton>
        <PrimaryButton href="https://gamma.app/docs/Narval-Protocol-xi5lh3x74jxabvj?mode=doc">
          pitchdeck
        </PrimaryButton>
        <PrimaryButton href="https://testnet.suivision.xyz/package/0x33047971c0172f7f4d8f9d0b41d2e5400d2cab4ec040202a7113c08f453acfd6?tab=Code">
          Testnet Package Address
        </PrimaryButton>
        <a
          href="https://github.com/Olenddao/Sui-Overflow2025-NarvalFi"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white/10 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
        >
          <Github className="w-4 h-4" />
          View on GitHub
        </a>
      </div>
    </header>
  )
}