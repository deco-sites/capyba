import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  desktopContent: string;
  mobileContent: string;
  mainImage: LiveImage;
}

export default function Assistance({
  title,
  desktopContent,
  mobileContent,
  mainImage,
}: Props) {
  return (
    <div class="w-auto h-auto static mx-2.5 px-0 block pt-[40px] pb-[60px] text-left">
      <div class="block h-auto justify-center">
        <div class="block">
          <h1
            class="text-left text-primary text-[39px] leading-[48px] font-sans font-bold pl-[20px] pt-0 mt-[40px]"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <div class="hidden sm:block">
            <div class="flex items-center mt-[20px]">
              <a class="text-white cursor-pointer text-center rounded-[40px] bg-transparent font-ibm-plex font-semibold flex py-[12px] px-[24px]">
                <img src="/circle-menu.png" />
                <div class="text-highlight pl-0 font-ibm-plex">
                  {desktopContent}
                </div>
              </a>
            </div>
          </div>
          <div class="w-full max-w-[506px]">
            <div class="block">
              <img src={mainImage} />
            </div>
          </div>
          <div class="sm:hidden">
            <div class="flex items-center">
              <a class="flex-1 self-center justify-center text-white cursor-pointer text-center rounded-[40px] bg-transparent font-ibm-plex font-semibold flex py-[12px] px-[24px]">
                <img src="/circle-menu.png" />
                <div class="ml-[-30px] pr-[20px] text-highlight font-ibm-plex">
                  {mobileContent}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
