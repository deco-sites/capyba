import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  clientsImage: LiveImage;
  visibility: {
    mobile: boolean;
    desktop: boolean;
  };
  backgroundColor: string;
}

export default function Aside(
  { title, clientsImage, visibility, backgroundColor }: Props,
) {
  return (
    <aside
      class={`${!visibility.mobile ? "hidden" : "flex"} ${
        !visibility.desktop ? "sm:hidden" : "sm:flex"
      } bg-[${backgroundColor}] flex-col sm:h-full sm:max-w-[35%] sm:fixed sm:top-0 sm:left-0`}
    >
      <h1
        class="py-[60px] text-center mx-auto font-sans font-bold text-title sm:h-[15em] sm:text-[42px] sm:leading-[50px] sm:pt-[20%] sm:pb-0 sm:mx-[100px] sm:flex sm:justify-center sm:items-center sm:text-left"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div class="px-[10px]">
        <img class="mx-auto" alt="Satisfied clients logos" src={clientsImage} />
      </div>
    </aside>
  );
}
