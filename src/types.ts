export interface Post{
  id: number
  title: string
  author: string
  stream: string
  text: string
  likes: number
  saves: number
  comments: number
  views: number
  date: string
  tags: string[]
}