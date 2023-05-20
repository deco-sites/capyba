import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title?: string;
  background: LiveImage;
  card: {
    text: string;
    icon: LiveImage;
  };
}

export default function BannerCard({ title, background, card }: Props) {
  return (
    <>
      {title && (
        <h3
          class="text-primary text-center mt-[180px] px-[20px] pt-[10px] pb-[40px] text-[32px] leading-[39px] font-bold sm:text-[46px] sm:leading-[55px] sm:my-[180px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      <div class="bg-primary relative sm:pb-[260px] sm:pt-[72px] md:pt-[96px]">
        <img
          class="relative opacity-[.15] top-0 bottom-0 left-0 right-0 w-full h-full object-cover min-h-[160px] sm:absolute"
          src={background}
          loading="lazy"
        />
        <div class="flex justify-center relative sm:block sm:max-w-[1296px] md:-top-[144px] md:mx-auto">
          <div class="bg-subcolor w-full mb-[10px] mx-[10px] px-[40px] py-[20px] rounded-[8px] flex flex-col relative md:w-max md:px-[60px] md:max-w-[648px]">
            <div class="w-[110px] h-[60px] bg-primary rounded-[12px] py-[10px] flex">
              <img
                alt="Capyba"
                src={card.icon}
                loading="lazy"
                class="object-contain"
              />
            </div>
            <h3 class="text-primary pt-[10px] pr-[20px] font-sans text-[32px] leading-[39px] font-bold sm:text-[46px] sm:leading-[55px]">
              {card.text}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
