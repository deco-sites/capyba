import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  cards: {
    icon?: LiveImage;
    title: string;
    description: string;
    highlight: boolean;
    action?: {
      text: string;
      mobileText: string;
      link: string;
    };
  }[];
}

export default function Cards({ cards }: Props) {
  return (
    <div class="mt-[20px] mx-[30px] flex flex-col gap-[24px] sm:grid sm:grid-cols-careers-cards-sm md:container-hero md:grid md:gap-[24px] md:grid-cols-careers-cards md:mt-[40px]">
      {cards.map((card) => (
        <div
          class={`bg-white rounded-[20px] h-auto w-full pt-[40px] px-[20px] pb-[18px] sm:max-h-[500px] ${
            card.highlight
              ? "border-2 border-solid border-card-highlight hover:border-card-highlight-hover hover:bg-card-bg-highlight-hover sm:p-[36px] hover:shadow-card"
              : "shadow-card hover:bg-transparent sm:hover:bg-white sm:pl-[40px] sm:pr-[20px] sm:flex sm:flex-col sm:justify-center sm:items-center"
          }`}
        >
          {card.icon && (
            <div class="flex items-center w-[72px] h-[72px] mb-[24px]">
              <Image src={card.icon} width={53} height={53} />
            </div>
          )}
          <h2
            class={`mt-[40px] text-center font-sans sm:text-left mb-[24px] text-primary font-bold ${
              card.highlight
                ? "text-left m-0 mb-[24px] text-[28px] leading-[32px] sm:font-grotesk sm:mt-0"
                : "text-[32px] leading-[45px] sm:text-[46px]"
            }`}
          >
            {card.title}
          </h2>
          <p
            class={`block mb-[24px] font-poppins text-[16px] leading-[32px] text-justify sm:text-left px-[10px] pt-[10px] sm:p-0 font-normal ${
              card.highlight ? "text-left p-0 leading-[24px]" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: card.description }}
          />
          {card.action && (
            <a
              class="bg-card-action sm:bg-transparent rounded-[30px] py-[10px] px-[20px] block text-center sm:text-left sm:p-0 sm:relative sm:w-max sm:flex sm:items-center group"
              href={card.action?.link}
            >
              <span class="inline-block sm:hidden text-primary font-sans font-semibold">
                {card.action?.mobileText}
              </span>
              <span class="hidden sm:inline-block text-primary font-sans font-semibold sm:text-highlight pr-[20px] ">
                {card.action?.text}
                <span class="bg-highlight h-[2px] w-[0px] absolute bottom-0 left-0 transition-all group-hover:w-full">
                </span>
              </span>
              <img
                loading="lazy"
                class="block sm:hidden float-right pt-[5px]"
                src="/arrow-right.png"
                alt="Capyba"
              />
              <img
                loading="lazy"
                class="hidden sm:inline-block"
                src="/green-arrow-right.png"
                alt="Capyba"
              />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
