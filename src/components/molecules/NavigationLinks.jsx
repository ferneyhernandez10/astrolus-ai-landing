const links = [
  ["Features", "#features"],
  ["Solution", "#solution"],
  ["Reviews", "#reviews"],
  ["NextJS Version", "#"],
];

export default function NavigationLinks() {
  return (
    <nav className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
      {links.map(([label, href]) => (
        <a
          key={label}
          href={href}
          className="block transition hover:text-primary md:px-4 dark:hover:text-white"
        >
          {label}
        </a>
      ))}
      <a
        href="#"
        className="flex gap-2 font-semibold text-gray-700 transition hover:text-primary md:px-4 dark:text-white dark:hover:text-white"
      >
        <span>TailwindCSS Tips</span>
        <span className="flex rounded-full border border-purple-700 bg-primary/20 px-2 py-0.5 text-xs tracking-wider text-purple-700 dark:bg-white/10 dark:text-orange-300">
          New
        </span>
      </a>
    </nav>
  );
}
