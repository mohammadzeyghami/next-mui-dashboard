import { SvgIcon } from "@mui/material";

import React from "react";
interface Iprops {
  fontSize?: number | string;
  color?: string;
}

export const HomeIcon = ({
  fontSize = 24,
  color = "#000",
  ...props
}: Iprops) => {
  return (
    <SvgIcon sx={{ color: color, width: fontSize, height: fontSize, ...props }}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 0C11.7386 1.70333e-05 11.4876 0.102375 11.3008 0.285156L0.392578 9.20703C0.379979 9.2165 0.367606 9.22627 0.355469 9.23633L0.318359 9.26758V9.26953C0.218063 9.36297 0.138047 9.47603 0.0832803 9.60169C0.028514 9.72735 0.000167074 9.86292 0 10C0 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8946 0.734784 11 1 11H2V22C2 23.105 2.895 24 4 24H20C21.105 24 22 23.105 22 22V11H23C23.2652 11 23.5196 10.8946 23.7071 10.7071C23.8946 10.5196 24 10.2652 24 10C24.0001 9.8626 23.9719 9.72664 23.9171 9.60063C23.8623 9.47461 23.7822 9.36124 23.6816 9.26758L23.666 9.25586C23.6441 9.23598 23.6213 9.21708 23.5977 9.19922L22 7.89258V4C22 3.448 21.552 3 21 3H20C19.448 3 19 3.448 19 4V5.43945L12.6777 0.267578C12.4935 0.0963261 12.2515 0.000785335 12 0ZM15 13H19V21H15V13Z"
          fill={color}
        />
      </svg>
    </SvgIcon>
  );
};

export const SearchIcon = ({
  fontSize = 24,
  color = "#000",
  ...props
}: Iprops) => {
  return (
    <SvgIcon sx={{ color: color, width: fontSize, height: fontSize, ...props }}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.99396 0C4.48629 0 0 4.48629 0 9.99396C0 15.5016 4.48629 19.9879 9.99396 19.9879C12.389 19.9879 14.5886 19.1374 16.3124 17.7256L22.2795 23.6927C22.3716 23.7886 22.4819 23.8652 22.604 23.918C22.726 23.9707 22.8574 23.9986 22.9903 23.9999C23.1233 24.0013 23.2552 23.9761 23.3783 23.9258C23.5014 23.8756 23.6132 23.8013 23.7073 23.7073C23.8013 23.6132 23.8756 23.5014 23.9258 23.3783C23.9761 23.2552 24.0013 23.1233 23.9999 22.9903C23.9986 22.8574 23.9707 22.726 23.918 22.604C23.8652 22.4819 23.7886 22.3716 23.6927 22.2795L17.7256 16.3124C19.1374 14.5886 19.9879 12.389 19.9879 9.99396C19.9879 4.48629 15.5016 0 9.99396 0ZM9.99396 1.99879C14.4214 1.99879 17.9891 5.56652 17.9891 9.99396C17.9891 14.4214 14.4214 17.9891 9.99396 17.9891C5.56652 17.9891 1.99879 14.4214 1.99879 9.99396C1.99879 5.56652 5.56652 1.99879 9.99396 1.99879Z"
            fill={color}
          />
        </svg>
      </svg>
    </SvgIcon>
  );
};

export const ContentsIcon = ({
  fontSize = 24,
  color = "#000",
  ...props
}: Iprops) => {
  return (
    <SvgIcon sx={{ color: color, width: fontSize, height: fontSize, ...props }}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.37695 0H21.0977C21.4727 0 21.8164 0.15625 22.0645 0.404297L22.0664 0.40625L22.0684 0.408203L22.0703 0.410156C22.3184 0.660156 22.4727 1.00195 22.4727 1.37695V8.2168C22.3691 8.12305 22.252 8.03906 22.125 7.9668C21.8242 7.79688 21.5273 7.70117 21.2305 7.66992V4.92383C21.1875 4.93164 21.1426 4.93555 21.0996 4.93555H1.37695C1.33203 4.93555 1.28711 4.93164 1.24609 4.92383V20.2578C1.24609 20.2949 1.25977 20.3281 1.2832 20.3516L1.28516 20.3535C1.30859 20.377 1.33984 20.3906 1.37891 20.3906H11.6211C11.6191 20.9258 11.7227 21.3398 11.9297 21.6367H1.37891C1.00391 21.6367 0.660156 21.4824 0.410156 21.2324L0.408203 21.2305L0.40625 21.2285L0.404297 21.2266C0.154297 20.9766 0 20.6348 0 20.2598V1.37305C0.00390625 0.994141 0.158203 0.650391 0.40625 0.402344C0.421875 0.386719 0.435547 0.373047 0.451172 0.359375C0.697266 0.136719 1.02148 0 1.37695 0ZM10.7637 9.33203C10.4746 9.33203 10.2402 9.07812 10.2402 8.76367C10.2402 8.44922 10.4746 8.19531 10.7637 8.19531H18.6055C18.8496 8.19531 19.0547 8.37695 19.1133 8.62305L18.4277 9.33398H10.7637V9.33203ZM10.7637 12.207C10.4746 12.207 10.2402 11.9531 10.2402 11.6387C10.2402 11.3242 10.4746 11.0703 10.7637 11.0703H16.75L15.6523 12.207H10.7637ZM17.4316 19.1211C17.0312 19.248 16.6309 19.373 16.2305 19.5C15.8301 19.627 15.4297 19.7734 15.0293 19.9004C14.0801 20.1953 13.5547 20.3848 13.4473 20.4062C13.3418 20.4277 13.4062 20.0059 13.6367 19.0781L14.3945 16.1914L14.457 16.1289L17.4316 19.1211ZM15.5547 15.0098L20.8594 9.51562C20.9863 9.41016 21.1133 9.36914 21.2598 9.45312L23.916 12.0254C24.0215 12.1523 24.043 12.2988 23.8945 12.4473L18.5273 18.0039L15.5547 15.0098ZM22.4727 16.6328V20.2617C22.4727 20.6406 22.3184 20.9844 22.0684 21.2324C21.8203 21.4805 21.4766 21.6367 21.0977 21.6367H15.5742L15.6738 21.6055L15.7715 21.5781C15.8789 21.5449 16.1348 21.457 16.3887 21.3691C16.5195 21.3242 16.6504 21.2793 16.9238 21.1934L18.0762 20.8301L18.0742 20.8262C18.3457 20.7402 18.6016 20.5957 18.8223 20.3906H21.0977C21.1328 20.3906 21.166 20.375 21.1914 20.3496C21.2148 20.3262 21.2324 20.293 21.2324 20.2559V17.918L22.4727 16.6328ZM3.81055 18.0566C3.52539 18.0566 3.29297 17.8027 3.29297 17.4883C3.29297 17.1738 3.52539 16.9199 3.81055 16.9199H12.3301L12.0312 18.0566H3.81055ZM3.60352 15.5723C3.31836 15.5723 3.08594 15.3184 3.08594 15.0039C3.08594 14.6895 3.31836 14.4355 3.60352 14.4355H13.5488C13.4395 14.5078 13.334 14.5938 13.2363 14.6914L13.2266 14.7012C12.9805 14.9316 12.7891 15.2285 12.6855 15.5723H3.60352ZM3.2207 6.74805H8.93359V12.5117H3.2207V6.74805ZM9.16797 1.77344C9.66211 1.77344 10.0605 2.17383 10.0605 2.66602C10.0605 3.1582 9.66016 3.55859 9.16797 3.55859C8.67578 3.55859 8.27539 3.1582 8.27539 2.66602C8.27539 2.17383 8.67578 1.77344 9.16797 1.77344ZM6.04688 1.77344C6.54102 1.77344 6.93945 2.17383 6.93945 2.66602C6.93945 3.1582 6.53906 3.55859 6.04688 3.55859C5.55273 3.55859 5.1543 3.1582 5.1543 2.66602C5.1543 2.17383 5.55469 1.77344 6.04688 1.77344ZM2.92773 1.77344C3.42188 1.77344 3.82031 2.17383 3.82031 2.66602C3.82031 3.1582 3.41992 3.55859 2.92773 3.55859C2.43359 3.55859 2.03516 3.1582 2.03516 2.66602C2.03516 2.17383 2.43359 1.77344 2.92773 1.77344Z"
          fill={color}
        />
      </svg>
    </SvgIcon>
  );
};

export const FilterIcon = ({
  fontSize = 24,
  color = "#000",
  ...props
}: Iprops) => {
  return (
    <SvgIcon sx={{ color: color, width: fontSize, height: fontSize, ...props }}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.50153 0.0338419C2.37966 0.0900919 2.21091 0.230717 2.14528 0.352592C2.10778 0.418217 2.08903 1.51509 2.07028 4.41197L2.05153 8.38697L1.82653 8.48072C0.926534 8.86509 0.185909 9.75572 0.035909 10.637C-0.104716 11.4901 0.167159 12.287 0.860909 12.9713C1.15153 13.262 1.31091 13.3838 1.59216 13.5245C1.78903 13.6276 1.97653 13.7026 2.01403 13.7026C2.06091 13.7026 2.07028 14.3495 2.07966 17.6963C2.08903 21.662 2.08903 21.6995 2.18278 21.812C2.35153 22.037 2.49216 22.112 2.76403 22.112C3.03591 22.112 3.17653 22.0463 3.34528 21.812C3.43903 21.6995 3.43903 21.6526 3.44841 17.6963C3.45778 14.3495 3.46716 13.7026 3.51403 13.7026C3.55153 13.7026 3.73903 13.6182 3.93591 13.5245C4.21716 13.3838 4.37653 13.262 4.66716 12.9713C5.05153 12.587 5.26716 12.2401 5.42653 11.7526C5.52966 11.462 5.53903 10.7495 5.44528 10.4307C5.22028 9.60572 4.51716 8.82759 3.69216 8.47134L3.46716 8.37759L3.44841 4.39322C3.42966 0.455717 3.42966 0.408842 3.33591 0.286967C3.28903 0.221342 3.19528 0.127592 3.13903 0.0807169C3.00778 0.00571693 2.66091 -0.0317831 2.50153 0.0338419ZM3.39216 9.80259C3.67341 9.92447 3.89841 10.1495 4.02966 10.4307C4.17028 10.7495 4.17028 11.3776 4.02966 11.6963C3.90778 11.9776 3.67341 12.2026 3.40153 12.3245C3.09216 12.4557 2.44528 12.4557 2.13591 12.3245C1.86403 12.212 1.62966 11.9776 1.50778 11.6963C1.36716 11.387 1.36716 10.7495 1.50778 10.4401C1.74216 9.92447 2.19216 9.67134 2.83903 9.69947C3.06403 9.70884 3.23278 9.73697 3.39216 9.80259Z"
          fill={color}
        />
        <path
          d="M10.6016 0.0338415C9.47662 0.268216 8.48288 1.30884 8.33288 2.39634C8.211 3.23072 8.49225 3.99947 9.15787 4.66509C9.4485 4.95572 9.60788 5.07759 9.88913 5.21822C10.086 5.32134 10.2829 5.39634 10.311 5.39634C10.3673 5.39634 10.3672 6.66197 10.3766 13.5526L10.386 21.7088L10.4798 21.8213C10.6485 22.0463 10.7891 22.1213 11.061 22.1213C11.3329 22.1213 11.4735 22.0557 11.6423 21.8213L11.736 21.7088L11.7454 13.5526C11.7548 6.66197 11.7641 5.39634 11.811 5.39634C11.8391 5.39634 12.036 5.31197 12.2329 5.21822C12.7016 4.98384 13.2547 4.44009 13.4891 3.99009C13.7516 3.48384 13.8079 3.25884 13.8079 2.75259C13.8079 2.00259 13.5641 1.44009 12.9641 0.849467C12.5798 0.465092 12.2798 0.277592 11.811 0.108842C11.5298 0.0150915 10.8923 -0.0317835 10.6016 0.0338415ZM11.6985 1.49634C11.9798 1.61822 12.2048 1.84322 12.336 2.12447C12.4766 2.44322 12.4766 3.07134 12.336 3.39009C12.2141 3.66197 11.9798 3.89634 11.6985 4.01822C11.3798 4.15884 10.7516 4.15884 10.4423 4.01822C10.1704 3.89634 9.936 3.66197 9.81412 3.38072C9.6735 3.07134 9.6735 2.43384 9.81412 2.12447C10.0485 1.60884 10.4985 1.35572 11.1454 1.38384C11.3797 1.39322 11.5485 1.43072 11.6985 1.49634Z"
          fill={color}
        />
        <path
          d="M19.0953 0.0432126C18.9359 0.118213 18.7953 0.268213 18.7296 0.427588C18.6921 0.511963 18.6828 3.01509 18.6828 8.64009C18.6828 15.5026 18.6734 16.7307 18.6265 16.7307C18.5984 16.7307 18.4015 16.8151 18.2046 16.9088C17.7265 17.1432 17.1828 17.687 16.9484 18.137C16.6859 18.6432 16.6296 18.8682 16.6296 19.3745C16.6296 20.1245 16.8734 20.687 17.4734 21.2776C18.064 21.8776 18.6265 22.1213 19.3765 22.1213C20.1265 22.1213 20.689 21.8776 21.2796 21.2776C21.8796 20.687 22.1234 20.1245 22.1234 19.3745C22.1234 18.8682 22.0671 18.6432 21.8046 18.137C21.5703 17.687 21.0171 17.1432 20.5484 16.9088C20.3515 16.8057 20.1546 16.7307 20.1265 16.7307C20.0703 16.7307 20.0703 15.4651 20.0609 8.57446L20.0515 0.418213L19.9578 0.305713C19.9109 0.240088 19.8171 0.146338 19.7609 0.0994626C19.6109 -0.0036624 19.264 -0.0317874 19.0953 0.0432126ZM20.0046 18.1088C20.2859 18.2307 20.5109 18.4557 20.6421 18.737C20.7265 18.9151 20.7453 19.0276 20.7453 19.3651C20.7453 19.7026 20.7265 19.8151 20.6421 19.9932C20.5203 20.2651 20.2859 20.4995 20.0046 20.6213C19.6953 20.762 19.0578 20.762 18.7484 20.6213C18.4765 20.4995 18.2421 20.2651 18.1203 19.9838C17.9796 19.6745 17.9796 19.037 18.1203 18.7276C18.3546 18.212 18.8046 17.9588 19.4515 17.987C19.6859 18.0151 19.8546 18.0432 20.0046 18.1088Z"
          fill={color}
        />
      </svg>
    </SvgIcon>
  );
};

export const MoonIcon = ({
  fontSize = 24,
  color = "#000",
  ...props
}: Iprops) => {
  return (
    <SvgIcon sx={{ color: color, width: fontSize, height: fontSize, ...props }}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 24C15.7013 24 19.0818 22.316 21.3214 19.5566C21.6527 19.1484 21.2915 18.5521 20.7795 18.6496C14.9574 19.7584 9.61092 15.2945 9.61092 9.41738C9.61092 6.03197 11.4232 2.91886 14.3686 1.24266C14.8227 0.984281 14.7085 0.295922 14.1926 0.200625C13.4693 0.0672624 12.7354 0.000109516 12 0C5.37614 0 0 5.3677 0 12C0 18.6239 5.3677 24 12 24Z"
          fill={color}
        />
      </svg>
    </SvgIcon>
  );
};

export const NotificationIcon = ({
  fontSize = 24,
  color = "#000",
  ...props
}: Iprops) => {
  return (
    <SvgIcon sx={{ color: color, width: fontSize, height: fontSize, ...props }}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.9952 21.375C13.453 21.375 14.2499 20.3438 14.2499 18.8906H9.73584C9.73584 20.3438 10.5327 21.375 11.9952 21.375ZM19.3124 16.5094C18.5905 15.5578 17.1702 15 17.1702 10.7391C17.1702 6.36563 15.239 4.60782 13.439 4.18594C13.2702 4.14375 13.1483 4.0875 13.1483 3.90938V3.77344C13.1483 3.14531 12.6327 2.61563 12.0046 2.62031C11.3765 2.61094 10.8608 3.14531 10.8608 3.77344V3.90938C10.8608 4.08282 10.739 4.14375 10.5702 4.18594C8.76552 4.6125 6.83896 6.36563 6.83896 10.7391C6.83896 15 5.41865 15.5531 4.69677 16.5094C4.23271 17.1234 4.67334 18 5.44209 18H18.5718C19.3358 18 19.7765 17.1188 19.3124 16.5094Z"
          fill={color}
        />
      </svg>
    </SvgIcon>
  );
};

export const SunIcon = ({
  fontSize = 24,
  color = "#000",
  ...props
}: Iprops) => {
  return (
    <SvgIcon sx={{ color: color, width: fontSize, height: fontSize, ...props }}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.9866 0.000104447C11.7598 0.00364983 11.5437 0.0970363 11.3857 0.259768C11.2276 0.4225 11.1406 0.641282 11.1437 0.868097V3.43695C11.1421 3.55042 11.1631 3.66308 11.2054 3.76837C11.2477 3.87367 11.3105 3.9695 11.3902 4.05031C11.4699 4.13112 11.5648 4.19529 11.6695 4.23908C11.7742 4.28288 11.8865 4.30543 12 4.30543C12.1135 4.30543 12.2258 4.28288 12.3305 4.23908C12.4352 4.19529 12.5301 4.13112 12.6098 4.05031C12.6895 3.9695 12.7523 3.87367 12.7946 3.76837C12.8369 3.66308 12.8579 3.55042 12.8563 3.43695V0.868097C12.8578 0.753535 12.8364 0.639823 12.7932 0.533695C12.7501 0.427566 12.686 0.33118 12.6049 0.250243C12.5239 0.169306 12.4273 0.105464 12.3211 0.0624978C12.2149 0.0195318 12.1012 -0.00168486 11.9866 0.000104447ZM4.11962 3.26469C3.94943 3.26507 3.7832 3.31615 3.64216 3.41143C3.50113 3.5067 3.39168 3.64184 3.32779 3.79959C3.2639 3.95735 3.24846 4.13056 3.28346 4.29713C3.31845 4.46369 3.40228 4.61605 3.52425 4.73476L5.34048 6.55102C5.41938 6.6332 5.51389 6.69881 5.61846 6.74401C5.72304 6.78921 5.83558 6.81308 5.9495 6.81424C6.06341 6.8154 6.17642 6.79382 6.28189 6.75075C6.38736 6.70769 6.48318 6.64402 6.56374 6.56346C6.6443 6.4829 6.70797 6.38708 6.75103 6.28161C6.79409 6.17613 6.81567 6.06313 6.81452 5.94921C6.81336 5.83529 6.78948 5.72274 6.74428 5.61817C6.69909 5.51359 6.63348 5.41908 6.5513 5.34018L4.73507 3.52392C4.65508 3.44169 4.55938 3.37637 4.45366 3.33184C4.34793 3.28731 4.23434 3.26448 4.11962 3.26469ZM19.8536 3.26469C19.6312 3.27132 19.42 3.3643 19.2649 3.52392L17.4487 5.34018C17.3665 5.41909 17.3009 5.51359 17.2557 5.61817C17.2105 5.72274 17.1866 5.83529 17.1855 5.94921C17.1843 6.06313 17.2059 6.17613 17.249 6.2816C17.292 6.38708 17.3557 6.4829 17.4363 6.56346C17.5168 6.64401 17.6126 6.70769 17.7181 6.75075C17.8236 6.79381 17.9366 6.8154 18.0505 6.81424C18.1644 6.81308 18.277 6.7892 18.3815 6.74401C18.4861 6.69881 18.5806 6.6332 18.6595 6.55102L20.4758 4.73476C20.5995 4.61448 20.684 4.45963 20.7182 4.2905C20.7524 4.12137 20.7348 3.94584 20.6675 3.78693C20.6002 3.62801 20.4866 3.49312 20.3413 3.39993C20.1961 3.30675 20.0261 3.25961 19.8536 3.26469ZM12 6.00581C10.4103 6.00581 8.88575 6.63732 7.76167 7.76141C6.6376 8.8855 6.0061 10.4101 6.0061 11.9998C6.0061 13.5895 6.6376 15.1141 7.76167 16.2382C8.88575 17.3623 10.4103 17.9938 12 17.9938C13.5897 17.9938 15.1143 17.3623 16.2383 16.2382C17.3624 15.1141 17.9939 13.5895 17.9939 11.9998C17.9939 10.4101 17.3624 8.8855 16.2383 7.76141C15.1143 6.63732 13.5897 6.00581 12 6.00581ZM0.868467 11.1435C0.755001 11.1419 0.642347 11.1629 0.537053 11.2052C0.431759 11.2475 0.335924 11.3103 0.255118 11.39C0.174312 11.4697 0.110146 11.5646 0.0663499 11.6693C0.0225535 11.774 0 11.8863 0 11.9998C0 12.1133 0.0225535 12.2256 0.0663499 12.3303C0.110146 12.435 0.174312 12.5299 0.255118 12.6096C0.335924 12.6893 0.431759 12.7521 0.537053 12.7944C0.642347 12.8367 0.755001 12.8577 0.868467 12.8561H3.43728C3.55075 12.8577 3.6634 12.8367 3.7687 12.7944C3.87399 12.7521 3.96983 12.6893 4.05063 12.6096C4.13144 12.5299 4.1956 12.435 4.2394 12.3303C4.2832 12.2256 4.30575 12.1133 4.30575 11.9998C4.30575 11.8863 4.2832 11.774 4.2394 11.6693C4.1956 11.5646 4.13144 11.4697 4.05063 11.39C3.96983 11.3103 3.87399 11.2475 3.7687 11.2052C3.6634 11.1629 3.55075 11.1419 3.43728 11.1435H0.868467ZM20.5627 11.1435C20.4493 11.1419 20.3366 11.1629 20.2313 11.2052C20.126 11.2475 20.0302 11.3103 19.9494 11.39C19.8686 11.4697 19.8044 11.5646 19.7606 11.6693C19.7168 11.774 19.6943 11.8863 19.6943 11.9998C19.6943 12.1133 19.7168 12.2256 19.7606 12.3303C19.8044 12.435 19.8686 12.5299 19.9494 12.6096C20.0302 12.6893 20.126 12.7521 20.2313 12.7944C20.3366 12.8367 20.4493 12.8577 20.5627 12.8561H23.1315C23.245 12.8577 23.3577 12.8367 23.4629 12.7944C23.5682 12.7521 23.6641 12.6893 23.7449 12.6096C23.8257 12.5299 23.8899 12.435 23.9337 12.3303C23.9774 12.2256 24 12.1133 24 11.9998C24 11.8863 23.9774 11.774 23.9337 11.6693C23.8899 11.5646 23.8257 11.4697 23.7449 11.39C23.6641 11.3103 23.5682 11.2475 23.4629 11.2052C23.3577 11.1629 23.245 11.1419 23.1315 11.1435H20.5627ZM5.92917 17.1894C5.70671 17.196 5.49557 17.289 5.34048 17.4486L3.52425 19.2649C3.44207 19.3438 3.37646 19.4383 3.33127 19.5428C3.28607 19.6474 3.26219 19.76 3.26104 19.8739C3.25988 19.9878 3.28146 20.1008 3.32452 20.2063C3.36758 20.3118 3.43126 20.4076 3.51181 20.4881C3.59237 20.5687 3.68819 20.6324 3.79366 20.6754C3.89913 20.7185 4.01214 20.7401 4.12605 20.7389C4.23997 20.7378 4.35251 20.7139 4.45709 20.6687C4.56166 20.6235 4.65617 20.5579 4.73507 20.4757L6.5513 18.6594C6.67504 18.5392 6.75955 18.3843 6.79376 18.2152C6.82798 18.046 6.8103 17.8705 6.74305 17.7116C6.6758 17.5527 6.56211 17.4178 6.41688 17.3246C6.27164 17.2314 6.10165 17.1843 5.92917 17.1894ZM18.0457 17.1894C17.8754 17.1894 17.7089 17.2403 17.5677 17.3354C17.4264 17.4305 17.3167 17.5657 17.2526 17.7235C17.1885 17.8813 17.1729 18.0547 17.2078 18.2214C17.2428 18.3881 17.3266 18.5406 17.4487 18.6594L19.2649 20.4757C19.3438 20.5579 19.4383 20.6235 19.5429 20.6687C19.6475 20.7139 19.76 20.7377 19.8739 20.7389C19.9879 20.7401 20.1009 20.7185 20.2063 20.6754C20.3118 20.6324 20.4076 20.5687 20.4882 20.4881C20.5687 20.4076 20.6324 20.3117 20.6755 20.2063C20.7185 20.1008 20.7401 19.9878 20.739 19.8739C20.7378 19.76 20.7139 19.6474 20.6687 19.5428C20.6235 19.4383 20.5579 19.3438 20.4758 19.2649L18.6595 17.4486C18.5797 17.3666 18.4843 17.3014 18.3789 17.2568C18.2735 17.2123 18.1602 17.1894 18.0457 17.1894ZM11.9866 19.6947C11.7598 19.6982 11.5437 19.7916 11.3857 19.9543C11.2276 20.1171 11.1406 20.3358 11.1437 20.5627V23.1315C11.1421 23.245 11.1631 23.3576 11.2054 23.4629C11.2477 23.5682 11.3105 23.6641 11.3902 23.7449C11.4699 23.8257 11.5648 23.8899 11.6695 23.9336C11.7742 23.9774 11.8865 24 12 24C12.1135 24 12.2258 23.9774 12.3305 23.9336C12.4352 23.8899 12.5301 23.8257 12.6098 23.7449C12.6895 23.6641 12.7523 23.5682 12.7946 23.4629C12.8369 23.3576 12.8579 23.245 12.8563 23.1315V20.5627C12.8578 20.4481 12.8364 20.3344 12.7932 20.2283C12.7501 20.1221 12.686 20.0257 12.6049 19.9448C12.5239 19.8639 12.4273 19.8 12.3211 19.7571C12.2149 19.7141 12.1012 19.6929 11.9866 19.6947Z"
          fill={color}
        />
      </svg>
    </SvgIcon>
  );
};

export const VectorIcon = ({
  fontSize = 24,
  color = "#000",
  ...props
}: Iprops) => {
  return (
    <SvgIcon
      width={fontSize}
      height={fontSize}
      sx={{ color: color, width: fontSize, height: fontSize, ...props }}
    >
      <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
        <path
          fill={color}
          d="M11.9444 11.4978C15.6875 11.4978 18.8836 12.0912 18.8836 14.4658C18.8836 16.8395 15.708 17.4545 11.9444 17.4545C8.20129 17.4545 5.00519 16.8611 5.00519 14.4875C5.00519 12.1128 8.18077 11.4978 11.9444 11.4978ZM17.9292 10.0679C19.3602 10.0413 20.8987 10.2378 21.4671 10.3773C22.6715 10.6141 23.4637 11.0975 23.7919 11.8C24.0694 12.3767 24.0694 13.0458 23.7919 13.6215C23.2899 14.7111 21.6713 15.0608 21.0422 15.1512C20.9123 15.1709 20.8078 15.0579 20.8215 14.9272C21.1429 11.9081 18.5866 10.4766 17.9253 10.1474C17.8969 10.1327 17.8911 10.1101 17.894 10.0964C17.896 10.0865 17.9077 10.0708 17.9292 10.0679ZM6.07156 10.0683C6.09305 10.0712 6.1038 10.0869 6.10575 10.0958C6.10868 10.1105 6.10282 10.1321 6.07547 10.1478C5.4132 10.477 2.8569 11.9084 3.17827 14.9266C3.19195 15.0583 3.08841 15.1703 2.95849 15.1516C2.32943 15.0612 0.710868 14.7115 0.208792 13.6219C-0.0695972 13.0452 -0.0695972 12.3771 0.208792 11.8004C0.536997 11.0979 1.32821 10.6145 2.53261 10.3768C3.10208 10.2382 4.63957 10.0417 6.07156 10.0683ZM11.9444 0C14.4929 0 16.5363 2.05338 16.5363 4.61766C16.5363 7.18095 14.4929 9.2363 11.9444 9.2363C9.39592 9.2363 7.35244 7.18095 7.35244 4.61766C7.35244 2.05338 9.39592 0 11.9444 0ZM18.1783 0.770068C20.6398 0.770068 22.5729 3.09953 21.9145 5.69426C21.4701 7.44111 19.8613 8.60142 18.0689 8.55426C17.8891 8.54935 17.7123 8.53264 17.5414 8.50317C17.4173 8.48155 17.3548 8.34106 17.4251 8.23692C18.1089 7.22496 18.4986 6.00767 18.4986 4.70097C18.4986 3.33729 18.0728 2.06596 17.3333 1.02355C17.3099 0.991126 17.2923 0.94102 17.3157 0.903685C17.3353 0.873228 17.3714 0.857509 17.4056 0.849649C17.6547 0.79856 17.9106 0.770068 18.1783 0.770068ZM5.82101 0.76997C6.08866 0.76997 6.34458 0.798462 6.59464 0.849551C6.62785 0.85741 6.66497 0.874113 6.68451 0.903587C6.70697 0.940921 6.69037 0.991028 6.66692 1.02345C5.92748 2.06586 5.5016 3.33719 5.5016 4.70087C5.5016 6.00757 5.89134 7.22486 6.57511 8.23682C6.64544 8.34096 6.58292 8.48146 6.45887 8.50307C6.28695 8.53353 6.11112 8.54925 5.93139 8.55416C4.13896 8.60132 2.53016 7.44101 2.08572 5.69416C1.42638 3.09943 3.35947 0.76997 5.82101 0.76997Z"
        />
      </svg>
    </SvgIcon>
  );
};

export const IdeaIcon = ({
  fontSize = 24,
  color = "#000",
  ...props
}: Iprops) => {
  return (
    <SvgIcon sx={{ width: fontSize, height: fontSize, ...props }}>
      <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <path
          fill={color}
          d="M3.13567 8.01407e-05C3.04317 -0.00113956 2.95136 0.0158521 2.86566 0.0500512C2.77996 0.0842503 2.70212 0.134963 2.63672 0.199194C2.50692 0.326648 2.434 0.499496 2.434 0.679723C2.434 0.85995 2.50692 1.0328 2.63672 1.16025C2.76655 1.28768 2.94262 1.35926 3.1262 1.35926C3.30979 1.35926 3.48586 1.28768 3.61569 1.16025C3.74549 1.0328 3.81841 0.85995 3.81841 0.679723C3.81841 0.499496 3.74549 0.326648 3.61569 0.199194C3.4882 0.073982 3.31598 0.00254443 3.13567 8.01407e-05ZM14.8846 8.01407e-05C14.7919 -0.00131785 14.6998 0.0155871 14.6139 0.0497913C14.5279 0.0839955 14.4499 0.134802 14.3843 0.199194C14.2545 0.326648 14.1816 0.499496 14.1816 0.679723C14.1816 0.85995 14.2545 1.0328 14.3843 1.16025C14.5141 1.28768 14.6902 1.35926 14.8738 1.35926C15.0574 1.35926 15.2335 1.28768 15.3633 1.16025C15.4931 1.0328 15.566 0.85995 15.566 0.679723C15.566 0.499496 15.4931 0.326648 15.3633 0.199194C15.2361 0.0742997 15.0645 0.00288821 14.8846 8.01407e-05ZM9 0.329282C5.55854 0.329282 2.76923 3.06756 2.76923 6.44607C2.76923 9.84428 5.53846 11.2036 6.92308 13.9221H11.0769C12.4615 11.2036 15.2308 9.84428 15.2308 6.44607C15.2308 3.06756 12.4415 0.329282 9 0.329282ZM9 2.36821V5.76643H11.7692L9 10.5239V7.12571H6.23077L9 2.36821ZM0.692308 5.76643C0.508696 5.76643 0.332605 5.83803 0.202772 5.96549C0.0729393 6.09295 0 6.26582 0 6.44607C0 6.62632 0.0729393 6.79919 0.202772 6.92665C0.332605 7.05411 0.508696 7.12571 0.692308 7.12571C0.875919 7.12571 1.05201 7.05411 1.18184 6.92665C1.31168 6.79919 1.38462 6.62632 1.38462 6.44607C1.38462 6.26582 1.31168 6.09295 1.18184 5.96549C1.05201 5.83803 0.875919 5.76643 0.692308 5.76643ZM17.3077 5.76643C17.1241 5.76643 16.948 5.83803 16.8182 5.96549C16.6883 6.09295 16.6154 6.26582 16.6154 6.44607C16.6154 6.62632 16.6883 6.79919 16.8182 6.92665C16.948 7.05411 17.1241 7.12571 17.3077 7.12571C17.4913 7.12571 17.6674 7.05411 17.7972 6.92665C17.9271 6.79919 18 6.62632 18 6.44607C18 6.26582 17.9271 6.09295 17.7972 5.96549C17.6674 5.83803 17.4913 5.76643 17.3077 5.76643ZM3.13567 11.5328C3.04294 11.5314 2.95088 11.5483 2.86493 11.5825C2.77899 11.6167 2.70092 11.6675 2.63537 11.7319C2.50557 11.8593 2.43265 12.0322 2.43265 12.2124C2.43265 12.3926 2.50557 12.5655 2.63537 12.6929C2.69968 12.7562 2.77607 12.8065 2.86018 12.8407C2.94429 12.875 3.03446 12.8926 3.12553 12.8926C3.21659 12.8926 3.30676 12.875 3.39087 12.8407C3.47498 12.8065 3.55138 12.7562 3.61569 12.6929C3.74549 12.5655 3.81841 12.3926 3.81841 12.2124C3.81841 12.0322 3.74549 11.8593 3.61569 11.7319C3.4882 11.6067 3.31598 11.5352 3.13567 11.5328ZM14.8833 11.5341C14.7909 11.5327 14.6991 11.5495 14.6134 11.5835C14.5277 11.6174 14.4498 11.6679 14.3843 11.7319C14.3198 11.795 14.2687 11.87 14.2338 11.9526C14.1989 12.0352 14.1809 12.1237 14.1809 12.2131C14.1809 12.3025 14.1989 12.391 14.2338 12.4736C14.2687 12.5561 14.3198 12.6311 14.3843 12.6943C14.5141 12.8217 14.6902 12.8933 14.8738 12.8933C15.0574 12.8933 15.2335 12.8217 15.3633 12.6943C15.4278 12.6311 15.4789 12.5561 15.5138 12.4736C15.5487 12.391 15.5667 12.3025 15.5667 12.2131C15.5667 12.1237 15.5487 12.0352 15.5138 11.9526C15.4789 11.87 15.4278 11.795 15.3633 11.7319C15.2356 11.6072 15.0634 11.5362 14.8833 11.5341ZM6.92308 15.2814V15.9611C6.92308 16.7121 7.54269 17.3204 8.30769 17.3204C8.30769 17.5006 8.38063 17.6735 8.51046 17.8009C8.6403 17.9284 8.81639 18 9 18C9.18361 18 9.3597 17.9284 9.48954 17.8009C9.61937 17.6735 9.69231 17.5006 9.69231 17.3204C10.4573 17.3204 11.0769 16.7121 11.0769 15.9611V15.2814H6.92308Z"
        />
      </svg>
    </SvgIcon>
  );
};

// export const ContentsIcon = ({
//   fontSize = 24,
//   color = "#000",
//   ...props
// }: Iprops) => {
//   return (
//     <SvgIcon sx={{ color: color, width: fontSize, height: fontSize, ...props }}>
//       <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
//         <path
//           fill-rule="evenodd"
//           clip-rule="evenodd"
//           d="M1.03271 0H15.8232C16.1045 0 16.3623 0.117187 16.5483 0.303223L16.5498 0.304688L16.5513 0.306152L16.5527 0.307617C16.7388 0.495117 16.8545 0.751465 16.8545 1.03271V6.1626C16.7769 6.09229 16.689 6.0293 16.5938 5.9751C16.3682 5.84766 16.1455 5.77588 15.9229 5.75244V3.69287C15.8906 3.69873 15.8569 3.70166 15.8247 3.70166H1.03271C0.999023 3.70166 0.965332 3.69873 0.93457 3.69287V15.1934C0.93457 15.2212 0.944824 15.2461 0.962402 15.2637L0.963867 15.2651C0.981445 15.2827 1.00488 15.293 1.03418 15.293H8.71582C8.71436 15.6943 8.79199 16.0049 8.94727 16.2275H1.03418C0.75293 16.2275 0.495117 16.1118 0.307617 15.9243L0.306152 15.9229L0.304688 15.9214L0.303223 15.9199C0.115723 15.7324 0 15.4761 0 15.1948V1.02979C0.00292969 0.745605 0.118652 0.487793 0.304688 0.301758C0.316406 0.290039 0.32666 0.279785 0.338379 0.269531C0.522949 0.102539 0.766113 0 1.03271 0ZM8.07275 6.99902C7.85596 6.99902 7.68018 6.80859 7.68018 6.57275C7.68018 6.33691 7.85596 6.14648 8.07275 6.14648H13.9541C14.1372 6.14648 14.291 6.28271 14.335 6.46729L13.8208 7.00049H8.07275V6.99902ZM8.07275 9.15527C7.85596 9.15527 7.68018 8.96484 7.68018 8.729C7.68018 8.49316 7.85596 8.30273 8.07275 8.30273H12.5625L11.7393 9.15527H8.07275ZM13.0737 14.3408C12.7734 14.436 12.4731 14.5298 12.1729 14.625C11.8726 14.7202 11.5723 14.8301 11.272 14.9253C10.5601 15.1465 10.166 15.2886 10.0854 15.3047C10.0063 15.3208 10.0547 15.0044 10.2275 14.3086L10.7959 12.1436L10.8428 12.0967L13.0737 14.3408ZM11.666 11.2573L15.6445 7.13672C15.7397 7.05762 15.835 7.02686 15.9448 7.08984L17.937 9.01904C18.0161 9.11426 18.0322 9.22412 17.9209 9.33545L13.8955 13.5029L11.666 11.2573ZM16.8545 12.4746V15.1963C16.8545 15.4805 16.7388 15.7383 16.5513 15.9243C16.3652 16.1104 16.1074 16.2275 15.8232 16.2275H11.6807L11.7554 16.2041L11.8286 16.1836C11.9092 16.1587 12.1011 16.0928 12.2915 16.0269C12.3896 15.9932 12.4878 15.9595 12.6929 15.895L13.5571 15.6226L13.5557 15.6196C13.7593 15.5552 13.9512 15.4468 14.1167 15.293H15.8232C15.8496 15.293 15.8745 15.2812 15.8936 15.2622C15.9111 15.2446 15.9243 15.2197 15.9243 15.1919V13.4385L16.8545 12.4746ZM2.85791 13.5425C2.64404 13.5425 2.46973 13.3521 2.46973 13.1162C2.46973 12.8804 2.64404 12.6899 2.85791 12.6899H9.24756L9.02344 13.5425H2.85791ZM2.70264 11.6792C2.48877 11.6792 2.31445 11.4888 2.31445 11.2529C2.31445 11.0171 2.48877 10.8267 2.70264 10.8267H10.1616C10.0796 10.8809 10.0005 10.9453 9.92725 11.0186L9.91992 11.0259C9.73535 11.1987 9.5918 11.4214 9.51416 11.6792H2.70264ZM2.41553 5.06104H6.7002V9.38379H2.41553V5.06104ZM6.87598 1.33008C7.24658 1.33008 7.54541 1.63037 7.54541 1.99951C7.54541 2.36865 7.24512 2.66895 6.87598 2.66895C6.50684 2.66895 6.20654 2.36865 6.20654 1.99951C6.20654 1.63037 6.50684 1.33008 6.87598 1.33008ZM4.53516 1.33008C4.90576 1.33008 5.20459 1.63037 5.20459 1.99951C5.20459 2.36865 4.9043 2.66895 4.53516 2.66895C4.16455 2.66895 3.86572 2.36865 3.86572 1.99951C3.86572 1.63037 4.16602 1.33008 4.53516 1.33008ZM2.1958 1.33008C2.56641 1.33008 2.86523 1.63037 2.86523 1.99951C2.86523 2.36865 2.56494 2.66895 2.1958 2.66895C1.8252 2.66895 1.52637 2.36865 1.52637 1.99951C1.52637 1.63037 1.8252 1.33008 2.1958 1.33008Z"
//           fill="#9697A2"
//         />
//       </svg>
//     </SvgIcon>
//   );
// };
