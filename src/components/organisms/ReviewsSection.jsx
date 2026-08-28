import ReviewCard from "../molecules/ReviewCard";
import { reviews } from "../../data/reviews";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="text-gray-600 dark:text-gray-300">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 md:text-4xl dark:text-white">
            We have some fans.
          </h2>
        </div>
        <div className="gap-8 space-y-8 md:columns-2 lg:columns-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
