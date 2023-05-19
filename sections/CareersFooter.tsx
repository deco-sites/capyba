export interface Props {
  title: string;
  paragraphs: string[];
  cards: {
    level: "Júnior" | "Pleno" | "Senior";
    title: string;
    link: string;
  }[];
}

export default function CareersFooter({ title, paragraphs, cards }: Props) {
  return (
    <div class="text-center mx-[20px] sm:container-hero sm:text-left sm:max-w-[940px]">
      <h2 class="mt-[40px] font-sans font-bold text-[32px] leading-[45px] mb-[24px] text-primary sm:text-[46px]">
        {title}
      </h2>
      {paragraphs.map((p) => (
        <p class="font-poppins leading-[26px] px-[10px] pt-[10px] mb-[24px] sm:p-0">
          {p}
        </p>
      ))}
      <ul class="mt-[20px] flex flex-col gap-[15px]">
        {cards.map((card) => (
          <li class="py-[20px] rounded-[20px] border-1 border-solid border-list-item bg-[#f8f8f8] sm:flex sm:rounded-[60px] sm:px-[36px] sm:items-center">
            <div class="bg-[#392396] rounded-[20px] font-poppins text-[#ffd803] px-[20px] flex text-[12px] text-center justify-center items-center w-[156px] mx-auto leading-[24px] font-italic sm:m-0 sm:w-[116px] sm:py-[5px] sm:px-[15px] sm:mr-[15px] sm:text-[16px]">
              Nível {card.level}
            </div>
            <span class="block mb-[20px] mt-[10px] mx-auto pt-[5px] font-poppins leading-[24px] font-bold sm:pt-[5px] sm:m-0">
              {card.title}
            </span>
            <a
              class="block bg-highlight px-[40px] rounded-[30px] py-[10px] text-white font-sans font-semibold leading-[24px] w-max mx-auto sm:py-[12px] sm:px-[24px] sm:m-0 sm:ml-auto"
              href={card.link}
            >
              Inscrever-se
            </a>
          </li>
        ))}
      </ul>
      <a
        href="/"
        class="block bg-highlight text-primary my-[100px] w-full text-center rounded-[30px] font-bold py-[15px] leading-[24px] sm:bg-button-blank sm:hover:bg-highlight"
      >
        {"<<"} Back to home
      </a>
    </div>
  );
}
