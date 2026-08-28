import { SparklesIcon } from "@heroicons/react/24/outline";
import FeatureCard from "../molecules/FeatureCard";
import { features } from "../../data/features";

export default function FeaturesSection() {
  return (
    <section id="features">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="md:w-2/3 lg:w-1/2">
          <SparklesIcon className="h-6 w-6 fill-current text-secondary" />
          <h2 className="my-8 text-2xl font-bold text-gray-700 md:text-4xl dark:text-white">
            A technology-first approach to payments and finance
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
            ipsum pariatur autem, fugit laborum in atque amet obcaecati? Nisi
            minima aspernatur, quidem nulla cupiditate nam consequatur eligendi
            magni adipisci.
          </p>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4 dark:divide-gray-700 dark:border-gray-700">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
