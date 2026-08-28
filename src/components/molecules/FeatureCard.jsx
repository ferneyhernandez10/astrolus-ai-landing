import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function FeatureCard({ feature }) {
  const {
    image,
    imageAlt,
    title,
    description,
    linkText = "Read more",
    href = "#",
    highlighted = false,
  } = feature;

  return (
    <div
      className={`group relative transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 ${
        highlighted
          ? "bg-gray-50 dark:bg-gray-900"
          : "bg-white dark:bg-gray-800"
      } `}
    >
      <div
        className={`relative space-y-8 p-8 py-12 ${
          highlighted
            ? "transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800"
            : ""
        } `}
      >
        <img src={image} alt={imageAlt} className="w-12" />

        <div className="space-y-2">
          <h5 className="text-xl font-semibold text-gray-700 transition group-hover:text-secondary dark:text-white">
            {title}
          </h5>

          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>

        <a
          href={href}
          className="flex items-center justify-between group-hover:text-secondary"
        >
          <span className="text-sm">{linkText}</span>

          <ArrowRightIcon className="h-5 w-5 -translate-x-4 fill-current text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </a>
      </div>
    </div>
  );
}
