import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  mainImage: LiveImage;
  content: string;
  name: string;
  link: string;
  redirectTo: string;
}

export default function Feedbacks({
  title,
  mainImage,
  content,
  name,
  link,
  redirectTo,
}: Props) {
  return (
    <div class="max-w-[1296px] mx-2.5 sm:mx-auto text-left sm:px-[24px] relative">
      <div class="max-w-[800px] mx-auto w-full">
        <div class="block sm:flex justify-center items-center text-center">
          <h3
            class="mt-[140px] mb-[100px] sm:mt-0 pt-[60px] text-center text-primary font-sans font-bold text-[32px] md:text-[54px] sm:text-[40px] leading-[36px] sm:leading-[44px] md:leading-[54px]"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h3>
        </div>
      </div>

      <img
        class="hidden md:block absolute w-[25vw] right-[90%] top-[20%]"
        src="/cover-green.png"
      />

      <div class="pb-[72px] ml:pb-0 mx-2.5 sm:mx-0">
        <div class="h-auto block sm:grid-footer-second sm:grid-column-none md:grid-column-six md:justify-items-center sm:items-center md:grid-cols-Assistance sm:grid-cols-careers-cards-sm mt-[40px] md:mt-0">
          <div class="flex justify-center relative">
            <img
              class="rounded-[30px] md:rounded-[60px] max-w-[90%] md:max-w-[100%]"
              src={mainImage}
            />
          </div>
          <a
            href={link}
            class="cursor-pointer font-semibold text-primary no-underline"
          >
            <div class="py-[20px] pl-[20px] md:pt-[60px] md:pl-[40px] md:pb-[20px] mt-[30px] sm:mt-0 rounded-[30px] md:rounded-[60px] max-w-[610px] bg-white shadow-feedbacks">
              <img
                class="block mt-[-40px] w-[50px] float-right sm:hidden md:block md:relative md:bottom-[49px] md:w-max"
                src="/depoimento-icon.png"
              />
              <div class="mt-auto w-auto sm:w-[90%] text-justify py-[10px] pr-[10px] sm:p-0 text-[16px] sm:text-[20px] leading-[24px] leading-[33px] text-primary font-sans font-normal">
                {content}
              </div>
              <div class="text-highlight font-sans font-bold ml-[10px] sm:ml-0 mr-[20px] sm:mr-[100px] mt-[10px]">
                {name}
              </div>
              <div class="flex justify-center mt-[40px] mr-[10px]">
                <div class="pr-[10px] font-sans">{redirectTo}</div>
                <img
                  class="h-[16px] self-center"
                  src="/green-arrow-right.png"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
