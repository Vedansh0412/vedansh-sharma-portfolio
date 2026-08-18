import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";
import {
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import BlogCard from "../components/BlogCard";
import BlogReaderModal from "../components/BlogReaderModal";

import {
  fetchArticles,
  type DevToArticleSummary,
} from "../services/devto";

import "../components/css/Blogs.css";
import Navbar from "../components/Navbar";

function Blogs() {
  const navigate = useNavigate();

  const [articles, setArticles] =
    useState<DevToArticleSummary[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);

  const [selectedArticleId, setSelectedArticleId] =
    useState<number | null>(null);


  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);

        const data =
          await fetchArticles();

        setArticles(data);

      } catch (err) {
        console.error(err);

        setError(true);

      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);


  return (
    <div>
    <Navbar />

    <main className="blogs-page">

      {/* ==================================
          HEADER
      ================================== */}

      <section className="blogs-hero">

        <div className="blogs-hero-top">

          <button
            className="blogs-back-button"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={16} />

            Back to portfolio
          </button>


          <a
            href="https://dev.to/vedansh0412"
            target="_blank"
            rel="noopener noreferrer"
            className="blogs-devto-link"
          >
            Dev.to profile

            <ArrowUpRight size={15} />
          </a>

        </div>


        <div className="section-label">
          04 — Writing
        </div>


        <h1>
          Thoughts,
          <br />

          <span>
            experiments & lessons.
          </span>
        </h1>


        <p>
          Notes from building software,
          exploring AI and learning through
          real-world engineering.
        </p>

      </section>


      {/* ==================================
          BLOG GRID
      ================================== */}

      <section className="blogs-content">

        {loading && (
          <div className="blogs-loading">

            <div className="blog-loading-orbit" />

            <span>
              Fetching articles...
            </span>

          </div>
        )}


        {error && (
          <div className="blogs-error">

            <h2>
              Couldn't load the articles.
            </h2>

            <p>
              Please try again in a moment.
            </p>

          </div>
        )}


        {!loading &&
          !error &&
          articles.length > 0 && (
            <div className="blogs-grid">

              
              {articles.map((article, index) => (
                <BlogCard
                    key={article.id}
                    article={article}
                    index={index}
                    onReadMore={setSelectedArticleId}
                />
                ))}

            </div>
          )}

      </section>


      {/* ==================================
          BLOG MODAL
      ================================== */}

      <BlogReaderModal
        articleId={selectedArticleId}
        onClose={() =>
          setSelectedArticleId(null)
        }
      />

    </main>
    </div>
  );
}

export default Blogs;