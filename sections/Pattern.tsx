import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  image: LiveImage;
}

export default function Pattern({ image }: Props) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      class="fixed -z-10 top-0 left-0 w-full h-full pointer-events-none pattern-careers"
    >
    </div>
  );
}
