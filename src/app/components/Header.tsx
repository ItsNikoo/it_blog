import Image from "next/image"
import Link from "next/link"

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
          <Link className="font-medium" href="/potoki">Потоки</Link>
          <Link className="font-medium"  href="/about">О нас</Link>
        </div>
      </div>

      {/* Серая линия под контентом */}
      <div className="h-px bg-gray-300 mb-3"></div>
    </div>
  )
}