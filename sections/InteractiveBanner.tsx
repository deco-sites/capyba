import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "../components/Icon.tsx";
import FirstSection from "../islands/FirstSection.tsx";

export interface Props {
  text: string;
  btnText: string;
  backgroundImg: LiveImage;
}

export default function InteractiveBanner({
  text,
  btnText,
  backgroundImg,
}: Props) {
  return (
    <FirstSection text={text} btnText={btnText} backgroundImg={backgroundImg} />
  );
}
