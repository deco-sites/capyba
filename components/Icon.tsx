import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons =
  | "MenuBars"
  | "iconX"
  | "redArrow"
  | "ChevronLeft"
  | "Close";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  id: AvailableIcons;
  size?: number;
}

export default function Icon({
  id,
  strokeWidth = 16,
  size,
  width,
  height,
  ...otherProps
}: Props) {
  return (
    <svg
      {...otherProps}
      width={width ?? size}
      height={height ?? size}
      strokeWidth={strokeWidth}
    >
      <use href={asset(`/sprites.svg#${id}`)} />
    </svg>
  );
}
