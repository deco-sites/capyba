import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  people: {
    picture: LiveImage;
    name: string;
    role: string;
  }[];
}

export default function People({ people }: Props) {
  return (
    <div class="mx-[20px] py-[72px] sm:py-[180px] sm:pb-[40px]">
      <div class="team-grid sm:team-grid-sm md:team-grid-md sm:container-hero">
        {people.map((person) => (
          <div class="flex flex-col hover:px-[20px] hover:pb-[20px] hover:rounded-[15px] hover:shadow-person-card hover:sm:person-card-hsm">
            <img class="w-full pt-[20px] mb-[24px]" src={person.picture} />
            <h4 class="font-sans font-bold text-[24px] leading-[30px] mb-[12px]">
              {person.name}
            </h4>
            <p class="font-poppins text-primary text-[16px] font-normal">
              {person.role}
            </p>
          </div>
        ))}
        <div class="flex flex-col justify-center">
          <h3 class="font-sans text-[46px] leading-[55px] mb-[18px] font-bold text-center">
            Interested in joining our growing team?
          </h3>
          <a
            class="inline-block text-center bg-highlight-light hover:bg-highlight mt-[20px] rounded-[35px] text-primary font-semibold pl-[30px] pt-[15px] pb-[12px] pr-[20px] w-max mx-auto"
            href="/careers"
          >
            See Career Openings
            <img
              loading="lazy"
              class="inline-block ml-[15px]"
              src="/green-arrow-right.png"
              alt="Capyba"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
