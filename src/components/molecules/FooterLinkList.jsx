export default function FooterLinkList({ links, className = "" }) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="transition hover:text-primary">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
