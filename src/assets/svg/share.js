import * as React from "react"

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} {...props}>
      <path
        d="M75 8.332c-6.855 0-12.5 5.648-12.5 12.5 0 .797.09 1.574.234 2.328L33.008 40.504C30.828 38.656 28.05 37.5 25 37.5c-6.855 0-12.5 5.645-12.5 12.5S18.145 62.5 25 62.5c3.05 0 5.828-1.156 8.008-3.004l29.726 17.336a12.432 12.432 0 00-.234 2.336c0 6.852 5.645 12.5 12.5 12.5s12.5-5.648 12.5-12.5c0-6.856-5.645-12.5-12.5-12.5-3.05 0-5.828 1.164-8.008 3.008L37.266 52.328c.144-.758.234-1.531.234-2.328 0-.797-.09-1.57-.234-2.328l29.726-17.34c2.18 1.844 4.957 3 8.008 3 6.855 0 12.5-5.645 12.5-12.5 0-6.852-5.645-12.5-12.5-12.5zm0 8.336c2.352 0 4.168 1.816 4.168 4.164C79.168 23.184 77.352 25 75 25c-2.352 0-4.168-1.816-4.168-4.168 0-2.348 1.816-4.164 4.168-4.164zM25 45.832c2.352 0 4.168 1.816 4.168 4.168 0 2.352-1.816 4.168-4.168 4.168-2.352 0-4.168-1.816-4.168-4.168 0-2.352 1.816-4.168 4.168-4.168zM75 75c2.352 0 4.168 1.816 4.168 4.168 0 2.348-1.816 4.164-4.168 4.164-2.352 0-4.168-1.816-4.168-4.164C70.832 76.816 72.648 75 75 75zm0 0"
        fill="#2664e4"
      />
    </svg>
  )
}

export default SvgComponent