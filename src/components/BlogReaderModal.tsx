import {
  ArrowUpRight,
  Clock3,
  X,
} from "lucide-react";
import {
  useEffect,
  useState,
} from "react";
import DOMPurify from "dompurify";
import {
  fetchArticleById,
  type DevToArticle,
} from "../services/devto";
import "./css/BlogReaderModal.css";

interface BlogReaderModalProps {
  articleId: number | null;
  onClose: () => void;
}

function BlogReaderModal({
  articleId,
  onClose,
}: BlogReaderModalProps) {
  const [article, setArticle] =
    useState<DevToArticle | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState(false);


  useEffect(() => {
    if (!articleId) {
      setArticle(null);
      return;
    }

    const loadArticle = async () => {
      try {
        setLoading(true);
        setError(false);

        const data =
          await fetchArticleById(
            articleId
          );

        setArticle(data);

      } catch (err) {
        console.error(err);
        setError(true);

      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [articleId]);


  useEffect(() => {
    if (!articleId) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [articleId]);


  if (!articleId) {
    return null;
  }


  return (
    <div
      className="blog-modal-backdrop"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >

      <div className="blog-modal">

        {/* ==================================
            HEADER
        ================================== */}

        <header className="blog-modal-header">

          <div className="blog-modal-brand">
            <span className="blog-modal-brand-mark">
              VS
            </span>

            <span>
              Vedansh Sharma
            </span>
          </div>


          <button
            className="blog-modal-close"
            onClick={onClose}
            aria-label="Close article"
          >
            <X size={20} />
          </button>

        </header>


        {/* ==================================
            BODY
        ================================== */}

        <div className="blog-modal-scroll">

          {loading && (
            <div className="blog-modal-loading">

              <div className="blog-loading-orbit" />

              <span>
                Loading article...
              </span>

            </div>
          )}


          {error && (
            <div className="blog-modal-error">

              <h3>
                Unable to load article
              </h3>

              <p>
                Something went wrong while
                fetching this article from
                Dev.to.
              </p>

              <button
                onClick={onClose}
              >
                Close
              </button>

            </div>
          )}


          {article && !loading && !error && (
            <article className="blog-reader">

              {/* Cover */}

              {article.cover_image && (
                <div className="blog-reader-cover">

                  <img
                    src={article.cover_image}
                    alt={article.title}
                  />

                </div>
              )}


              {/* Header */}

              <div className="blog-reader-header">

                <div className="blog-reader-meta">

                  <span>
                    {article.readable_publish_date}
                  </span>

                  <span>/</span>

                  <span className="blog-reader-reading">
                    <Clock3 size={13} />

                    {
                      article.reading_time_minutes
                    }{" "}
                    min read
                  </span>

                </div>


                <h1>
                  {article.title}
                </h1>


                <p className="blog-reader-description">
                  {article.description}
                </p>


                <div className="blog-reader-tags">

                  {Array.isArray(article.tag_list) &&
                    article.tag_list.map((tag) => (
                        <span key={tag}>
                        #{tag}
                        </span>
                    ))}

                </div>

              </div>


              {/* Article HTML */}

              <div
                className="blog-reader-body"
                dangerouslySetInnerHTML={{
                  __html:
                    DOMPurify.sanitize(
                      article.body_html
                    ),
                }}
              />


              {/* Footer */}

              <footer className="blog-reader-footer">

                <span>
                  Originally published on
                  Dev.to
                </span>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Dev.to

                  <ArrowUpRight
                    size={15}
                  />
                </a>

              </footer>

            </article>
          )}

        </div>

      </div>

    </div>
  );
}

export default BlogReaderModal;