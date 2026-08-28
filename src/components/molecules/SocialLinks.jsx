import SocialIcon from "../atoms/SocialIcon";

export default function SocialLinks({ links, className = "" }) {
  return (
    <ul className={`list-outside list-disc space-y-8 ${className}`}>
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="flex items-center space-x-3 transition hover:text-primary"
            aria-label={`Visit ${link.name}`}
          >
            <SocialIcon name={link.icon} />

            <span>{link.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
