interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  fill?: string;
}

export const ArrowDownIcon = (props: IconProps) => (
  <svg
    width="16"
    height="9"
    viewBox="0 0 16 9"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.790783 0.50802C0.997718 0.311389 1.27823 0.200943 1.5707 0.200943C1.86316 0.200943 2.14367 0.311389 2.35061 0.50802L7.82471 5.71602L13.2988 0.50802C13.3999 0.404858 13.5217 0.322115 13.6571 0.264726C13.7925 0.207337 13.9386 0.176479 14.0868 0.173992C14.235 0.171504 14.3822 0.197438 14.5196 0.250248C14.657 0.303057 14.7819 0.38166 14.8867 0.481366C14.9915 0.581073 15.0741 0.699839 15.1296 0.830583C15.1851 0.961326 15.2123 1.10137 15.2097 1.24235C15.2071 1.38333 15.1747 1.52237 15.1144 1.65117C15.054 1.77997 14.9671 1.89589 14.8586 1.99202L8.60462 7.94202C8.39769 8.13865 8.11718 8.2491 7.82471 8.2491C7.53224 8.2491 7.25173 8.13865 7.0448 7.94202L0.790783 1.99202C0.584106 1.79514 0.468018 1.52827 0.468018 1.25002C0.468018 0.971769 0.584106 0.704895 0.790783 0.50802Z"
      fill="black"
    />
  </svg>
);

export const TableIcon = (props: IconProps) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_311_1225)">
      <path
        d="M41.6132 22.859L43.9658 12.1815C44.1418 11.3836 43.6373 10.5935 42.8394 10.4185C42.0415 10.2405 41.2524 10.746 41.0774 11.5439L38.98 21.0609H29.5472C28.7307 21.0609 28.0687 21.7228 28.0687 22.5403C28.0687 23.3577 28.7307 24.0197 29.5472 24.0197H30.1074L26.9218 31.5614C26.604 32.3153 26.955 33.1817 27.7089 33.4994C27.8947 33.5786 28.0922 33.6168 28.2839 33.6168C28.8608 33.6168 29.4083 33.2765 29.6469 32.7123L32.5549 25.8306L37.1672 25.8315L40.0722 32.7123C40.3919 33.4652 41.2602 33.8143 42.0102 33.4994C42.7631 33.1817 43.1151 32.3143 42.7973 31.5614L39.6126 24.0197H40.1729C40.8632 24.0187 41.4617 23.5376 41.6132 22.859Z"
        fill="white"
      />
      <path
        d="M13.8926 24.0187H14.4529C15.2693 24.0187 15.9313 23.3567 15.9313 22.5393C15.9313 21.7218 15.2693 21.0599 14.4529 21.0599H5.02005L2.92364 11.5439C2.74666 10.746 1.95562 10.2395 1.16165 10.4185C0.364743 10.5935 -0.14078 11.3836 0.0352241 12.1814L2.38781 22.859C2.53741 23.5366 3.13778 24.0197 3.83202 24.0197H4.3923L1.20663 31.5634C0.888843 32.3163 1.24085 33.1816 1.99376 33.4994C2.74471 33.8162 3.61299 33.4642 3.93175 32.7123L6.8368 25.8315L11.4491 25.8305L14.3551 32.7123C14.5937 33.2765 15.1412 33.6168 15.7182 33.6168C15.9098 33.6168 16.1054 33.5786 16.2931 33.4994C17.046 33.1816 17.398 32.3143 17.0802 31.5634L13.8926 24.0187Z"
        fill="white"
      />
      <path
        d="M24.3101 30.657H23.477V17.9016H31.4265C32.2429 17.9016 32.9059 17.2396 32.9059 16.4231C32.9059 15.6067 32.2429 14.9437 31.4265 14.9437H12.5706C11.7541 14.9437 11.0912 15.6067 11.0912 16.4231C11.0912 17.2386 11.7541 17.9016 12.5706 17.9016H20.5201V30.657H19.687C18.8706 30.657 18.2086 31.3209 18.2086 32.1374C18.2086 32.9538 18.8706 33.6168 19.687 33.6168H24.3101C25.1285 33.6168 25.7904 32.9538 25.7904 32.1374C25.7904 31.3209 25.1285 30.657 24.3101 30.657Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_311_1225">
        <rect width="44" height="44" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const ProductsIcon = (props: IconProps) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_311_1219)">
      <path
        d="M10.493 15.5192L10.493 15.5192C9.16647 16.384 8.3754 17.8422 8.3754 19.421V21.8301H17.6874V19.4211C17.6874 17.8427 16.8963 16.3843 15.5696 15.519L10.493 15.5192ZM10.493 15.5192C10.8675 15.275 11.0935 14.858 11.0935 14.4108M10.493 15.5192L11.0935 14.4108M11.0935 14.4108V7.0799M11.0935 14.4108V7.0799M11.0935 7.0799H14.9693V14.4108C14.9693 14.8579 15.1951 15.2748 15.5696 15.5189L11.0935 7.0799ZM28.4302 15.5192L28.4303 15.5192C28.8048 15.275 29.0308 14.858 29.0308 14.4108V7.0799H32.9066V14.4108C32.9066 14.8579 33.1323 15.2747 33.5068 15.5189C34.8334 16.3844 35.6246 17.8428 35.6246 19.4211V21.8301H26.3127V19.421C26.3127 17.8421 27.1038 16.3839 28.4302 15.5192ZM42.9268 21.8301H38.2709V19.4211C38.2709 17.1943 37.2669 15.1193 35.5529 13.7384V6.81585C35.8748 6.57522 36.0847 6.1912 36.0847 5.75673C36.0847 5.48215 36.0004 5.22755 35.8576 5.01664C35.9148 4.84157 35.9457 4.65482 35.9457 4.4613V3.17178C35.9457 2.18611 35.1467 1.38715 34.161 1.38715H27.7763C26.7906 1.38715 25.9915 2.18597 25.9915 3.17178V4.46119C25.9915 4.65457 26.0223 4.8411 26.0795 5.01595C25.9363 5.22699 25.8519 5.48192 25.8519 5.75673C25.8519 6.19155 26.0621 6.57582 26.3844 6.81641V13.7382C24.6703 15.1186 23.6664 17.1936 23.6664 19.4211V21.8301H20.3335V19.4211C20.3335 17.1942 19.3295 15.1192 17.6155 13.7384V6.81585C17.9374 6.57521 18.1474 6.19111 18.1474 5.75662C18.1474 5.48205 18.0631 5.22745 17.9203 5.01655C17.9776 4.84152 18.0085 4.65477 18.0085 4.46119V3.17178C18.0085 2.1861 17.2095 1.38715 16.2237 1.38715H9.83904C8.85342 1.38715 8.0543 2.18598 8.0543 3.17178V4.46119C8.0543 4.65457 8.08514 4.8411 8.14229 5.01595C7.99911 5.22699 7.91468 5.48192 7.91468 5.75673C7.91468 6.19142 8.12476 6.57569 8.44708 6.8163V13.7382C6.73297 15.1188 5.72906 17.1937 5.72906 19.4211V21.8301H1.07317C0.342388 21.8301 -0.25 22.4225 -0.25 23.1533V41.2897C-0.25 42.0205 0.342387 42.6129 1.07317 42.6129H42.9268C43.6576 42.6129 44.25 42.0205 44.25 41.2897V23.1533C44.25 22.4225 43.6576 21.8301 42.9268 21.8301ZM41.6037 39.9666H2.39634V24.4764H41.6037V39.9666Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
      <path
        d="M25.3603 30.0105V30.0105C25.3604 30.5371 24.9317 30.9659 24.405 30.9659H19.595C19.0685 30.9659 18.6396 30.537 18.6396 30.0105C18.6396 29.484 19.0685 29.0551 19.595 29.0551H24.405C24.9315 29.0551 25.3603 29.484 25.3603 30.0105ZM24.405 26.4089H19.595C17.6087 26.4089 15.9933 28.0244 15.9933 30.0106C15.9933 31.9968 17.6088 33.6123 19.595 33.6123H24.405C26.3912 33.6123 28.0068 31.9968 28.0068 30.0106C28.0068 28.0243 26.3912 26.4089 24.405 26.4089Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </g>
    <defs>
      <clipPath id="clip0_311_1219">
        <rect width="44" height="44" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const ClockIcon = (props: IconProps) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 14.6667V22L26.5833 26.5834"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.95273 12.5961L6.57774 12.603C6.58152 13.357 7.19182 13.9673 7.94581 13.9711L7.95273 12.5961ZM12.6127 13.9945C13.372 13.9984 13.9907 13.3859 13.9945 12.6265C13.9984 11.8671 13.3859 11.2484 12.6265 11.2446L12.6127 13.9945ZM9.30426 7.92237C9.30043 7.16298 8.68175 6.55046 7.92237 6.55428C7.16298 6.55811 6.55046 7.1768 6.55429 7.93617L9.30426 7.92237ZM6.875 22C6.875 21.2406 6.25939 20.625 5.5 20.625C4.74062 20.625 4.125 21.2406 4.125 22H6.875ZM30.9384 37.4829C31.5958 37.1026 31.8204 36.2615 31.4402 35.6041C31.06 34.9468 30.2188 34.722 29.5616 35.1025L30.9384 37.4829ZM35.1025 29.5616C34.722 30.2188 34.9468 31.06 35.6041 31.4402C36.2615 31.8204 37.1026 31.5958 37.4829 30.9384L35.1025 29.5616ZM9.42394 9.29731C8.8843 9.8316 8.87995 10.7022 9.41426 11.2418C9.94855 11.7815 10.8191 11.7858 11.3588 11.2515L9.42394 9.29731ZM34.5809 9.41941C27.5772 2.41571 16.2595 2.3448 9.30215 9.30215L11.2467 11.2467C17.1117 5.38166 26.6882 5.41574 32.6365 11.364L34.5809 9.41941ZM9.30215 9.30215L6.98045 11.6238L8.925 13.5684L11.2467 11.2467L9.30215 9.30215ZM7.94581 13.9711L12.6127 13.9945L12.6265 11.2446L7.95964 11.2211L7.94581 13.9711ZM9.32771 12.5892L9.30426 7.92237L6.55429 7.93617L6.57774 12.603L9.32771 12.5892ZM22 6.875C30.3532 6.875 37.125 13.6467 37.125 22H39.875C39.875 12.1279 31.8721 4.125 22 4.125V6.875ZM22 37.125C13.6467 37.125 6.875 30.3532 6.875 22H4.125C4.125 31.8721 12.1279 39.875 22 39.875V37.125ZM29.5616 35.1025C27.3383 36.3885 24.7572 37.125 22 37.125V39.875C25.2536 39.875 28.3079 39.0045 30.9384 37.4829L29.5616 35.1025ZM37.125 22C37.125 24.7572 36.3885 27.3383 35.1025 29.5616L37.4829 30.9384C39.0045 28.3079 39.875 25.2536 39.875 22H37.125ZM11.3588 11.2515C14.093 8.54441 17.8502 6.875 22 6.875V4.125C17.0966 4.125 12.6521 6.10117 9.42394 9.29731L11.3588 11.2515Z"
      fill="white"
    />
  </svg>
);

export const LogoutIcon = (props: IconProps) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39 8.92188C39 7.61651 38.4785 6.36461 37.5502 5.44158C36.6219 4.51855 35.3628 4 34.05 4H21.95C20.6372 4 19.3781 4.51855 18.4498 5.44158C17.5215 6.36461 17 7.61651 17 8.92188V13.2969C17 13.732 17.1738 14.1493 17.4833 14.457C17.7927 14.7646 18.2124 14.9375 18.65 14.9375C19.0876 14.9375 19.5073 14.7646 19.8167 14.457C20.1262 14.1493 20.3 13.732 20.3 13.2969V8.92188C20.3 8.48675 20.4738 8.06945 20.7833 7.76178C21.0927 7.4541 21.5124 7.28125 21.95 7.28125H34.05C34.4876 7.28125 34.9073 7.4541 35.2167 7.76178C35.5262 8.06945 35.7 8.48675 35.7 8.92188V34.0781C35.7 34.5132 35.5262 34.9305 35.2167 35.2382C34.9073 35.5459 34.4876 35.7188 34.05 35.7188H21.95C21.5124 35.7188 21.0927 35.5459 20.7833 35.2382C20.4738 34.9305 20.3 34.5132 20.3 34.0781V29.7031C20.3 29.268 20.1262 28.8507 19.8167 28.543C19.5073 28.2354 19.0876 28.0625 18.65 28.0625C18.2124 28.0625 17.7927 28.2354 17.4833 28.543C17.1738 28.8507 17 29.268 17 29.7031V34.0781C17 35.3835 17.5215 36.6354 18.4498 37.5584C19.3781 38.4814 20.6372 39 21.95 39H34.05C35.3628 39 36.6219 38.4814 37.5502 37.5584C38.4785 36.6354 39 35.3835 39 34.0781V8.92188Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 21C32 20.5375 31.8298 20.0939 31.5269 19.7669C31.2239 19.4398 30.813 19.2561 30.3846 19.2561H9.82358L12.0809 17.0635C12.2435 16.9117 12.3765 16.7265 12.472 16.5186C12.5675 16.3106 12.6236 16.0842 12.637 15.8526C12.6504 15.6209 12.6209 15.3887 12.5501 15.1696C12.4793 14.9505 12.3687 14.7488 12.2247 14.5764C12.0808 14.404 11.9064 14.2643 11.7119 14.1656C11.5173 14.0669 11.3064 14.0111 11.0916 14.0015C10.8768 13.9919 10.6624 14.0287 10.4609 14.1097C10.2595 14.1907 10.075 14.3143 9.91835 14.4732L4.53363 19.7049C4.36565 19.8684 4.23135 20.0682 4.13943 20.2913C4.0475 20.5144 4 20.7558 4 21C4 21.2442 4.0475 21.4856 4.13943 21.7087C4.23135 21.9318 4.36565 22.1316 4.53363 22.2951L9.91835 27.5268C10.075 27.6857 10.2595 27.8093 10.4609 27.8903C10.6624 27.9713 10.8768 28.0081 11.0916 27.9985C11.3064 27.9889 11.5173 27.9331 11.7119 27.8344C11.9064 27.7357 12.0808 27.596 12.2247 27.4236C12.3687 27.2512 12.4793 27.0495 12.5501 26.8304C12.6209 26.6112 12.6504 26.3791 12.637 26.1474C12.6236 25.9158 12.5675 25.6894 12.472 25.4814C12.3765 25.2735 12.2435 25.0883 12.0809 24.9365L9.82358 22.7439H30.3846C30.5967 22.7439 30.8068 22.6988 31.0028 22.6111C31.1988 22.5235 31.3769 22.395 31.5269 22.2331C31.6769 22.0712 31.7959 21.8789 31.877 21.6674C31.9582 21.4558 32 21.229 32 21Z"
      fill="white"
    />
  </svg>
);

export const UserIcon = (props: IconProps) => (
  <svg
    width="16"
    height="19"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.1251 4.05444C11.1251 4.88324 10.7959 5.6781 10.2099 6.26415C9.6238 6.8502 8.82894 7.17944 8.00014 7.17944C7.17134 7.17944 6.37649 6.8502 5.79043 6.26415C5.20438 5.6781 4.87514 4.88324 4.87514 4.05444C4.87514 3.22564 5.20438 2.43079 5.79043 1.84473C6.37649 1.25868 7.17134 0.929443 8.00014 0.929443C8.82894 0.929443 9.6238 1.25868 10.2099 1.84473C10.7959 2.43079 11.1251 3.22564 11.1251 4.05444ZM1.75098 15.8194C1.77776 14.1797 2.44792 12.6162 3.61696 11.4661C4.78599 10.3161 6.36022 9.6715 8.00014 9.6715C9.64007 9.6715 11.2143 10.3161 12.3833 11.4661C13.5524 12.6162 14.2225 14.1797 14.2493 15.8194C12.2891 16.7192 10.157 17.1832 8.00014 17.1794C5.77014 17.1794 3.65348 16.6928 1.75098 15.8194Z"
      stroke="white"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const OrderIcon = (props: IconProps) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M36.906 27.0769H38.9232H42.3079C43.2424 27.0769 44.0002 26.3192 44.0002 25.3846C44.0002 24.45 43.2424 23.6923 42.3079 23.6923H40.5377C39.8185 15.7504 34.0911 9.23285 26.5469 7.33192C26.8856 6.65206 27.077 5.88671 27.077 5.07701C27.0771 2.27751 24.7997 0 22.0002 0C19.2007 0 16.9233 2.27751 16.9233 5.07692C16.9233 5.88662 17.1147 6.65198 17.4533 7.33183C9.90916 9.23276 4.1817 15.7503 3.46275 23.6922H1.69252C0.757954 23.6922 0.000244141 24.4499 0.000244141 25.3845C0.000244141 26.3191 0.757954 27.0768 1.69252 27.0768H2.77224C2.05165 28.9618 2.44843 31.1797 3.96505 32.6964L12.2396 40.9709C12.557 41.2882 12.9879 41.4667 13.4366 41.4667L31.3108 41.4669L33.3482 43.5043C33.6656 43.8217 34.096 44.0001 34.5449 44.0001C34.9937 44.0001 35.4242 43.8217 35.7415 43.5043L43.3408 35.905C44.0018 35.2441 44.0018 34.1726 43.3408 33.5117L36.906 27.0769ZM22.0002 3.38464C22.9333 3.38464 23.6925 4.14381 23.6925 5.07692C23.6925 6.01003 22.9333 6.7692 22.0002 6.7692C21.0671 6.7692 20.3079 6.01003 20.3079 5.07692C20.3079 4.14381 21.067 3.38464 22.0002 3.38464ZM22.0002 10.1538C29.8264 10.1538 36.2929 16.0876 37.1375 23.6922H7.69928C7.69774 23.6922 7.69636 23.6921 7.69482 23.6921C7.69327 23.6921 7.69189 23.6922 7.69035 23.6922H6.86294C7.70745 16.0876 14.174 10.1538 22.0002 10.1538ZM15.3274 29.14L13.2642 27.0768H15.7017C15.4603 27.6808 15.3261 28.3387 15.3261 29.0277C15.3263 29.0653 15.3267 29.1027 15.3274 29.14ZM34.5449 39.9144L33.2084 38.578C32.891 38.2607 32.4607 38.0824 32.0117 38.0824L14.1369 38.082L6.35832 30.3035C5.62149 29.5666 5.62149 28.3675 6.35823 27.6307C6.71479 27.2743 7.18847 27.0777 7.69241 27.0771H7.69705C8.20099 27.0777 8.67476 27.2743 9.03105 27.6304L15.2074 33.8069C15.5247 34.1243 15.9551 34.3026 16.404 34.3026H24.8475C25.782 34.3026 26.5398 33.5449 26.5398 32.6103C26.5398 31.6757 25.782 30.918 24.8475 30.918L20.6007 30.9179C20.0958 30.9179 19.6213 30.7214 19.2644 30.3644C18.9073 30.0074 18.7108 29.5328 18.7108 29.0281C18.7108 27.9859 19.5587 27.1381 20.6009 27.1381H32.1802L39.7508 34.7086L34.5449 39.9144Z"
      fill="white"
    />
  </svg>
);

export const CalendarIcon = (props: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.0625 13.125C9.7144 13.125 9.38056 13.2633 9.13442 13.5094C8.88828 13.7556 8.75 14.0894 8.75 14.4375C8.75 14.7856 8.88828 15.1194 9.13442 15.3656C9.38056 15.6117 9.7144 15.75 10.0625 15.75C10.4106 15.75 10.7444 15.6117 10.9906 15.3656C11.2367 15.1194 11.375 14.7856 11.375 14.4375C11.375 14.0894 11.2367 13.7556 10.9906 13.5094C10.7444 13.2633 10.4106 13.125 10.0625 13.125ZM12.6875 14.4375C12.6875 14.0894 12.8258 13.7556 13.0719 13.5094C13.3181 13.2633 13.6519 13.125 14 13.125H17.9375C18.2856 13.125 18.6194 13.2633 18.8656 13.5094C19.1117 13.7556 19.25 14.0894 19.25 14.4375C19.25 14.7856 19.1117 15.1194 18.8656 15.3656C18.6194 15.6117 18.2856 15.75 17.9375 15.75H14C13.6519 15.75 13.3181 15.6117 13.0719 15.3656C12.8258 15.1194 12.6875 14.7856 12.6875 14.4375ZM10.0625 16.625C9.7144 16.625 9.38056 16.7633 9.13442 17.0094C8.88828 17.2556 8.75 17.5894 8.75 17.9375C8.75 18.2856 8.88828 18.6194 9.13442 18.8656C9.38056 19.1117 9.7144 19.25 10.0625 19.25H14C14.3481 19.25 14.6819 19.1117 14.9281 18.8656C15.1742 18.6194 15.3125 18.2856 15.3125 17.9375C15.3125 17.5894 15.1742 17.2556 14.9281 17.0094C14.6819 16.7633 14.3481 16.625 14 16.625H10.0625Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.3125 1.75C7.9644 1.75 7.63056 1.88828 7.38442 2.13442C7.13828 2.38056 7 2.7144 7 3.0625V5.25C6.07174 5.25 5.1815 5.61875 4.52513 6.27513C3.86875 6.9315 3.5 7.82174 3.5 8.75V21C3.5 21.9283 3.86875 22.8185 4.52513 23.4749C5.1815 24.1313 6.07174 24.5 7 24.5H21C21.9283 24.5 22.8185 24.1313 23.4749 23.4749C24.1313 22.8185 24.5 21.9283 24.5 21V8.75C24.5 7.82174 24.1313 6.9315 23.4749 6.27513C22.8185 5.61875 21.9283 5.25 21 5.25V3.0625C21 2.7144 20.8617 2.38056 20.6156 2.13442C20.3694 1.88828 20.0356 1.75 19.6875 1.75C19.3394 1.75 19.0056 1.88828 18.7594 2.13442C18.5133 2.38056 18.375 2.7144 18.375 3.0625V5.25H9.625V3.0625C9.625 2.7144 9.48672 2.38056 9.24058 2.13442C8.99444 1.88828 8.6606 1.75 8.3125 1.75ZM6.125 12.25C6.125 11.7859 6.30937 11.3408 6.63756 11.0126C6.96575 10.6844 7.41087 10.5 7.875 10.5H20.125C20.5891 10.5 21.0342 10.6844 21.3624 11.0126C21.6906 11.3408 21.875 11.7859 21.875 12.25V20.125C21.875 20.5891 21.6906 21.0342 21.3624 21.3624C21.0342 21.6906 20.5891 21.875 20.125 21.875H7.875C7.41087 21.875 6.96575 21.6906 6.63756 21.3624C6.30937 21.0342 6.125 20.5891 6.125 20.125V12.25Z"
      fill="black"
    />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg
    width="24"
    height="23"
    viewBox="0 0 24 23"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.51993 0.604997C4.12895 0.240677 3.61183 0.0423387 3.0775 0.0517663C2.54317 0.0611939 2.03336 0.277651 1.65547 0.655537C1.27759 1.03342 1.06113 1.54323 1.0517 2.07756C1.04228 2.61189 1.24061 3.12902 1.60493 3.52L9.08494 11L1.60493 18.48C1.4023 18.6688 1.23976 18.8965 1.12704 19.1495C1.01431 19.4025 0.953693 19.6756 0.948807 19.9526C0.943921 20.2295 0.994864 20.5046 1.0986 20.7614C1.20233 21.0182 1.35673 21.2515 1.55258 21.4474C1.74843 21.6432 1.98172 21.7976 2.23854 21.9013C2.49536 22.0051 2.77044 22.056 3.04737 22.0511C3.3243 22.0462 3.59742 21.9856 3.85041 21.8729C4.10341 21.7602 4.33111 21.5976 4.51993 21.395L11.9999 13.915L19.4799 21.395C19.6688 21.5976 19.8965 21.7602 20.1495 21.8729C20.4025 21.9856 20.6756 22.0462 20.9525 22.0511C21.2294 22.056 21.5045 22.0051 21.7613 21.9013C22.0181 21.7976 22.2514 21.6432 22.4473 21.4474C22.6431 21.2515 22.7975 21.0182 22.9013 20.7614C23.005 20.5046 23.0559 20.2295 23.0511 19.9526C23.0462 19.6756 22.9856 19.4025 22.8728 19.1495C22.7601 18.8965 22.5976 18.6688 22.3949 18.48L14.9149 11L22.3949 3.52C22.7593 3.12902 22.9576 2.61189 22.9482 2.07756C22.9387 1.54323 22.7223 1.03342 22.3444 0.655537C21.9665 0.277651 21.4567 0.0611939 20.9224 0.0517663C20.388 0.0423387 19.8709 0.240677 19.4799 0.604997L11.9999 8.085L4.51993 0.604997Z"
      fill="black"
    />
  </svg>
);

export const TrashIcon = (props: IconProps) => (
  <svg
    width="22"
    height="26"
    viewBox="0 0 22 26"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.1967 9.49998L13.793 20M8.207 20L7.80333 9.49998M19.4327 5.75498C19.8309 5.81564 20.2283 5.8802 20.625 5.94864M19.4327 5.75498L18.1867 21.9518C18.1358 22.6112 17.8379 23.2272 17.3525 23.6764C16.8671 24.1257 16.2301 24.3752 15.5687 24.375H6.43133C5.76995 24.3752 5.13286 24.1257 4.64748 23.6764C4.16209 23.2272 3.86419 22.6112 3.81333 21.9518L2.56733 5.75498M19.4327 5.75498C18.0862 5.5513 16.7327 5.39681 15.375 5.29181M2.56733 5.75498C2.16911 5.81486 1.77167 5.87903 1.375 5.94748M2.56733 5.75498C3.91381 5.5513 5.26726 5.39681 6.625 5.29181M15.375 5.29181V4.22314C15.375 2.84648 14.3133 1.69848 12.9367 1.65531C11.6459 1.61408 10.3541 1.61408 9.06333 1.65531C7.68667 1.69848 6.625 2.84764 6.625 4.22314V5.29181M15.375 5.29181C12.4626 5.06827 9.53738 5.06827 6.625 5.29181"
      stroke="black"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);