export default function ReviewCard({ review }) {
  const { avatar, name, role, review: reviewText } = review;

  return (
    <div className="aspect-auto rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
      <div className="flex gap-4">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="h-12 w-12 rounded-full"
        />

        <div>
          <h6 className="text-lg font-medium text-gray-700 dark:text-white">
            {name}
          </h6>

          <p className="text-sm text-gray-500 dark:text-gray-300">{role}</p>
        </div>
      </div>

      <p className="mt-8">{reviewText}</p>
    </div>
  );
}
