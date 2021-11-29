import * as React from "react";

function Youtube(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={33} {...props}>
      <defs>
        <clipPath id="prefix__a">
          <path
            transform="translate(292 15710)"
            fill="#e6e6e6"
            stroke="#707070"
            d="M0 0h40v33H0z"
          />
        </clipPath>
      </defs>
      <g transform="translate(-292 -15710)" clipPath="url(#prefix__a)">
        <path
          d="M322.817 15719.677a4.287 4.287 0 00-4.081-4.477c-3.055-.143-6.171-.2-9.353-.2h-.993c-3.177 0-6.3.055-9.353.2a4.3 4.3 0 00-4.075 4.488c-.138 1.963-.2 3.926-.193 5.89s.055 3.926.188 5.9a4.3 4.3 0 004.075 4.495c3.21.149 6.5.215 9.849.21q5.029.017 9.849-.21a4.3 4.3 0 004.081-4.495 84.87 84.87 0 00.188-5.9q.017-2.951-.182-5.901zm-16.632 11.31v-10.836l8 5.415z"
          fill="#e6e6e6"
        />
      </g>
    </svg>
  );
}

export default Youtube;
