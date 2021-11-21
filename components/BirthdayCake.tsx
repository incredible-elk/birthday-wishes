export function BirthdayCake() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient id="a">
          <stop offset="0" stopColor="#d77461" stopOpacity="0.992"></stop>
          <stop offset="1" stopColor="#801805"></stop>
        </linearGradient>
        <linearGradient
          id="b"
          x1="253"
          x2="253"
          y1="212.1"
          y2="340.2"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#a"
        ></linearGradient>
      </defs>
      <path
        fill="#459492"
        d="M256 85.9a8.4 8.4 0 00-8.4 8.4v45h16.8v-45c0-4.7-3.7-8.4-8.4-8.4z"
      ></path>
      {/*wick*/}
      <path
        fill="#ffd102"
        d="M211 60.8c0-24 18.5-49.2 45-60.8 26.5 11.6 45 36.8 45 60.8a45 45 0 01-90 0z"
      ></path>
      {/*yellow flame*/}
      <path
        fill="#f95"
        d="M228.9 77.7C228.9 63.2 240 48 256 41c16 7 27.1 22.2 27.1 36.7a27.1 27.1 0 01-54.2 0z"
      ></path>
      {/*orange flame*/}
      <path
        fill="#9ad6d4"
        d="M267.3 128h-22.6c-6.1 0-11.2 5.1-11.2 11.3v96.4h45v-96.4c0-6.2-5-11.2-11.2-11.2z"
      ></path>
      <path
        fill="#ad4a38"
        d="M86.6 474.1h331.6c24.7 0 45-20.2 45-45V303.3c-145.5-.5-294.6-1.5-421.6 0V429c0 24.8 20.2 45 45 45z"
      ></path>
      {/*cake face*/}
      <ellipse
        cx="127.2"
        cy="428.6"
        fill="#de8787"
        rx="18.6"
        ry="12.5"
      ></ellipse>
      <path
        fill="url(#b)"
        d="M426.3 212.7H78.4c-26 0-47.2 24.6-47.2 54.7V298c0 23.2 34 47.6 73.7 47.9 39.8.2 25.2-36.6 73.8-37.5 48.5-.9 36.8 36 73.7 36 36.8 0 36.8-36 73.7-36 36.9 0 36.9 36 73.7 36 36.9 0 73.8-22.3 73.8-46.4v-30.6c0-30-21.3-54.7-47.3-54.7z"
      ></path>
      <g transform="translate(-22.1 -2.5)">
        <circle cx="178.8" cy="392.9" r="38.9" fill="#fff"></circle>
        <circle cx="178.8" cy="392.9" r="25"></circle>
      </g>
      <ellipse
        cx="-377.6"
        cy="428.6"
        fill="#de8787"
        rx="18.6"
        ry="12.5"
        transform="scale(-1 1)"
      ></ellipse>
      <g transform="matrix(-1 0 0 1 526.9 -2.5)">
        <circle cx="178.8" cy="392.9" r="38.9" fill="#fff"></circle>
        <circle cx="178.8" cy="392.9" r="25"></circle>
      </g>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="5"
        d="M227.4 429.3c16.2 14.2 34.2 14.6 50.4-1.8"
      ></path>
      <rect
        width="16"
        height="28.5"
        x="432.6"
        y="343.1"
        fill="#f4d7d7"
        ry="8"
      ></rect>
      <rect
        width="16"
        height="20.9"
        x="432.6"
        y="379.1"
        fill="#f4d7d7"
        ry="8"
      ></rect>
    </svg>
  );
}
