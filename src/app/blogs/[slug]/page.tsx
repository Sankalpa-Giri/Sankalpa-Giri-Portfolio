import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

async function getPost(slug: string) {
  return client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      excerpt,
      coverImage,
      body
    }
  `,
    { slug }
  );
}

const components = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl font-bold mt-16 mb-8 text-white">
        {children}
      </h1>
    ),

    h2: ({ children }: any) => (
      <h2 className="text-4xl font-bold mt-14 mb-6 text-white">
        {children}
      </h2>
    ),

    h3: ({ children }: any) => (
      <h3 className="text-3xl font-semibold mt-12 mb-5 text-white">
        {children}
      </h3>
    ),

    h4: ({ children }: any) => (
      <h4 className="text-2xl font-semibold mt-10 mb-4 text-white">
        {children}
      </h4>
    ),

    h5: ({ children }: any) => (
      <h5 className="text-xl font-semibold mt-8 mb-4 text-white">
        {children}
      </h5>
    ),

    h6: ({ children }: any) => (
      <h6 className="text-lg font-semibold mt-6 mb-4 text-white">
        {children}
      </h6>
    ),

    normal: ({ children }: any) => (
      <p className="mb-6 leading-8 text-zinc-300">
        {children}
      </p>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="my-8 border-l-4 border-blue-500 pl-6 italic text-zinc-400">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-8 mb-6 space-y-3 text-zinc-300">
        {children}
      </ul>
    ),

    number: ({ children }: any) => (
      <ol className="list-decimal pl-8 mb-6 space-y-3 text-zinc-300">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => (
      <li className="leading-8">
        {children}
      </li>
    ),

    number: ({ children }: any) => (
      <li className="leading-8">
        {children}
      </li>
    ),
  },

  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-white">
        {children}
      </strong>
    ),

    em: ({ children }: any) => (
      <em className="italic">
        {children}
      </em>
    ),

    code: ({ children }: any) => (
      <code className="bg-zinc-900 text-green-400 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),

    "strike-through": ({ children }: any) => (
      <span className="line-through text-zinc-500">
        {children}
      </span>
    ),

    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline hover:text-blue-300"
      >
        {children}
      </a>
    ),
  },

  types: {
    image: ({ value }: any) => (
      <Image
        src={urlFor(value).url()}
        alt=""
        width={1200}
        height={700}
        className="rounded-2xl my-10 w-full h-auto"
      />
    ),

    code: ({ value }: any) => (
      <div className="my-8 overflow-hidden rounded-xl">
        <SyntaxHighlighter
          language={value.language || "text"}
          style={oneDark}
          customStyle={{
            borderRadius: "12px",
            fontSize: "14px",
            padding: "20px",
          }}
        >
          {value.code}
        </SyntaxHighlighter>
      </div>
    ),
  },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Blog not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <article className="max-w-4xl mx-auto px-6 pt-32 pb-20">

        <h1 className="text-5xl font-bold mb-6">
          {post.title}
        </h1>

        <p className="text-zinc-500 mb-10">
          {new Date(
            post.publishedAt
          ).toLocaleDateString()}
        </p>

        {post.coverImage && (
          <Image
            src={urlFor(post.coverImage).url()}
            alt={post.title}
            width={1200}
            height={700}
            className="
            rounded-2xl
            mb-12
            w-full
            h-auto
            "
          />
        )}

        <div
          className="
          prose
          prose-invert
          prose-lg
          max-w-none
          "
        >
          <PortableText value={post.body} components={components} />
        </div>

      </article>

    </main>
  );
}