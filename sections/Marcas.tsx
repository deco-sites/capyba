import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  banners: { src: LiveImage; width: number; height: number; link: string }[];
}

export default function Marcas({ banners }: Props) {
  return (
    <div class="ml:max-w-[1296px] ml:mx-auto ml:px-[24px] ml:pt-[40px]">
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
