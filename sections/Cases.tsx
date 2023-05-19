import { useId } from "preact/hooks";
import { Slider, SliderDots } from "../components/Slider.tsx";
import SliderControllerJS from "../islands/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  cases: {
    image: LiveImage;
    title: string;
    description: string;
    techs: {
      image: LiveImage;
      width: number;
      height: number;
    }[];
    action: {
      text: string;
      link: string;
    };
  }[];
}

function ButtonPrev() {
  return (
    <button
      type="button"
      class="block h-auto cursor-pointer outline-none focus:outline-none font-webflow-icons text-[40px] text-[#b1b1b1]"
      data-slide="prev"
      aria-label="Previous item"
    >
      
    </button>
  );
}

function ButtonNext() {
  return (
    <button
      type="button"
      class="block h-auto cursor-pointer outline-none focus:outline-none font-webflow-icons text-[40px] text-[#b1b1b1]"
      data-slide="next"
      aria-label="Next item"
    >
      
    </button>
  );
}

export default function Cases({ title, cases }: Props) {
  const id = useId();

  return (
    <div class="relative">
      <h3 class="container-hero pt-[60px] pb-[20px] font-sans font-bold text-[32px] text-primary leading-[36px] text-center sm:text-[54px] sm:leading-[54px]">
        {title}
      </h3>

      <div id={id} class="sm:container-hero">
        <Slider
          style={{ gridTemplateColumns: `repeat(${cases.length}, 100%)` }}
          class="sm:grid sm:col-span-full sm:overflow-hidden"
          snap="flex snap-center w-screen sm:w-full use-cover px-[34px]"
        >
          {cases.map((_case) => (
            <div class="flex flex-col sm:flex-row sm:gap-[16px] mt-[40px] w-full sm:grid-cases">
              <img
                class="w-full"
                src={_case.image}
                loading="lazy"
              />
              <div class="flex flex-col">
                <h4 class="mt-[20px] mb-[12px] font-sans text-primary font-bold text-[32px] leading-[39px] text-center sm:text-left sm:text-[36px] sm:mt-0">
                  {_case.title}
                </h4>
                <p class="px-[10px] pt-[10px] text-justify font-sans text-[16px] leading-[24px] font-normal text-primary sm:text-[20px] sm:leading-[33px] sm:text-left sm:p-0">
                  {_case.description}
                </p>
                <ul
                  role="list"
                  class="flex mt-[20px] justify-center sm:justify-start"
                >
                  {_case.techs.map((tech) => (
                    <img
                      class="py-[10px] pr-[10px]"
                      src={tech.image}
                      width={tech.width}
                      height={tech.height}
                      loading="lazy"
                    />
                  ))}
                </ul>
                <a
                  class="mt-[30px] h-[55px] flex items-center justify-center bg-highlight-light rounded-[35px] text-center sm:w-max sm:pt-[15px] sm:pr-[20px] sm:pb-[8px] sm:pl-[40px] sm:items-start"
                  href={_case.action.link}
                >
                  <span class="inline-block text-highlight font-sans pr-[20px] font-semibold text-[16px]">
                    {_case.action.text}
                  </span>
                  <img
                    loading="lazy"
                    class="inline-block mt-[5px]"
                    src="/green-arrow-right.png"
                    alt="Capyba"
                  />
                </a>
              </div>
            </div>
          ))}
        </Slider>
        <SliderDots class="mt-[30px]">
          {cases?.map((_) => (
            <div class="w-[16px] h-[16px] rounded-1/2 bg-dots group-disabled:bg-dots-active mx-[3px] opacity-[.4]">
            </div>
          ))}
        </SliderDots>
        <div class="hidden sm:flex justify-between w-full absolute left-0 top-2/4 -translate-y-2/4 px-[1em]">
          <ButtonPrev />
          <ButtonNext />
        </div>
        <SliderControllerJS rootId={id} />
      </div>
      <a
        class="block py-[10px] px-[60px] rounded-[30px] font-sans text-primary font-semibold bg-light-grey max-w-max mt-[40px] mx-auto sm:bg-transparent sm:text-[20px] sm:font-normal sm:relative group sm:p-0"
        href="/cases/cases-home"
      >
        View more cases
        <img
          loading="lazy"
          class="inline-block sm:hidden ml-[20px]"
          src="/arrow-right.png"
          alt="Capyba"
        />
        <img
          loading="lazy"
          class="hidden sm:inline-block ml-[20px]"
          src="/green-arrow-right.png"
          alt="Capyba"
        />
        <span class="bg-highlight h-[2px] w-[0px] absolute -bottom-[16px] left-0 transition-all group-hover:w-full">
        </span>
      </a>
    </div>
  );
}