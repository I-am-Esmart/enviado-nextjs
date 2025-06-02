import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const libre = localFont({
  src: [
    {
      path: "/local-fonts/neue-regrade-font-family-1714257502-0/Neue-Regrade-Light-BF65af35d81e682.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/local-fonts/neue-regrade-font-family-1714257502-0/Neue-Regrade-Regular-BF65af35d81f2ff.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/local-fonts/neue-regrade-font-family-1714257502-0/Neue-Regrade-Medium-BF65af35d843ed6.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/local-fonts/neue-regrade-font-family-1714257502-0/Neue-Regrade-Bold-BF65af35d84e111.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/local-fonts/neue-regrade-font-family-1714257502-0/Neue-Regrade-Bold-Italic-BF65af35d85dafb.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "/local-fonts/neue-regrade-font-family-1714257502-0/Neue-Regrade-ExtraBold-Italic-BF65af35d8315f8.otf",
      weight: "800",
      style: "italic",
    },
  ],
});
