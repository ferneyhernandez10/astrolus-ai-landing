import FooterLinkList from "../molecules/FooterLinkList";
import SocialLinks from "../molecules/SocialLinks";

import {
  footerNavigation,
  footerSocialLinks,
  footerLegalLinks,
  footerContent,
} from "../../data/footer";

export default function Footer() {
  return (
    <footer className="py-20 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            <div className="flex w-full justify-center space-x-12 text-gray-600 sm:w-7/12 md:justify-start dark:text-gray-300">
              <FooterLinkList
                links={footerNavigation}
                className="list-inside list-disc space-y-8"
              />

              <SocialLinks links={footerSocialLinks} />
            </div>
            <div className="m-auto mt-16 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left">
              <span className="block text-gray-500 dark:text-gray-400">
                {footerContent.description}
              </span>

              <span className="block text-gray-500 dark:text-gray-400">
                {footerContent.copyright}
              </span>

              <span className="flex justify-between text-gray-600 dark:text-white">
                {footerLegalLinks.map((link) => (
                  <a key={link.label} href={link.href} className="font-medium">
                    {link.label}
                  </a>
                ))}
              </span>

              <span className="block text-gray-500 dark:text-gray-400">
                {footerContent.helpText}{" "}
                <a
                  href={footerContent.contactHref}
                  className="font-semibold text-gray-600 dark:text-white"
                >
                  {footerContent.contactLabel}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
