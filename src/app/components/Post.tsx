import {BookmarkIcon, ChatBubbleLeftIcon, EyeIcon, HeartIcon} from "@heroicons/react/24/outline"
import {BookmarkIcon as BookmarkSolid, HeartIcon as HeartSolid} from "@heroicons/react/24/solid"
import {Post} from "@/types"
import Link from "next/link"
import {ROUTES} from "@/config/navigation"

interface Props {
  post: Post
}

export default function PostCard({post}: Props) {
  return (
    <article
      key={post.id}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
    >
      {/* Заголовок поста + стрим */}
      <div className="px-6 pt-5 pb-3">
        <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                  {post.stream}
                </span>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>

        <Link href={`${ROUTES.ARTICLES.href}/${post.id}`}>
          <h2 className="text-2xl font-bold text-gray-900 mt-3 mb-1">
            {post.title}
          </h2>
        </Link>

        <p className="text-base text-gray-600 leading-relaxed">
          {post.text}
        </p>
      </div>

      {/* Теги */}
      {post.tags.length > 0 && (
        <div className="px-6 pb-3 flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition"
            >
                    #{tag}
                  </span>
          ))}
        </div>
      )}

      {/* Футер с автором и статистикой */}
      <div className="bg-gray-50 px-6 py-4 mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
              {post.author[0].toUpperCase()}
            </div>
            <div>
              <Link href={` / profile / ${post.author.replace('@', '')}`} className="font-semibold text-gray-900">
                {post.author}
              </Link>
              <p className="text-xs text-gray-500">Автор</p>
            </div>
          </div>

          {/* Статистика и действия */}
          <div className="flex items-center gap-6 text-gray-600">
            <button className="flex items-center gap-1.5 hover:text-red-600 transition group">
              <HeartIcon className="w-5 h-5 group-hover:hidden"/>
              <HeartSolid className="w-5 h-5 hidden group-hover:block text-red-600"/>
              <span className="text-sm font-medium">{post.likes}</span>
            </button>

            <button className="flex items-center gap-1.5 hover:text-yellow-600 transition group">
              <BookmarkIcon className="w-5 h-5 group-hover:hidden"/>
              <BookmarkSolid className="w-5 h-5 hidden group-hover:block text-yellow-600"/>
              <span className="text-sm font-medium">{post.saves}</span>
            </button>

            <div className="flex items-center gap-1.5">
              <ChatBubbleLeftIcon className="w-5 h-5"/>
              <span className="text-sm font-medium">{post.comments}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <EyeIcon className="w-5 h-5"/>
              <span className="text-sm font-medium">{post.views}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}