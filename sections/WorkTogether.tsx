import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  subTitle: string;
  link: string;
  backgroundImg: LiveImage;
}

export default function WorkTogether({
  title,
  subTitle,
  backgroundImg,
  link,
}: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
      class="bg-[100%] bg-fixed bg-no-repeat bg-auto py-[200px] ml:py-[400px]"
    >
      <div class="max-w-[1296px] mx-[10px] sm:mx-auto">
        <div class="max-w-[800px] mx-auto w-full">
          <div class="block sm:flex sm:flex-col text-center">
            <h3 class="font-sans font-bold text-[36px] sm:text-[54px] leading-[39px] sm:leading-[54px] mb-[18px]">
              {title}
            </h3>
            <div class="flex items-center">
              <a
                href={link}
                class="flex-1 self-center items-center justify-center text-white cursor-pointer text-center rounded-[40px] bg-transparent font-ibm-plex font-semibold flex py-[12px] px-[24px]"
              >
                <img src="/circle-menu.png" />
                <div class="ml-[-20px] pr-[20px] text-highlight font-ibm-plex">
                  {subTitle}
                </div>
                <img class="h-[16px]" src="/green-arrow-right.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
