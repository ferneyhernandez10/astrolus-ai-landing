import ButtonLink from "../atoms/ButtonLink";
import AvatarGroup from "../molecules/AvatarGroup";
import { ctaAvatars } from "../../data/cta";

export default function CtaSection() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700" />

        <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="relative">
          <AvatarGroup avatars={ctaAvatars} />

          <div className="mx-auto mt-6 space-y-6 md:w-8/12 lg:w-7/12">
            <h1 className="text-center text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
              Get Started now
            </h1>

            <p className="text-center text-xl text-gray-600 dark:text-gray-300">
              Be part of millions people around the world using tailus in modern
              User Interfaces.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <ButtonLink variant="cta">Get started</ButtonLink>

              <ButtonLink variant="ctaSecondary">More about</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
