import posts from "../../data/posts";
import PostCard from "@/app/components/Post";

export default function Home() {
  return (
    <div className="min-h-screen  py-8 px-4">
      <div className="mx-auto flex flex-col gap-6">
        {posts.map(post => (
          <PostCard post={post} key={post.id}/>
        ))}
      </div>
    </div>
  );
}