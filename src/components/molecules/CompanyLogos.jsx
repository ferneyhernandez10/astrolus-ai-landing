export default function CompanyLogos({ companies }) {
  return (
    <>
      {companies.map((company) => (
        <div
          key={company.name}
          className={`p-4 grayscale transition duration-200 hover:grayscale-0 ${company.centered ? "flex" : ""}`}
        >
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className={`${company.height} mx-auto w-auto`}
          />
        </div>
      ))}
    </>
  );
}
