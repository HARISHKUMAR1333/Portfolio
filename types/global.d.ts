import type Lenis from "lenis";

// NOTE: the `lenis` package already augments `window.lenis` with a narrow shape
// (no `scrollTo`). We expose our own instance under a distinct property to keep
// full typing for programmatic scrolling.
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export {};
