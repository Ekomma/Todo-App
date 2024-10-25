import * as React from "react";
import { SVGProps, memo } from "react";

const CompletedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <rect
      width={30.5}
      height={30.5}
      x={0.75}
      y={0.75}
      fill="#53DA69"
      stroke="#49C25D"
      strokeWidth={1.5}
      rx={15.25}
    />
    <path
      stroke="#399649"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21.718 12-8.056 8.056L10 16.394"
    />
  </svg>
);
const Memo = memo(CompletedIcon);
export default Memo;
