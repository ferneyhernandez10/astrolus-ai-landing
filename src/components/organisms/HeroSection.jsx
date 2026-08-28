import ButtonLink from "../atoms/ButtonLink";
import CompanyLogos from "../molecules/CompanyLogos";
import { companies } from "../../data/companies";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 grid grid-cols-1 opacity-40 md:grid-cols-2 md:-space-x-52 dark:opacity-20">
        <div className="h-56 w-full bg-gradient-to-br from-primary to-purple-400 blur-[106px] md:h-56 dark:from-blue-700" />
        <div className="hidden h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] md:block dark:to-indigo-600" />
      </div>
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="relative ml-auto pt-36">
          <div className="mx-auto text-center lg:w-2/3">
            <h1 className="text-balance text-5xl font-bold text-gray-900 md:text-6xl xl:text-7xl dark:text-white">
              Shaping a world with{" "}
              <span className="text-primary dark:text-white">
                reimagination.
              </span>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Odio incidunt nam itaque sed eius modi error totam sit illum.
              Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis
              beatae ipsum soluta!
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4">
              <ButtonLink variant="hero">Get started</ButtonLink>
              <ButtonLink variant="secondary">Learn more</ButtonLink>
            </div>
            <div className="mt-16 hidden justify-between border-y border-gray-100 py-8 sm:flex dark:border-gray-800">
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  The lowest price
                </h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  The fastest on the market
                </h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  The most loved
                </h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <CompanyLogos companies={companies} />
          </div>
        </div>
      </div>
    </section>
  );
}
