import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  subTitle: string;
  logoFooter: { src: LiveImage; width: number; height: number };
  copyright: string;
  copyrightLink: { href: string; text: string };
  socials: { src: LiveImage; width: number; height: number; link: string }[];
}

export default function Footer({
  title,
  subTitle,
  logoFooter,
  copyright,
  copyrightLink,
  socials,
}: Props) {
  return (
    <div class="h-screen flex items-end p-0 bg-footer">
      <div class="w-full h-auto max-w-[1296px] text-left mx-auto px-[20px] sm:px-[24px] block relative mb-[10%] sm:mb-[2%]">
        <div class="h-auto grid-footer grid-cols-footerMobile sm:grid-cols-footerDesk">
          <Image
            class="mb-10 self-center sm:self-start"
            src={logoFooter.src}
            width={logoFooter.width}
            height={logoFooter.height}
          />

          <div>
            <h2
              class="mb-6 text-right text-white font-bold font-sans text-[34px] sm:text-[54px] leading-[38px] sm:leading-[55px]"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
            <h3 class="text-right mb-[60px] sm:mb-[140px] font-sans text-[13px] sm:text-[29px] text-subcolor font-bold">
              {subTitle}
            </h3>
          </div>
        </div>

        <div class="flex flex-wrap sm:h-auto sm:grid-footer-second">
          <div class="order-last sm:order-none mx-auto sm:mx-0 pt-[56px] sm:pt-0 px-0 text-center sm:text-left text-xs sm:text-base font-sans font-bold text-subcolor self-end">
            {copyright}{" "}
            <a class="text-white font-semibold" href={copyrightLink.href}>
              {copyrightLink.text}
            </a>
          </div>

          <div class="grid-footer-third-mobile sm:grid-footer-third">
            {socials?.map((socials) => {
              return (
                <a class="justify-self-center" href={socials.link}>
                  <Image
                    src={socials.src}
                    width={socials.width}
                    height={socials.height}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
