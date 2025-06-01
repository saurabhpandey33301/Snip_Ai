// "use client";
// import React from "react";
// import { OrbitingCircles } from "../../components/magicui/orbiting-circles";
// import { cn } from "../../lib/utils";
// import { AnimatedShinyText } from "../../components/magicui/animated-shiny-text";
// import { ArrowRightIcon, TrackNextIcon } from "@radix-ui/react-icons";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// export default function TechStack() {
//   return (
//     <div className="min-w-full flex flex-col justify-center items-center">
//       <AnimatedShinyTextDemo />
//       <div className="flex justify-between min-w-full ">
//         <div className="w-100 h-100 ">
//           <PersonIcon />
//         </div>
//         <div className="w-150 h-100 ">
//           <OrbitingCirclesDemo />
//         </div>
//       </div>
//     </div>
//   );
// }

// const PersonIcon = () => {
//   return (
//     <DotLottieReact
//       src="https://lottie.host/1420fdd0-1805-4cde-985c-67e20838be56/iKOiKLXpgq.lottie"
//       loop
//       autoplay
//     />
//   );
// };

// export function AnimatedShinyTextDemo() {
//   return (
//     <div className=" flex   items-center justify-center">
//       <div
//         className={cn(
//           "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
//         )}
//       >
//         <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
//           <span>⚡Powered by </span>
//           <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
//         </AnimatedShinyText>
//       </div>
//     </div>
//   );
// }

// export function OrbitingCirclesDemo() {
//   return (
//     <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
//       <OrbitingCircles iconSize={40}>
//         <Icons.gitHub />
//         <Icons.next/>
//         <Icons.versal/>
//         <Icons.Prisma />
//         <Icons.javascript />

//       </OrbitingCircles>
//       <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
//        <Icons.gitHub />
//         <Icons.next/>
//         <Icons.versal/>
//         <Icons.Prisma />
//         <Icons.javascript />
//       </OrbitingCircles>
//     </div>
//   );
// }

// const Icons = {
//   gitHub: () => (
//     <svg width="100" height="100" viewBox="0 0 438.549 438.549">
//       <path
//         fill="currentColor"
//         d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
//       />
//     </svg>
//   ),
//   next: () => (
//     <svg
//       viewBox="0 0 256 256"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//     //   xmlns:xlink="http://www.w3.org/1999/xlink"
//       preserveAspectRatio="xMidYMid"
//       fill="#ffffff"
//       stroke="#ffffff"
//     >
//       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//       <g
//         id="SVGRepo_tracerCarrier"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       ></g>
//       <g id="SVGRepo_iconCarrier">
//         {" "}
//         <g>
//           {" "}
//           <path
//             d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
//             fill="#ffffff"
//           >
//             {" "}
//           </path>{" "}
//         </g>{" "}
//       </g>
//     </svg>
//   ),
//   Tailwind: () => (
//     <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000">
//       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//       <g
//         id="SVGRepo_tracerCarrier"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       ></g>
//       <g id="SVGRepo_iconCarrier">
//         <title>file_type_tailwind</title>
//         <path
//           d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
//           style="fill:#44a8b3"
//         ></path>
//       </g>
//     </svg>
//   ),
//   Prisma: () => (
//     <svg
//       viewBox="0 0 32 32"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="#ffffff"
//       stroke="#ffffff"
//     >
//       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//       <g
//         id="SVGRepo_tracerCarrier"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       ></g>
//       <g id="SVGRepo_iconCarrier">
//         <title>file_type_light_prisma</title>
//         <path
//           d="M25.21,24.21,12.739,27.928a.525.525,0,0,1-.667-.606L16.528,5.811a.43.43,0,0,1,.809-.094l8.249,17.661A.6.6,0,0,1,25.21,24.21Zm2.139-.878L17.8,2.883h0A1.531,1.531,0,0,0,16.491,2a1.513,1.513,0,0,0-1.4.729L4.736,19.648a1.592,1.592,0,0,0,.018,1.7l5.064,7.909a1.628,1.628,0,0,0,1.83.678l14.7-4.383a1.6,1.6,0,0,0,1-2.218Z"
//           style="fill:#6ba1c2;fill-rule:evenodd"
//         ></path>
//       </g>
//     </svg>
//   ),
//   javascript: () => (
//     <svg
//       viewBox="0 0 256 256"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//     //   xmlns:xlink="http://www.w3.org/1999/xlink"
//       preserveAspectRatio="xMidYMid"
//       fill="#000000"
//     >
//       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//       <g
//         id="SVGRepo_tracerCarrier"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       ></g>
//       <g id="SVGRepo_iconCarrier">
//         {" "}
//         <g>
//           {" "}
//           <path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E">
//             {" "}
//           </path>{" "}
//           <path
//             d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
//             fill="#000000"
//           >
//             {" "}
//           </path>{" "}
//           <path
//             d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
//             fill="#000000"
//           >
//             {" "}
//           </path>{" "}
//         </g>{" "}
//       </g>
//     </svg>
//   ),
//   versal: () => (
//     <svg
//       viewBox="0 -17 256 256"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//     //   xmlns:xlink="http://www.w3.org/1999/xlink"
//       preserveAspectRatio="xMidYMid"
//       fill="#000000"
//       stroke="#000000"
//     >
//       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//       <g
//         id="SVGRepo_tracerCarrier"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       ></g>
//       <g id="SVGRepo_iconCarrier">
//         {" "}
//         <g>
//           {" "}
//           <polygon fill="#fafafa" points="128 0 256 221.705007 0 221.705007">
//             {" "}
//           </polygon>{" "}
//         </g>{" "}
//       </g>
//     </svg>
//   ),
// };

"use client";
import React from "react";
import { OrbitingCircles } from "../../components/magicui/orbiting-circles";
import { cn } from "../../lib/utils";
import { AnimatedShinyText } from "../../components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function TechStack() {
  return (
    <div className="min-w-full flex flex-col justify-center items-center">
      <AnimatedShinyTextDemo />
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between min-w-full ">
        <div className=" w-50 h-50 lg:w-100 lg:h-100 lg:transform lg:translate-x-40">
          <PersonIcon />
        </div>
        <div className=" w-full h-40 lg:w-150 lg:h-100">
          <OrbitingCirclesDemo />
        </div>
      </div>
    </div>
  );
}

const PersonIcon = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/1420fdd0-1805-4cde-985c-67e20838be56/iKOiKLXpgq.lottie"
      loop
      autoplay
    />
  );
};

export function AnimatedShinyTextDemo() {
  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>⚡Powered by </span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        <Icons.GitHub />
        <Icons.Next />
        <Icons.Tailwind />
        <Icons.Prisma />
        <Icons.JavaScript />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <Icons.GitHub />
        <Icons.Next />
        <Icons.Tailwind />
        <Icons.Prisma />
        <Icons.JavaScript />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  GitHub: () => (
    <img src="github-svgrepo-com.svg" alt="GitHub" className="w-8 h-8" />
  ),
  Next: () => (
    <img src="next-16-svgrepo-com.svg" alt="Next.js" className="w-8 h-8" />
  ),
  Tailwind: () => (
    <img
      src="tailwind-svgrepo-com.svg"
      alt="Tailwind CSS"
      className="w-8 h-8"
    />
  ),
  Prisma: () => (
    <img src="light-prisma-svgrepo-com.svg" alt="Prisma" className="w-8 h-8" />
  ),
  JavaScript: () => (
    <img
      src="javascript-svgrepo-com.svg"
      alt="JavaScript"
      className="w-8 h-8"
    />
  ),
  vercel: () => (
    <img src="vercel-icon-svgrepo-com.svg" alt="Vercel" className="w-8 h-8" />
  ),
};
