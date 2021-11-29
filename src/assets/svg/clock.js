import * as React from "react";

function ClockSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      {...props}
      className="mx-auto"
    >
      <path
        d="M24 0a24 24 0 1024 24A24 24 0 0024 0zm1.615 26.077A1.62 1.62 0 0124 27.692H12.925a1.615 1.615 0 110-3.231h9.46V9.231a1.615 1.615 0 113.231 0z"
        fill="#3a7aff"
      />
    </svg>
  );
}

export default ClockSvg;
