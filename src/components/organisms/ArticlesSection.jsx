import photo from "../../image/photo.avif";
import photo1 from "../../image/photo-1.avif";
import photo2 from "../../image/photo-2.avif";
import ArticleCard from "../molecules/ArticleCard";
export default function ArticlesSection() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Latest Articles
          </h2>
          <p className="text-gray-600 lg:mx-auto lg:w-6/12 dark:text-gray-300">
            Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
            debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[photo, photo1, photo2].map((image) => (
            <ArticleCard key={image} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}
