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
    <div class="w-auto h-auto static mx-2.5 px-0 block pt-[40px] pb-[60px] sm:pb-[80px] text-left max-w-[1296px] sm:mx-auto sm:px-[24px]">
      <div class="block h-auto justify-center">
        <div class="block sm:grid-footer-second sm:grid-cols-Assistance">
          <div>
            <h1
              class="text-left text-primary text-[39px] sm:text-[70px] leading-[48px] sm:leading-[70px] font-sans font-bold sm:font-semibold pl-[20px] md:pl-0 pt-0 mt-[40px] sm:mt-[100px]"
              dangerouslySetInnerHTML={{ __html: title }}
            >
            </h1>
            <div class="hidden sm:block">
              <div class="flex items-center mt-[20px]">
                <a class="text-white items-center cursor-pointer text-center rounded-[40px] bg-transparent font-ibm-plex font-semibold flex py-[12px] px-[24px] md:pl-0 md:hover:shadow-assistancedesk md:hover:pl-[24px]">
                  <img src="/circle-menu.png" />
                  <div class="ml-[-30px] text-highlight pl-0 font-ibm-plex">
                    {desktopContent}
                  </div>
                  <img
                    class="h-[16px] pl-[20px]"
                    src="/green-arrow-right.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="w-full max-w-[506px] self-center justify-self-center sm:ml-[40px] pt-[60px]">
            <div class="block">
              <img src={mainImage} />
            </div>
          </div>
          <div class="sm:hidden">
            <div class="flex items-center mt-[24px]">
              <a class="flex-1 self-center items-center justify-center text-white cursor-pointer text-center rounded-[40px] bg-transparent font-ibm-plex font-semibold flex py-[12px] px-[24px]">
                <img src="/circle-menu.png" />
                <div class="ml-[-30px] pr-[20px] text-highlight font-ibm-plex">
                  {mobileContent}
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
