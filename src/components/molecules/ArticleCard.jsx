export default function ArticleCard({ image }) {
  return (
    <article className="group rounded-3xl border border-gray-100 bg-white bg-opacity-50 p-6 shadow-2xl shadow-gray-600/10 sm:p-8 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt=""
          className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative mt-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
          De fuga fugiat lorem ipsum laboriosam expedita.
        </h3>
        <p className="mb-8 mt-6 text-gray-600 dark:text-gray-300">
          Voluptates harum aliquam totam, doloribus eum impedit atque!
          Temporibus...
        </p>
        <a href="#" className="inline-block">
          <span className="text-info dark:text-blue-300">Read more</span>
        </a>
      </div>
    </article>
  );
}
