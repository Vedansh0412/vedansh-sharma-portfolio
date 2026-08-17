import {
  ArrowUpRight,
  Clock3,
} from "lucide-react";
import type { DevToArticleSummary } from "../services/devto";
import "./css/BlogCard.css";

interface BlogCardProps {
  article: DevToArticleSummary;
  index: number;
  onReadMore: (id: number) => void;
}

function BlogCard({
  article,
  index,
  onReadMore,
}: BlogCardProps) {
  return (
    <article className="blog-card">

      {/* --------------------------------
          Cover image
      -------------------------------- */}

      <div className="blog-card-image">
        {article.cover_image ? (
          <img
            src={article.cover_image}
            alt={article.title}
            loading="lazy"
          />
        ) : (
          <div className="blog-card-image-placeholder">
            <span>VS</span>
          </div>
        )}

        <div className="blog-card-image-overlay" />

        <span className="blog-card-number">
        {String(index + 1).padStart(2, "0")}
        </span>
      </div>


      {/* --------------------------------
          Content
      -------------------------------- */}

      <div className="blog-card-content">

        <div className="blog-card-meta">

          <span>
            {article.readable_publish_date}
          </span>

          <span className="blog-meta-divider">
            /
          </span>

          <span className="blog-reading-time">
            <Clock3 size={12} />

            {article.reading_time_minutes} min read
          </span>

        </div>


        <h3>
          {article.title}
        </h3>


        <p>
          {article.description}
        </p>


        {/* --------------------------------
            Tags
        -------------------------------- */}

        <div className="blog-card-tags">

          {article.tag_list
            .slice(0, 4)
            .map((tag) => (
              <span key={tag}>
                #{tag}
              </span>
            ))}

        </div>

        <div className="blog-card-stats">
        <span>
            {article.positive_reactions_count} reactions
        </span>

        <span>
            {article.comments_count} comments
        </span>
        </div>


        {/* --------------------------------
            Footer
        -------------------------------- */}

        <div className="blog-card-footer">

          <button
            className="blog-read-button"
            onClick={() =>
              onReadMore(article.id)
            }
          >
            <span>Read article</span>

            <ArrowUpRight size={17} />
          </button>

        </div>

      </div>

    </article>
  );
}

export default BlogCard;