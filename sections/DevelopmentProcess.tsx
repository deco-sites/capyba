import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  content: string;
  image: LiveImage;
  balloonTxt: string;
  balloonImg: LiveImage;
}

export default function DevelopmentProcess({
  title,
  content,
  image,
  balloonTxt,
  balloonImg,
}: Props) {
  return (
    <div class="bg-white pb-[140px] sm:py-[72px]">
      <div class="max-w-[1296px] w-full mx-auto block relative">
        <div class="pt-[20px] text-center max-w-[612px] flex flex-col items-center mx-auto">
          <h1 class="text-[32px] sm:text-[46px] leading-[39px] text-center mt-[40px] text-primary font-sans font-bold md:font-semibold pb-[10px]">
            {title}
          </h1>
        </div>
      </div>

      <div class="grid-footer-second grid-column-none grid-row-none grid-cols-postsMobile md:grid-cols-careers-cards-sm">
        <div class="px-[12px] py-[72px] ml:py-[96px] min-h-full flex items-center justify-center relative">
          <div class="max-w-[506px] w-full">
            <div class="mx-2.5 font-sans text-[20px] leading-[33px] text-primary font-normal">
              {content}
            </div>
          </div>
        </div>

        <div class="order-first sm:order-last px-[12px] sm:py-[72px] md:py-0 md:flex md:px-[24px] md:min-h-[648px]">
          <img
            class="rounded-[8px] w-full max-w-[650px] m-auto pt-[20px] sm:pt-0"
            src={image}
          />
        </div>
      </div>

      <div class="px-2.5 md:px-0 block sm:max-w-[728px] md:max-w-[940px] mx-auto">
        <div class="block rounded-[30px] sm:grid-footer-second sm:grid-cols-development sm:grid-column-none sm:rounded-[60px] shadow-feedbacks">
          <h2 class="py-[20px] px-2.5 mx-2.5 sm:mx-0 sm:py-[60px] sm:pl-[60px] sm:pr-[10px] flex justify-center font-sans text-primary text-[20px] leading-[33px]">
            {balloonTxt}
          </h2>

          <img
            class="max-w-full sm:max-w-none sm:mt-[-60px] sm:ml-[-40px] sm:mr-[20px] sm:py-0 ml-[-5px] pb-[30px]  block"
            src={balloonImg}
          />
        </div>
      </div>
    </div>
  );
}
