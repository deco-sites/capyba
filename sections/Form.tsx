import FormGroup from "../components/FormGroup.tsx";
import { IFormGroup } from "../types/index.ts";

export interface Props {
  formGroups: IFormGroup[];
  submit: {
    text: string;
    action: string;
  };
}

export default function Form(
  { formGroups, submit }: Props,
) {
  return (
    <section class="mx-[20px] sm:fixed sm:w-full sm:left-[35%] sm:right-[35%] sm:top-0 sm:bottom-0 sm:h-full sm:min-w-[30%] bg-white sm:m-0 sm:overflow-y-scroll">
      <form class="mt-[60px] sm:mt-[100px] sm:pl-[40px] sm:max-w-[50%]">
        {formGroups.map((fg) => <FormGroup data={fg} />)}
        <button
          class="block bg-subcolor rounded-[30px] font-sans text-[20px] text-white font-semibold py-[15px] px-[60px] mt-[40px] mx-auto mb-[75px]"
          type="submit"
        >
          {submit?.text}
        </button>
      </form>
    </section>
  );
}
