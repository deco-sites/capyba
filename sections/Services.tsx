import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  description: string;
  image: LiveImage;
  invertOrder?: boolean;
  paddingTop: boolean;
}

export default function Services({
  title,
  description,
  image,
  invertOrder,
  paddingTop,
}: Props) {
  return (
    <div
      class={`${
        paddingTop ? "pt-[140px]" : ""
      } grid-footer-second grid-cols-postsMobile md:grid-cols-careers-cards-sm grid-row-none grid-column-none mb-[100px]`}
    >
      <div
        class={`md:${
          invertOrder ? "md:services-border-invert md:order-2" : ""
        } bg-card-bg-highlight-hover flex items-center justify-center relative px-3 sm:px-6 py-[72px] sm:services-border`}
      >
        <div class="w-full max-w-[506px]">
          <h3
            dangerouslySetInnerHTML={{ __html: title }}
            class="text-center sm:text-left mx-[10px] text-[32px] sm:text-[46px] leading-[39px] sm:leading-[55px] font-bold text-primary font-sans mb-[18px]"
          ></h3>
          <div class="text-justify mx-[10px] sm:mx-0 font-sans text-[20px] leading-[33px]">
            {description}
          </div>
        </div>
      </div>
      <div
        class={`md:${
          invertOrder ? "md:order-1" : ""
        } order-first sm:order-last px-3 flex justify-center items-center relative bg-card-bg-highlight-hover sm:bg-white sm:py-[72px] min-h-full`}
      >
        <img src={image} />
      </div>
    </div>
  );
}
