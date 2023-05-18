export type TMenuButton = {
  title: string;
  link: string;
  highlight: boolean;
};

export type TInput = {
  type: "text" | "checkbox" | "option";
  required: boolean;
  placeholder: string;
  disabled: boolean;
  selected?: boolean;
  hideInMobile?: boolean;
  hideInDesktop?: boolean;
};

export interface IFormGroup {
  title: string;
  style: "select" | "inputs";
  inputs: TInput[];
}
