import * as React from "react";

function BadgeSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={39.838}
      height={60.04}
      {...props}
      className="mx-auto"
    >
      <defs>
        <style>{".prefix__a{fill:#3a7aff}"}</style>
      </defs>
      <path
        className="prefix__a"
        d="M11.423 43.569l-4.52-7.83-1.1-.4v24.7h3.74l8.632-9.139v-9.791z"
      />
      <path
        className="prefix__a"
        d="M34.198 11.982l-1.278-7.25h-7.362L19.919 0 14.28 4.732H6.918l-1.278 7.25-5.639 4.732 3.681 6.375-1.278 7.25 6.918 2.518 3.681 6.375 6.918-2.518 6.918 2.518 3.681-6.375 6.918-2.518-1.278-7.25 3.681-6.375zM16.709 25.628l-4.612-5.381 2.684-2.3 2.457 2.866 8.1-6.076 2.121 2.828z"
      />
      <path
        className="prefix__a"
        d="M32.936 35.741l-4.52 7.83-6.7-2.439v9.764l8.666 9.147h3.706V35.32z"
      />
    </svg>
  );
}

export default BadgeSvg;
