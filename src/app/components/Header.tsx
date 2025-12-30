'use client'

import Image from "next/image"
import Link from "next/link"
import ButtonWithMenu from "@/app/components/ui/ButtonWithMenu"
import {ROUTES, streamsDropdown} from "@/config/navigation"

export default function Header() {
  return (
    <div className="mx-auto">
      <div className="flex items-center justify-between py-4 md:px-12 px-6">
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={150}
            height={50}
            priority
          />
        </Link>
        <div className="flex gap-6">
          <ButtonWithMenu
            menu={streamsDropdown}>
            {ROUTES.STREAMS.title}
          </ButtonWithMenu>
          <Link className="font-medium" href={ROUTES.ABOUT.href}>{ROUTES.ABOUT.title}</Link>
        </div>
      </div>

      {/* Серая линия под контентом */}
      <div className="h-px bg-gray-300 mb-3"></div>
    </div>
  )
}