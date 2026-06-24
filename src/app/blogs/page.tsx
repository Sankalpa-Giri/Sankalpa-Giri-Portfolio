import Link from "next/link";
import { client } from "@/lib/sanity";

export const revalidate = 60;

async function getPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      excerpt,
      publishedAt,
      "slug": slug.current,
      "tags": categories[]->title
    }
  `);
}

export default async function BlogsPage() {
  const posts = await getPosts();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "#e8e4dc",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

        :root {
          --gold: #c9a96e;
          --surface: #0f0f0f;
          --border: rgba(255,255,255,0.07);
          --border-accent: rgba(201,169,110,0.25);
          --text-muted: #7a7570;
          --text-dim: #4a4845;
        }

        /* ── Reset ── */
        *, *::before, *::after {
          box-sizing: border-box;
        }

        /* ── Layout ── */
        .blog-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 140px 48px 120px;
        }

        /* ── Header ── */
        .blog-eyebrow {
          font-size: 10px;
          letter-spacing: 0.2em;
          color: var(--text-dim);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
        }

        .blog-eyebrow-line {
          display: inline-block;
          width: 40px;
          height: 1px;
          background: var(--gold);
          flex-shrink: 0;
        }

        .blog-h1 {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #f0ece3;
          margin-bottom: 16px;
        }

        .blog-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.8;
          max-width: 600px;
          font-weight: 300;
          margin-bottom: 24px;
        }

        /* ── Stats ── */
        .blog-stats {
          display: flex;
          align-items: center;
          gap: 32px;
          padding-bottom: 48px;
          border-bottom: 0.5px solid var(--border);
          margin-bottom: 24px;
        }

        .blog-stat-num {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 28px;
          font-weight: 400;
          color: #f0ece3;
          line-height: 1;
          margin-bottom: 4px;
        }

        .blog-stat-label {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        /* ── Post list ── */
        .blog-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* ── Card ── */
        .blog-card {
          position: relative;
          display: block;
          background: var(--surface);
          border: 0.5px solid var(--border);
          border-radius: 2px;
          padding: 36px 40px;
          text-decoration: none;
          overflow: hidden;
          transition: border-color 0.3s;
        }

        .blog-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 2px;
          height: 0;
          background: linear-gradient(to bottom, transparent, var(--gold), transparent);
          transition: height 0.4s ease;
        }

        .blog-card:hover {
          border-color: rgba(201,169,110,0.2);
        }

        .blog-card:hover::before {
          height: 100%;
        }

        .blog-card:hover .blog-arrow {
          transform: translate(3px, -3px);
          color: var(--gold);
        }

        .blog-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .blog-card-index {
          font-size: 10px;
          letter-spacing: 0.2em;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        .blog-arrow {
          transition: transform 0.25s ease, color 0.25s ease;
          color: var(--text-dim);
          font-size: 16px;
          line-height: 1;
        }

        .blog-card-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 400;
          color: #f0ece3;
          line-height: 1.2;
          margin-bottom: 10px;
        }

        .blog-card-divider {
          height: 0.5px;
          background: var(--border);
          margin-bottom: 16px;
        }

        .blog-card-excerpt {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.8;
          max-width: 640px;
          font-weight: 300;
          margin-bottom: 24px;
        }

        .blog-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .blog-card-date {
          font-size: 11px;
          color: var(--gold);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tag-pill {
          display: inline-block;
          padding: 3px 11px;
          border: 0.5px solid var(--border-accent);
          border-radius: 100px;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: var(--gold);
          background: rgba(201,169,110,0.05);
          text-transform: uppercase;
        }

        /* ── Empty state ── */
        .blog-empty {
          background: var(--surface);
          border: 0.5px dashed rgba(255,255,255,0.1);
          border-radius: 2px;
          padding: 64px 40px;
          text-align: center;
        }

        .blog-empty-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-bottom: 12px;
        }

        .blog-empty-body {
          font-size: 13px;
          color: var(--text-dim);
          line-height: 1.7;
          max-width: 360px;
          margin: 0 auto;
        }

        /* ── Responsive: tablet ── */
        @media (max-width: 768px) {
          .blog-section {
            padding: 80px 28px 80px;
          }

          .blog-card {
            padding: 24px 24px;
          }

          .blog-stats {
            padding-bottom: 32px;
            margin-bottom: 20px;
          }

          .blog-desc {
            font-size: 13px;
          }
        }

        /* ── Responsive: mobile ── */
        @media (max-width: 480px) {
          .blog-section {
            padding: 60px 16px 64px;
          }

          .blog-card {
            padding: 20px 16px;
          }

          .blog-card-top {
            margin-bottom: 14px;
          }

          .blog-card-divider {
            margin-bottom: 12px;
          }

          .blog-card-excerpt {
            font-size: 12px;
            margin-bottom: 16px;
          }

          .blog-card-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .blog-empty {
            padding: 48px 20px;
          }
        }
      `}</style>

      <section className="blog-section">

        {/* ── Header ── */}
        <p className="blog-eyebrow">
          <span className="blog-eyebrow-line" />
          Writing
        </p>

        <h1 className="blog-h1">Blog</h1>

        <p className="blog-desc">
          Thoughts on AI, Machine Learning, Computer Vision and Software Engineering.
        </p>

        {/* Stats row — only shown when there are posts */}
        {posts.length > 0 && (
          <div className="blog-stats">
            <div>
              <p className="blog-stat-num">{posts.length}</p>
              <p className="blog-stat-label">Articles</p>
            </div>
          </div>
        )}

        {/* ── Post list ── */}
        {posts.length > 0 ? (
          <div className="blog-list">
            {posts.map((post: any, i: number) => {
              const date = post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
                    month: "short",
                    year: "numeric",
                  })
                : null;

              return (
                <Link key={post._id} href={`/blogs/${post.slug}`} className="blog-card">

                  {/* Index + arrow */}
                  <div className="blog-card-top">
                    <span className="blog-card-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="blog-arrow">↗</span>
                  </div>

                  {/* Title */}
                  <h2 className="blog-card-title">{post.title}</h2>

                  {/* Divider */}
                  <div className="blog-card-divider" />

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                  )}

                  {/* Meta + tags */}
                  <div className="blog-card-meta">
                    {date && (
                      <span className="blog-card-date">{date}</span>
                    )}
                    {post.tags?.length > 0 && (
                      <div className="blog-tags">
                        {post.tags.map((tag: string) => (
                          <span key={tag} className="tag-pill">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>

                </Link>
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="blog-empty">
            <p className="blog-empty-label">No posts yet</p>
            <p className="blog-empty-body">
              Posts published in Sanity Studio will appear here automatically.
            </p>
          </div>
        )}

      </section>
    </main>
  );
}