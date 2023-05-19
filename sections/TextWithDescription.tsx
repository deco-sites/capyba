export interface Props {
  text: string;
  description: string;
  order: "flex-row" | "flex-row-reverse";
  mobileOrder: "flex-col" | "flex-col-reverse";
}

export default function TextWithDescription(
  { text, description, mobileOrder, order }: Props,
) {
  return (
    <div
      class={`flex ${mobileOrder} sm:${order} sm:container-hero sm:px-0 sm:text-with-description-grid sm:justify-center sm:gap-[49px]`}
    >
      <h3
        class="text-center sm:text-left font-sans font-bold text-[32px] leading-[39px] block mx-auto mb-[18px] text-primary sm:text-[46px] sm:leading-[55px]"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <p
        class="mx-[20px] text-justify sm:text-left text-primary font-sans text-[20px] leading-[33px] font-normal sm:self-center sm:mx-0"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
