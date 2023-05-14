import { useEffect } from "preact/hooks";
import { useUI } from "../sdk/useUI.ts";
import { asset } from "$fresh/runtime.ts";

export default function MenuButton() {
  const { displayMenu } = useUI();

  useEffect(() => {
    const isDesktop = window?.matchMedia?.("(min-width: 1280px)")?.matches;

    if (displayMenu.value === true && isDesktop) {
      document.body.classList.add(
        "no-scroll",
      );
    } else if (displayMenu.value === false) {
      document.body.classList.remove(
        "no-scroll",
      );
    }
  }, [displayMenu.value]);

  return (
    <div
      className={`absolute left-0 z-10 xl:relative ${
        displayMenu.value && "xl:left-[5%]"
      } transition-all`}
    >
      <button
        onClick={() => {
          displayMenu.value = !displayMenu.value;
        }}
        type="button"
        aria-label="Menu"
        title="Open Menu"
        class="cursor-pointer focus:outline-none p-3 h-[36px] xl:h-auto xl:p-0"
      >
        <span class="hidden xl:block p-1.5 font-poppins rounded-[20px] max-w-[111px] border-2 border-solid border-subcolor hover:bg-menu-btn-hover">
          <img
            class="inline-block px-[10px]"
            src={displayMenu.value
              ? asset(`/close-green.png`)
              : asset(`/menu-bars.png`)}
          />{" "}
          <p class="inline-block pr-[10px] font-poppins text-primary">Menu</p>
        </span>
        <span class="block xl:hidden w-icon font-webflow-icons text-highlight text-2xl">
          
        </span>
      </button>
    </div>
  );
}
