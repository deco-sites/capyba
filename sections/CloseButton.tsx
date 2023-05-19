import Icon from "../components/Icon.tsx";

export interface Props {
  text: string;
  link: string;
}

export default function CloseButton({ text, link }: Props) {
  return (
    <div class="mx-[20px] mt-[20px] sm:fixed sm:z-30 sm:top-[2%] sm:right-[1%] sm:m-0">
      <a
        class="flex w-full rounded-[20px] text-white text-center bg-subcolor p-5 shadow-close-btn "
        href={link}
      >
        <Icon class="block sm:hidden" id="ChevronLeft" size={24} />
        <Icon class="hidden sm:block" id="Close" size={24} />
        <span class="block flex-1 font-sans font-semibold sm:hidden">
          {text}
        </span>
      </a>
    </div>
  );
}
