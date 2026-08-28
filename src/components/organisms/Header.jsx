import { useState } from "react";
import BrandLogo from "../atoms/BrandLogo";
import ButtonLink from "../atoms/ButtonLink";
import NavigationLinks from "../molecules/NavigationLinks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="absolute z-10 w-full border-b border-black/5 lg:border-transparent dark:border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
          <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-fit">
            <BrandLogo />
            <div className="relative flex max-h-10 items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative -mr-6 p-6 duration-300 active:scale-95"
              >
                <div
                  className={`m-auto h-0.5 w-5 origin-top rounded bg-gray-950 transition duration-300 dark:bg-white ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
                ></div>
                <div
                  className={`m-auto mt-2 h-0.5 w-5 origin-bottom rounded bg-gray-950 transition duration-300 dark:bg-white ${isMenuOpen ? "-translate-y-1 -rotate-45" : ""}`}
                ></div>
              </button>
            </div>
          </div>
          <div
            className={`fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 lg:hidden dark:bg-gray-950/70 ${isMenuOpen ? "visible scale-y-100 opacity-100" : "invisible scale-y-0 opacity-0"}`}
          ></div>
          <div
            className={`absolute left-0 top-full z-20 w-full origin-top-right flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none ${
              isMenuOpen
                ? "visible translate-y-1 scale-100 opacity-100"
                : "invisible translate-y-1 scale-90 opacity-0"
            } lg:visible lg:relative lg:flex lg:w-fit lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent`}
          >
            <div className="w-full text-gray-600 lg:w-auto lg:pr-4 lg:pt-0 dark:text-gray-200">
              <NavigationLinks />
            </div>
            <div className="mt-12 lg:mt-0">
              <ButtonLink variant="header">Get Started</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
