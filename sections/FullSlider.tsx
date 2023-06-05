import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Slider, SliderDots } from "../components/Slider.tsx";
import SliderControllerJS from "../islands/SliderJS.tsx";
import { useId } from "preact/hooks";

export interface Props {
  contents: {
    title?: string;
    firstSubTitle: string;
    cards?: {
      image: LiveImage;
      title: string;
      description: string;
    }[];
  }[];
  contentsDesktop: {
    firstSubTitle: string;
    cards?: {
      image: LiveImage;
      title: string;
      description: string;
    }[];
  }[];
  customDesktopTitle?: string;
  link: {
    text: string;
    redirect: string;
  };
}

export default function FullSlider({
  contents,
  link,
  contentsDesktop,
  customDesktopTitle = "",
}: Props) {
  const id = useId();
  return (
    /* Mobile view */

    <>
      <div class="md:hidden bg-fullslider pb-[100px]">
        <div class="w-full max-w-[1296px] mx-auto px-0 block relative">
          {contents?.map((content, index) => {
            return (
              <>
                {content.title && (
                  <h3
                    dangerouslySetInnerHTML={{ __html: content.title }}
                    class="px-5 text-[36px] leading-[48px] text-subcolor text-center font-sans font-bold pt-[140px] pb-[80px]"
                  >
                  </h3>
                )}

                <div class="h-[420px] block">
                  <h1 class="text-center mb-5 mx-5 pb-5 text-[28px] leading-[36px] border-b-2 border-solid border-slideborder text-subtitleslide font-grotesk font-bold">
                    {content.firstSubTitle}
                  </h1>

                  <div
                    id={`content-${index}-${id}`}
                    class="z-[1] h-full block relative overflow-hidden whitespace-nowrap"
                  >
                    <Slider class="" snap="flex snap-center w-screen  px-5">
                      {content.cards?.map((card) => {
                        return (
                          <div class="h-auto border-black whitespace-normal text-left inline-block relative w-full">
                            <div class="block">
                              <div class="p-[18px] bg-slideborder rounded-[20px] flex flex-col justify-center items-start">
                                <img
                                  class="w-[50px] h-[50px] max-h-full max-w-none rounded-[20px] bg-white mb-[24px] p-1.5"
                                  src={card.image}
                                />
                                <h4 class="text-subcolor font-sans text-[18px] font-extrabold leading-[25px]">
                                  {card.title}
                                </h4>
                                <p class="font-grotesk text-white text-left mb-[24px]">
                                  {card.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                    <SliderDots class="mt-[60px]">
                      {content.cards?.map((_) => (
                        <div class="w-[16px] h-[16px] bg-dots-services rounded-1/2 group-disabled:bg-white mx-[3px]">
                        </div>
                      ))}
                    </SliderDots>
                    <SliderControllerJS rootId={`content-${index}-${id}`} />
                  </div>
                </div>
              </>
            );
          })}
          <div class="flex items-center mt-[60px]">
            <a
              href={link.redirect}
              class="flex-1 self-center items-center justify-center text-white cursor-pointer text-center rounded-[40px] bg-transparent font-ibm-plex font-semibold flex py-[12px] px-[24px]"
            >
              <img src="/circle-menu.png" />
              <div class="ml-[-20px] pr-[20px] text-highlight font-ibm-plex">
                {link.text}
              </div>
              <img class="h-[16px]" src="/green-arrow-right.png" />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop View */}

      <div class="hidden md:block bg-fullslider pb-[100px]">
        <div
          id={`content-desktop-${id}`}
          class="w-full mx-auto px-0 block relative"
        >
          {customDesktopTitle && (
            <h3
              dangerouslySetInnerHTML={{ __html: customDesktopTitle }}
              class="px-5 text-[46px] leading-[55px] text-subcolor text-center font-sans font-bold pt-[140px] pb-[80px]"
            >
            </h3>
          )}
          <Slider
            style={{
              gridTemplateColumns: `repeat(${contentsDesktop.length}, 100%)`,
            }}
            class="sm:grid sm:col-span-full sm:overflow-x-hidden"
            snap="flex snap-center w-full"
          >
            {contentsDesktop?.map((content, index) => {
              return (
                <>
                  <div class="h-[700px]  max-w-[1296px] mx-auto block">
                    <div class="z-[1] h-full block relative overflow-hidden whitespace-nowrap">
                      <h1 class="mb-6 mx-5 pb-5 text-[40px] leading-[44px] border-b-2 border-solid border-slideborder text-subtitleslide font-grotesk font-bold">
                        {content.firstSubTitle}
                      </h1>

                      <div class="grid-services-desktop">
                        {content.cards?.map((card) => {
                          return (
                            <div class="h-auto border-black whitespace-normal text-left inline-block relative w-full">
                              <div class="block">
                                <div class="p-[36px] bg-slideborder rounded-[20px] flex flex-col justify-center items-start">
                                  <img
                                    class="w-[50px] h-[50px] max-h-full max-w-none rounded-[20px] bg-white mb-[24px] p-1.5"
                                    src={card.image}
                                  />
                                  <h4 class="text-subcolor font-sans text-[18px] font-extrabold leading-[25px] mb-3">
                                    {card.title}
                                  </h4>
                                  <p class="text-[15px] font-grotesk text-white text-left mb-[24px]">
                                    {card.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
          <SliderDots class="mt-[60px]">
            {contentsDesktop?.map((_) => (
              <div class="w-[16px] h-[16px] bg-dots-services rounded-1/2 group-disabled:bg-white mx-[3px]">
              </div>
            ))}
          </SliderDots>
          <SliderControllerJS rootId={`content-desktop-${id}`} />
          <div class="flex items-center mt-[60px]">
            <a
              href={link.redirect}
              class="flex-1 self-center items-center justify-center text-white cursor-pointer text-center rounded-[40px] bg-transparent font-ibm-plex font-semibold flex py-[12px] px-[24px]"
            >
              <img src="/circle-menu.png" />
              <div class="ml-[-20px] pr-[20px] text-highlight font-ibm-plex">
                {link.text}
              </div>
              <img class="h-[16px]" src="/green-arrow-right.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
