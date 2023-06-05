import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  image: LiveImage;
  title: string;
  places: {
    continente: string;
    país: string;
  }[];
}

export default function WorldClients({ image, places, title }: Props) {
  return (
    <>
      <div class="flex justify-center items-center w-full mb-[48px] mt-[60px] mt-[160px] mb-[40px]">
        <h1
          dangerouslySetInnerHTML={{ __html: title }}
          class="font-sans text-center text-[39px] sm:text-[46px] leading-[48px] sm:leading-[55px] font-bold block text-primary"
        ></h1>
      </div>
      <div class="px-5 sm:px-0 max-w-[1062px] mt-[100px] mx-auto mb-[90px] block">
        <img src={image} />
      </div>
      <div class="px-5 grid-worldmap sm:grid-cols-worldClients max-w-[1280px] justify-items-stretch mx-auto mb-[100px]">
        {places?.map((place) => {
          return (
            <div class="self-center justify-self-center">
              <h1 class="text-center text-highlight font-sans font-bold text-[20px] leading-[24px] block mb-[24px]">
                {place.continente}
              </h1>
              <p class="text-primary font-sans text-[20px] font-normal text-center mb-[24px]">
                {place.país}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
