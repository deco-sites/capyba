import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  link1: string;
  img1: LiveImage;
  link2: string;
  img2: LiveImage;
  country1: LiveImage;
  name1: string;
  date1: string;
  content1: string;
  country2: LiveImage;
  name2: string;
  date2: string;
  content2: string;
  linkViewMore: string;
  viewMore: string;
}

export default function Posts({
  title,
  link1,
  img1,
  link2,
  img2,
  country1,
  name1,
  date1,
  content1,
  country2,
  name2,
  date2,
  content2,
  linkViewMore,
  viewMore,
}: Props) {
  return (
    <div class="max-w-[1296px] mx-2.5 sm:mx-auto text-left sm:px-[24px] relative">
      <div class="max-w-[800px] pt-[20px] pb-2.5 mx-auto w-full">
        <div class="block sm:flex justify-center items-center text-center">
          <h5
            class="text-primary text-center pt-[140px] px-[10px] text-[32px] sm:text-[40px] leading-[36px] sm:leading-[44px] md:text-[54px] md:leading-[54px] font-sans font-bold pb-[100px]"
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </h5>
        </div>
      </div>

      <div class="w-auto h-auto px-[24px]">
        <div class="relative z-[1] max-w-[612px] mx-auto grid-posts-mobile grid-cols-postsMobile md:grid-cols-careers-cards-sm md:max-w-none">
          <div class="group justify-self-center self-stretch">
            <a
              class="h-full rounded-[8px] overflow-hidden flex relative"
              href={link1}
            >
              <img
                class="hoverPosts group-hover:hoverPostsFinal w-full h-full object-cover relative "
                src={img1}
              >
              </img>
              <div class="z-[1] w-full text-white p-[36px] absolute bottom-0">
                <div class="flex items-center mb-[18px]">
                  <img class="mr-2.5" src={country1} />
                  <div class="text-primary bg-subcolor mr-[18px] rounded-[6px] px-[12px] flex items-center h-[30px]">
                    <div class="font-ibm-plex font-bold text-[14px] leading-[16px]">
                      {name1}
                    </div>
                  </div>
                  <div class="text-subcolor font-ibm-plex text-[14px] leading-[16px]">
                    {date1}
                  </div>
                </div>
                <h3 class="font-grotesk font-bold text-[28px] leading-[32px]">
                  {content1}
                </h3>
              </div>
              <div class="group-hover:h-[100%] transition-all bg-primary h-[70%] w-full absolute bottom-0 opacity-90 forPosts bg-transparent">
              </div>
            </a>
          </div>
          <div class="group">
            <div class="justify-self-center self-stretch">
              <a
                class="h-full rounded-[8px] overflow-hidden flex relative"
                href={link2}
              >
                <img
                  class="hoverPosts group-hover:hoverPostsFinal w-full h-full object-cover relative "
                  src={img2}
                >
                </img>
                <div class="z-[1] w-full text-white p-[36px] absolute bottom-0">
                  <div class="flex items-center mb-[18px]">
                    <img class="mr-2.5" src={country2} />
                    <div class="text-primary bg-subcolor mr-[18px] rounded-[6px] px-[12px] flex items-center h-[30px]">
                      <div class="font-ibm-plex font-bold text-[14px] leading-[16px]">
                        {name2}
                      </div>
                    </div>
                    <div class="text-subcolor font-ibm-plex text-[14px] leading-[16px]">
                      {date2}
                    </div>
                  </div>
                  <h3 class="font-grotesk font-bold text-[28px] leading-[32px]">
                    {content2}
                  </h3>
                </div>
                <div class="group-hover:h-[100%] transition-all bg-primary h-[70%] w-full absolute bottom-0 opacity-90 forPosts bg-transparent">
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="my-[40px]">
        <div class="mt-[80px] pt-[40px] flex items-center justify-center flex-col text-center">
          <a
            class="bg-posts sm:bg-transparent rounded-[30px] py-2.5 px-[60px]"
            href={linkViewMore}
          >
            <div class="my-auto inline-block pr-0 font-semibold sm:font-normal font-sans sm:text-[20px]">
              {viewMore}
            </div>
            <img
              class="h-[21px] pt-[5px] float-right sm:hidden"
              src="/white-arrow-right.png"
            />
            <img
              class="h-[21px] pt-[5px] pl-[20px] float-right hidden sm:block"
              src="/green-arrow-right.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
