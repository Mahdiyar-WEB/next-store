import LocalFont from "next/font/local";

const vazirFont = LocalFont({
  src: [
    {
      path: "../public/fonts/vazir/Vazirmatn-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-Medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-Bold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-ExtraBold.woff2",
      style: "normal",
      weight: "800",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-Black.woff2",
      style: "normal",
      weight: "900",
    },
  ],
  variable: "--font-vazir",
  style: "normal",
  display: "block",
});

export default vazirFont;
