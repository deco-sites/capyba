import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import MenuButton from "../islands/MenuButton.tsx";
import Menu from "../islands/Menu.tsx";
import { TMenuButton } from "../types/index.ts";

export interface Props {
  fixed: boolean;
  logo: { src: LiveImage; width: number; height: number };
  menuItems: { title: string; url: string }[];
  menuButtons?: TMenuButton[];
}

export default function Header({ logo, fixed, menuItems, menuButtons }: Props) {
  return (
    <header class="flex relative justify-center items-center bg-white shadow-header xl:shadow-header-xl p-5 w-full">
      <Menu menuItems={menuItems} buttons={menuButtons} />
      <div class="flex relative justify-center items-center w-full xl:justify-between">
          <MenuButton />
        <a class="xl:relative xl:z-10" title="Logo" href="/">
          <Image
            class="max-w-[90%] mt-[3px] xl:max-w-full xl:mt-0"
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt="Capyba"
          />
        </a>
        <div class="hidden xl:flex">
          {menuButtons?.map((btn) =>
            !btn.highlight && (
              <a
                class={`bg-white hover:bg-subcolor hover:border-transparent font-ibm-plex rounded-[40px] text-primary py-3 px-[25px] border-solid border-1 border-[#e9e9e9] text-center`}
                href={btn.link}
                title={btn.title}
              >
                {btn.title}
              </a>
            )
          )}
        </div>
      </div>
    </header>
  );
}
