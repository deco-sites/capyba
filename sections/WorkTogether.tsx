import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: {
    fontSize: number;
    lineHeight: number;
    mobileFontSize: number;
    mobileLineHeight: number;
    text: string;
    margin: string;
    mobileMargin: string;
  };
  containerPadding: {
    top: number;
    right: number;
    bottom: number;
    left: number;
    mobileTop: number;
    mobileRight: number;
    mobileBottom: number;
    mobileLeft: number;
  };
  subTitle: string;
  link: string;
  backgroundImg?: LiveImage;
}

export default function WorkTogether({
  title,
  subTitle,
  backgroundImg,
  link,
  containerPadding,
}: Props) {
  return (
    <div
      style={{
        backgroundImage: backgroundImg && `url(${backgroundImg})`,
      }}
      class={`bg-[100%] bg-scroll ml:bg-fixed bg-no-repeat bg-auto pt-[${containerPadding.mobileTop}px] pr-[${containerPadding.mobileRight}px] pb-[${containerPadding.mobileBottom}px] pl-[${containerPadding.mobileLeft}px] ml:pt-[${containerPadding.top}px] ml:pr-[${containerPadding.right}px] ml:pb-[${containerPadding.bottom}px] ml:pl-[${containerPadding.left}px]`}
    >
      <div class="max-w-[1296px] mx-[10px] sm:mx-auto">
        <div class="max-w-[800px] mx-auto w-full">
          <div class="block sm:flex sm:flex-col text-center">
            <h3
              style={{ margin: title.mobileMargin }}
              class={`block ml:hidden font-sans font-bold text-[${title.mobileFontSize}px] ml:text-[${title.fontSize}px] leading-[${title.mobileLineHeight}px] ml:leading-[${title.lineHeight}px]`}
              dangerouslySetInnerHTML={{ __html: title.text }}
            />
            <h3
              style={{ margin: title.margin }}
              class={`hidden ml:block font-sans font-bold text-[${title.mobileFontSize}px] ml:text-[${title.fontSize}px] leading-[${title.mobileLineHeight}px] ml:leading-[${title.lineHeight}px]`}
              dangerouslySetInnerHTML={{ __html: title.text }}
            />
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
