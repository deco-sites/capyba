import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  process: {
    img: LiveImage;
    title: string;
    content: string;
    invertOrder?: boolean;
  }[];
  balloonTxt: string;
}

export default function OurProcess({ title, process, balloonTxt }: Props) {
  return (
    <div class="bg-ourprocess pb-[60px] sm:pb-[140px] sm:mt-[140px]">
      <div id="process" class="max-w-[1296px] w-full mx-auto block relative">
        <div class="pt-[20px] text-center max-w-[612px] flex flex-col items-center mx-auto">
          <h1 class="text-[32px] sm:text-[46px] leading-[39px] text-center mt-[40px] text-primary font-sans font-bold pb-[10px]">
            {title}
          </h1>
        </div>
      </div>

      {process?.map((process, index) => {
        return (
          <div class="grid-footer-second grid-cols-postsMobile sm:grid-column-none sm:grid-row-none md:grid-cols-careers-cards-sm">
            <div
              class={`ml:${
                process.invertOrder ? "sm:col-start-2 sm:row-start-1" : ""
              } relative font-sans flex items-center justify-center min-h-full px-[12px] py-[72px]`}
            >
              <div class="w-full max-w-[506px]">
                <h3
                  class="mb-[18px] text-primary font-sans font-bold text-center sm:text-left mx-2.5 text-[32px] sm:text-[46px] leading-[39px] sm:leading-[55px]"
                  dangerouslySetInnerHTML={{ __html: process.title }}
                >
                </h3>
                <div
                  class="text-justify mx-2.5 font-sans text-[20px] leading-[33px]"
                  dangerouslySetInnerHTML={{ __html: process.content }}
                >
                </div>
              </div>
            </div>

            <div
              class={`ml:${
                process.invertOrder ? "sm:col-start-1 sm:row-start-1" : ""
              } order-first sm:order-last px-[12px] py-[72px]`}
            >
              <img
                class={`block md:w-full md:m-auto pt-[20px] max-w-[650px] w-full ${
                  index % 2 !== 0 &&
                  "self-center pt-[20px] pl-[20px] pr-[30px] sm:pl-[100px] sm:pr-0 sm:pt-0"
                }`}
                src={process.img}
              >
              </img>
            </div>
          </div>
        );
      })}

      <div class="flex justify-center">
        <div class="max-w-[800px] mt-[30px] mx-2.5 sm:m-0 bg-white rounded-[30px] sm:rounded-[60px] p-5 sm:py-[60px] sm:pl-[40px] sm:pr-0 shadow-feedbacks">
          <img
            class="block mr-[-19px] ml:mr-0 mt-[-40px] ml:mt-0 w-[50px] float-right ml:float-none sm:hidden ml:block ml:relative ml:left-[507px] ml:bottom-[90px] ml:w-max"
            src="/depoimento-icon.png"
          />
          <div
            dangerouslySetInnerHTML={{ __html: balloonTxt }}
            class="w-auto mt-auto ml:mt-[-90px] px-[10px] pt-[10px] inline-block sm:w-[90%] text-primary text-justify font-sans text-[16px] sm:text-[20px] leading-[24px] sm:leading-[33px] font-normal tracking-[-.01em]"
          >
          </div>
        </div>
      </div>
    </div>
  );
}
