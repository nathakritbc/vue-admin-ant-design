import { ref, onMounted, onUnmounted } from "vue";

type Breakpoint =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "smAndDown"
  | "smAndUp"
  | "mdAndDown"
  | "mdAndUp"
  | "lgAndDown"
  | "lgAndUp"
  | "xlAndDown"
  | "xlAndUp";

export function useDisplay() {
  const breakpoint = ref<Breakpoint>("xs");

  const getBreakpoint = () => {
    const width = window.innerWidth;

    switch (true) {
      case width < 600:
        breakpoint.value = "xs";
        break;
      case width >= 600 && width < 960:
        breakpoint.value = "sm";
        break;
      case width >= 960 && width < 1280:
        breakpoint.value = "md";
        break;
      case width >= 1280 && width < 1920:
        breakpoint.value = "lg";
        break;
      case width >= 1920 && width < 2560:
        breakpoint.value = "xl";
        break;
      default:
        breakpoint.value = "xxl";
    }
  };

  onMounted(() => {
    getBreakpoint();
    window.addEventListener("resize", getBreakpoint);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", getBreakpoint);
  });

  return { breakpoint };
}
