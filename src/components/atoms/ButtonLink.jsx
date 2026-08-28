export default function ButtonLink({
  children,
  href = "#",
  variant = "header",
}) {
  const variants = {
    header: {
      button:
        "relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max",

      text: "relative text-sm font-semibold text-white",
    },

    hero: {
      button:
        "relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max",

      text: "relative text-base font-semibold text-white",
    },

    secondary: {
      button:
        "relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max",

      text: "relative text-base font-semibold text-primary dark:text-white",
    },

    cta: {
      button:
        "relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max",

      text: "relative text-base font-semibold text-white dark:text-dark",
    },

    ctaSecondary: {
      button:
        "relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max",

      text: "relative text-base font-semibold text-primary dark:text-white",
    },
  };

  const currentVariant = variants[variant];

  return (
    <a href={href} className={currentVariant.button}>
      <span className={currentVariant.text}>{children}</span>
    </a>
  );
}
