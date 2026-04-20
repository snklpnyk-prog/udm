/// <reference types="vite/client" />

import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          icon?: string;
          width?: string | number;
          height?: string | number;
          flip?: string;
          rotate?: string | number;
          inline?: boolean;
          mode?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
