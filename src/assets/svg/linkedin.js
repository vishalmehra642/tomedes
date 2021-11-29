import * as React from "react";

function Linkedin(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={31} {...props}>
      <defs>
        <clipPath id="prefix__a">
          <path
            transform="translate(237 15710)"
            fill="#fff"
            stroke="#707070"
            d="M0 0h32v31H0z"
          />
        </clipPath>
      </defs>
      <g transform="translate(-237 -15710)" clipPath="url(#prefix__a)">
        <path
          d="M246.498 15737.706h-5.122v-16.494h5.122zm-2.564-18.744a2.98 2.98 0 112.967-2.995 2.991 2.991 0 01-2.967 2.995zm21.734 18.744h-5.11v-8.029c0-1.914-.039-4.368-2.663-4.368-2.663 0-3.071 2.079-3.071 4.23v8.167h-5.117v-16.494h4.913v2.25h.072a5.382 5.382 0 014.845-2.662c5.184 0 6.137 3.414 6.137 7.847v9.061z"
          fill="#e6e6e6"
        />
      </g>
    </svg>
  );
}

export default Linkedin;
