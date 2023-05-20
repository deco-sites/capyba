import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  banner: LiveImage;
  text: {
    title?: string;
    description?: string;
    action?: {
      text?: string;
      link?: string;
    };
  };
}

export default function BannerWithText({ banner, text }: Props) {
  return (
    <div class="pt-[60px] grid banner-with-text md:banner-with-text-md">
      <img
        class="-ml-[8%] block sm:order-9 sm:pt-[60px] sm:ml-0 sm:w-full md:order-none md:pt-0"
        src={banner}
        loading="lazy"
      >
      </img>
      <div class="px-[20px] sm:pl-[100px] sm:pb-[72px] sm:pr-[24px] sm:max-w-[506px] sm:box-content sm:self-center sm:justify-self-start">
        {text.title && (
          <h3
            class="text-primary font-sans font-bold text-[32px] leading-[39px] sm:text-[46px] sm:leading-[55px] mb-[18px] sm:text-left"
            dangerouslySetInnerHTML={{ __html: text.title }}
          />
        )}
        {text.description && (
          <p
            class="text-justify sm:text-left font-sans text-[20px] leading-[33px] font-normal md:mb-[20px]"
            dangerouslySetInnerHTML={{ __html: text?.description }}
          />
        )}
        {text.action && (
          <a
            class="inline-block text-center bg-highlight-light hover:bg-highlight mt-[20px] rounded-[35px] text-primary font-semibold pl-[30px] pt-[15px] pb-[12px] pr-[20px] w-full sm:w-max mx-auto"
            href={text.action.link}
          >
            {text.action.text}
            <img
              loading="lazy"
              class="inline-block ml-[15px]"
              src="/green-arrow-right.png"
              alt="Capyba"
            />
          </a>
        )}
      </div>
    </div>
  );
}
