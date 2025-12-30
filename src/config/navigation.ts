import {MenuItemProps} from "@/types"

export const ROUTES = {
  STREAMS: {title: "Потоки", href: "/potoki"},
  ABOUT: {title: "О нас", href: "/about"},
  ARTICLES: {title: "Посты", href: "/articles"},
}

export const streamsDropdown: MenuItemProps[] = [
  {title: "Frontend", href: "/streams/frontend"},
  {title: "Backend", href: "/streams/backend"},
  {title: "DevOps", href: "/streams/devops"},
]