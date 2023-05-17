import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "../components/Icon.tsx";
import { signal } from "@preact/signals";
import { useState } from "preact/hooks";

export interface Props {
  text: string;
  btnText: string;
  backgroundImg: LiveImage;
}

export default function FirstSection({ text, btnText, backgroundImg }: Props) {
  const [displayBanner, setDisplayBanner] = useState(true);

  return (
    <div class={`${displayBanner ? "block" : "hidden"} mx-[20px] sm:mx-0`}>
      <div class="mt-[60px] mx-auto max-w-[728px] md:max-w-[940px]">
        <div
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
          class="bg-[#5eb672] flex items-center sm:justify-between flex-wrap sm:flex-nowrap bg-no-repeat bg-[300%] sm:bg-[50%] bg-bgFirst sm:bg-bgFirstDesk rounded-[10px] py-[20px] px-[40px] pt-[10px] pl-[20px] relative"
        >
          <div
            onClick={() => {
              setDisplayBanner(false);
            }}
            class="cursor-pointer p-[10px] sm:static absolute top-[5%] bottom-auto left-auto right-[3%] bg-subcolor sm:bg-transparent rounded-[30px] md:hover:bg-[#43eb8a] md:hover:shadow-md"
          >
            <Icon class="opacity-50" id="iconX" size={24} />
          </div>

          <div class="my-[10px] mr-[40px] pl-0">
            <h1 class="ml-0 mb-0 pr-[10px] font-manrope text-[25px] sm:text-[35px] leading-[31px] sm:leading-[38px] sm:ml-[20px] backdropFilter text-white">
              {text}
            </h1>
          </div>

          <a class="bg-[#30287d] rounded-[10px] flex items-center justify-center font-manrope flex-none">
            <img
              class="ml-[-30px]"
              src="/redArrow.svg"
              width={70}
              height={26}
            />
            <h4 class="font-grotesk font-normal text-[18px] text-white pt-[12px] pr-[20px] pb-[8px] pl-[10px] self-center">
              {btnText}
            </h4>
          </a>
        </div>
      </div>
    </div>
  );
}
