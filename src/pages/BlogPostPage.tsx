import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPostsData";
import ReactMarkdown from "react-markdown";

export default function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl text-red-600">Post not found</h1>
        <button onClick={() => navigate(-1)} className="text-blue-500 underline mt-4">
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen py-16 px-4 md:px-8 max-w-3xl mx-auto">
      <button onClick={() => navigate(-1)} className="text-blue-600 mb-4">
        ← Back
      </button>

      <img src={post.image} alt={post.title} className="rounded-xl w-full h-64 object-cover mb-6" />
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">Category: {post.tag}</p>

     <div className="prose prose-lg prose-slate max-w-none">
  <ReactMarkdown>{post.content}</ReactMarkdown>
</div>

    </div>
  );
}
