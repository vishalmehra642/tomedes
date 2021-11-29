import * as React from "react";

function Phone(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={13.008}
      height={13.009}
      {...props}
    >
      <path
        d="M12.637 9.192L9.791 7.973a.61.61 0 00-.711.175l-1.26 1.54a9.417 9.417 0 01-4.5-4.5l1.54-1.26a.608.608 0 00.175-.711L3.813.369a.614.614 0 00-.7-.353l-2.64.61A.61.61 0 000 1.22a11.787 11.787 0 0011.789 11.788.61.61 0 00.595-.473l.61-2.642a.617.617 0 00-.356-.7z"
        fill="#e6e6e6"
      />
    </svg>
  );
}

export default Phone;
