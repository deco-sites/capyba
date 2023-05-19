export interface Props {
  title: string;
}

export default function PageTitle({ title }: Props) {
  return (
    <div class="flex justify-center items-center w-full mb-[48px] mt-[60px] sm:mt-[140px] sm:mb-[96px]">
      <h1 class="font-sans text-[39px] sm:text-[70px] leading-[48px] sm:leading-[70px] font-bold sm:font-semibold block text-primary pb-[10px]">
        {title}
      </h1>
    </div>
  );
}
