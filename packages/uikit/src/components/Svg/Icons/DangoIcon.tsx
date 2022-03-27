import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 46 32" width="46" height="32" {...props}>
      <defs>
        <image
          width="38"
          height="25"
          id="img1"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAZCAYAAABdEVzWAAAAAXNSR0IB2cksfwAABYhJREFUeJy1lwtQVGUUx3fvZd/LYx8u6+7CLq4QxKCICLjRDOIjIVMDdWRUkgEGX+iADOWAJmkOoj2sMaKMR6GOo2naQ61A8THaY5QBmxqLpqZEBUOmVMiE0/+7sAwQJi7rN3Pm3t39/vf8vnPOd+63IqVSmaZWq58MCQkRi4Y5tFptpFwuXx0QECAZruahB6AmcRzXCkf5w9WYTCaVh4fHaYlEctTf31/1SMCioqLEUql0B+D+9Pb2fhrO9sBpHa5l+Gy9n87LyysGF/L09FyNua/DTsIOqVSqxH379rkHzsfHR4XIFeK2Wy6VUZDFSjzHEWDbNRpNyP10SOk0nudbxWIxBQVZSS6XEb6+h/LIdhfYGEBcmR4RQz9XfkodR76io5t3klquJDg+a7FYpIM1jY2NIkSoRq/zodovd1HHrW/ol6ZjFB09jgB6GxEdN2IwmUy2Cheq3fquAOW0xEmxzEkXUjp+sCY0NFSLS3dGerIA5bSK9zaxqBHKo3jEYKipF9jDaorfGQAWHRwmOAH4gsEabAAL+y0jPWkA2PaStYIGzzw4YjAU7FREpnOuYwrdPHCqD2xLWjbFjY+8gbQsVigU+di5861Wq5ppSktLkX3uml6voR++O9wHVneigqbGR3fb7dYizF8DW6bT6WwugaWnp4tRL2+xlYbbH6PjW0qpec8X9GpWHtmMZiECEomHcAXMT6hJP6YD8ExcurVab9panENtN87QwQOvUfyUKDYPJiaO51g5dGJhi1yCM5vNctTFJhT7t7BLAK2CnVWpFPR+5Rb6q/0cnTlVRRaLkaXpGCInNFfswGfxuQYglzH/GCJUxhaQmDWR9rfn097ra8kxN5iB/uHr62tyCY6N+vp6UUNDgyg5ORkdg7uZumT2gBrKzUllEbiHaEX010EjvDkA97bGqBagPqP1gu2sz3LfhkC6WHOlyvLNA8BmTJ/s3BCZQ+kQvfORCWP7oJjllM/uLQfJiRGD2e12HXvYhsJlA8BGG/WCE3T8ObBEOCtE9J5B++B7wY7bwnzp47sFfWAz0iY4wfZgweFYVC5KYEVgYKCnS3AI/W5PTxWV73qJmn+rodZrdZSXu/Rvby+vdajDRubMaXB62GazyVDkSUj13VkrJlHVr2voo451VPRJCpkC9JUA2t9fg1JpxuJCHxoMpwc8S7YND2gyGLS/B9jMF+G4AFG5wF5ZMyZOpqQnppJUIhEcofA3BgcHc2g/CwB+Qa6SXjGN1V1WqhUfQLeDzQl93E6LF83CJvIVNJh3GguSuxS5yMhIiZ+fn6KsrEyMFMzBV93585fSnSPnBYsIDHE21RanJjU1lUP/UsbFxfEGg8GbvfIYVMvVk0JJlKC9MA2i+w+iNs0lsP4Dzos9eJ4aSvcLTfj24XMU4j/GCdY0lAY1GM4WU7RxZV+tvrhhuRPsDl55Me4A28pOE5+jCTvfEF+/sZsyE5J+hIOgoTSICAOj/u/V680nGFzXaKNh3oih2EAqHayTm3UGKsnIoQ/Xv0LbMnNpwZSZBUidz1AaNFYFaukij7dA9soU2ru7BE37ZVr63Nw6HJ38Fy5cOOzT832Hw+FgdZaCmmH15NyRtdjBb+K7q/htXkJCwn90SGcQ2zS47Rb17MgWtI4ULPIWtKU4FLi2AQYPrHQUnDlgsUajUYlrGDsiwTqwO58PCwvjBmswT455E5DyeOhNsbGxHIskg8XiDuJQanAL3OABoBJRbxRxv72tre2BGpycp7HSEPW0jkuInMbtYEgzj3QdcsIhRRXV1dX/q8nLy2MLWsKaci/c94jqaLfDIR0mPLxe1FNHnTi38Q/S4K8jj0XsxG2XqKeFPOV2MDb0ev0oPHw56mbYrQDHLimbD90qNGSvfwEtxVtMmQIZ/wAAAABJRU5ErkJggg=="
        />
      </defs>
      <use id="Background" href="#img1" x="3" y="3" />
    </Svg>
  );
};

export default Icon;
