import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title: string;
  banners: { src: LiveImage; width: number; height: number; link: string }[];
}

export default function Marcas({ banners, title }: Props) {
  return (
    <div class="ml:max-w-[1296px] ml:mx-auto ml:px-[24px] ml:pt-[40px]">
      <div class="flex justify-center items-center w-full mb-[48px] mt-[60px] mt-[160px] mb-[40px]">
        <h1
          dangerouslySetInnerHTML={{ __html: title }}
          class="font-sans text-center text-[39px] sm:text-[46px] leading-[48px] sm:leading-[55px] font-bold block text-primary"
        >
        </h1>
      </div>
      <div class="grid-footer-second grid-cols-marcas ml:grid-cols-marcasDesk">
        {banners?.map((banners) => {
          return (
            <a class="justify-self-center" href={banners.link}>
              <Image
                class="opacity-75"
                src={banners.src}
                width={banners.width}
                height={banners.height}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
