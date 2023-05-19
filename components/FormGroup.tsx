import { IFormGroup } from "../types/index.ts";
import slugify from "../utils/slugify.ts";

interface Props {
  data: IFormGroup;
}

export default function FormGroup({ data }: Props) {
  const renderTextInputs = () => {
    return data.inputs?.map((input) => (
      input.type === "checkbox"
        ? (
          <label
            class={`${input.hideInMobile ? "hidden" : "inline-block"} ${
              input.hideInDesktop ? "sm:hidden" : "sm:inline-block"
            } w-max h-[50px] mb-[15px] mr-[15px] py-[10px] pr-[30px] pl-[20px] font-sans rounded-[30px] border-2 border-solid border-checkbox text-input active:text-primary active:border-subcolor active:bg-chk-active chk-group`}
          >
            <input
              name={slugify(input.placeholder)}
              type="checkbox"
              class="opacity-0 absolute -z-10"
            />
            <div class="inline-block border-1 border-input w-3 h-3 mt-[7px]">
            </div>
            <span class="inline-block font-sans text-input pl-[10px] pt-[3px] leading-[22px]">
              {input.placeholder}
            </span>
          </label>
        )
        : (
          <input
            class={`${input.hideInMobile ? "hidden" : "inline-block"} ${
              input.hideInDesktop ? "sm:hidden" : "sm:inline-block"
            } font-sans font-normal w-full not-last-child:mb-[20px] py-[10px] pl-[20px] rounded-[35px] h-[50px] text-input border-solid border-1 border-input bg-white focus:outline-none focus:border-focus`}
            type={input.type}
            placeholder={input.placeholder}
            required={input.required}
            disabled={input.disabled}
          />
        )
    ));
  };

  const renderOptions = () => {
    return data.inputs?.map((input) => (
      <option
        class={`${input.hideInMobile ? "hidden" : "block"} ${
          input.hideInDesktop ? "sm:hidden" : "sm:block"
        }`}
        value={input.placeholder}
        required={input.required}
        disabled={input.disabled}
      >
        {input.placeholder}
      </option>
    ));
  };

  const decideWhichRender = () => {
    if (data.style === "inputs") return renderTextInputs();

    return (
      <select
        title={data.title}
        class="h-[50px] text-input border-2 border-solid border-checkbox rounded-[30px] mb-[15px] mr-[15px] py-[10px] pr-[30px] pl-[20px] font-sans w-full bg-select active:text-primary active:border-subcolor active:bg-chk-active focus:border-subcolor focus:outline-none"
      >
        <option>Select one...</option>
        {renderOptions()}
      </select>
    );
  };

  return (
    <div class="flex flex-col not-first-child:mt-[75px]">
      <h2 class="font-sans font-bold pl-[10px] text-[20px] leading-[33px] mb-[24px]">
        {data.title}
      </h2>
      <div>
        {decideWhichRender()}
      </div>
    </div>
  );
}
