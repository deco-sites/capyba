export interface Props {
  text: string;
  description: string;
  order: "flex-row" | "flex-row-reverse";
  mobileOrder: "flex-col" | "flex-col-reverse";
  anchors?: {
    text: string;
    rootId: string;
  }[];
}

export default function TextWithDescription(
  { text, description, mobileOrder, order, anchors }: Props,
) {
  return (
    <div class="flex flex-col">
      <div
        class={`flex ${mobileOrder} sm:${order} sm:container-hero sm:px-0 sm:text-with-description-grid sm:justify-center`}
      >
        <h3
          class="text-center sm:text-left font-sans font-bold text-[32px] leading-[39px] block mx-auto mb-[18px] text-primary sm:text-[46px] sm:leading-[55px]"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <p
          class="mx-[20px] text-justify sm:text-left text-primary font-sans text-[20px] leading-[33px] font-normal sm:self-center sm:mx-0"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {anchors && anchors.length > 0
          ? anchors.map((link, index) => (
            <a
              class={`mx-[20px] mt-[40px] sm:mx-0 flex justify-center items-center rounded-[30px] border-solid border-2 text-input h-[50px] font-sans border-checkbox font-semibold focus:border-subcolor sm:px-[20px] ${
                index % 2 !== 0 ? "justify-self-start" : "justify-self-end"
              }`}
              href={`${link.rootId}`}
            >
              {link.text}
            </a>
          ))
          : null}
      </div>
    </div>
  );
}
