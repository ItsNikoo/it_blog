'use client'

import { ReactNode, useState } from "react"
import { MenuItemProps } from "@/types"
import Link from "next/link"

interface Props {
  children: ReactNode;
  onClick?: () => void;
  menu: MenuItemProps[];
}

export default function ButtonWithMenu({ children, onClick, menu }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative inline-block"
    >
      <button
        className="cursor-pointer font-medium"
        onClick={() => {
          setIsOpen(prev => !prev)
          onClick?.()
        }}
      >
        {children}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-40 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <ul className="py-1">
            {menu.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}