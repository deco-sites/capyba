import { useUI } from "../sdk/useUI.ts";
import { TMenuButton } from "../types/index.ts";

interface Props {
  menuItems: { title: string; url: string }[];
  buttons?: TMenuButton[];
}

export default function Menu({ menuItems, buttons }: Props) {
  const { displayMenu } = useUI();
  const isDesktop = window?.matchMedia?.("(min-width: 1280px)")?.matches;

  const checkDisplayMenu = (okClasses: string, failClasses = "") => {
    if (displayMenu.value) {
      return okClasses;
    }
    return failClasses;
  };

  return (
    <div
      class={checkDisplayMenu(
        "absolute top-full w-full bg-white mt-[10px] shadow-menu rounded-[20px] p-5 flex items-center justify-center transition-all flex flex-col xl:menu-xl xl:left-0 xl:z-10",
        "absolute flex items-center justify-center w-full h-0 xl:h-screen overflow-hidden pointer-events-none top-full xl:top-0 xl:left-[-100%] transition-all flex flex-col",
      )}
    >
      <ul class="xl:menu-list-xl">
        {menuItems.map((item) => (
          <li class="text-center" key={crypto.randomUUID()}>
            <a
              class="block py-[10px] mx-[5px] text-[14px] leading-[20px] tracking-[.25px] text-navlink hover:text-navlink-hover font-grotesk font-semibold xl:font-poppins xl:text-[20px] xl:font-bold xl:h-[64px] xl:flex xl:items-center"
              href={item.url}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <ul class="xl:w-[90%] xl:mx-auto">
        {buttons?.map((btn) => {
          if (isDesktop && !btn.highlight) return null;

          return (
            <li
              key={crypto.randomUUID()}
              class={btn.highlight
                ? "mx-auto xl:mx-0 xl:w-max mt-2.5 last-child:mt-[20px] xl:last-child:mt-0"
                : "w-max mx-auto mt-2.5 last-child:mt-[20px]"}
            >
              <a
                class={`block ${
                  btn.highlight
                    ? "bg-highlight-light font-sans hover:bg-highlight"
                    : "bg-white font-ibm-plex border-solid border-1 border-[#e9e9e9]"
                } rounded-[40px] text-primary py-3 px-[25px] text-center`}
                href={btn.link}
                title={btn.title}
              >
                {btn.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
