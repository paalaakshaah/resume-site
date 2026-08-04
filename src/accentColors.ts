export type Accent = "blue" | "red" | "yellow" | "green";

export const accentMap: Record<
  Accent,
  { text: string; bg: string; border: string; ring: string; hex: string }
> = {
  blue: {
    text: "text-[#4285f4]",
    bg: "bg-[#4285f4]",
    border: "border-[#4285f4]",
    ring: "ring-[#4285f4]",
    hex: "#4285f4",
  },
  red: {
    text: "text-[#ea4335]",
    bg: "bg-[#ea4335]",
    border: "border-[#ea4335]",
    ring: "ring-[#ea4335]",
    hex: "#ea4335",
  },
  yellow: {
    text: "text-[#fbbc05]",
    bg: "bg-[#fbbc05]",
    border: "border-[#fbbc05]",
    ring: "ring-[#fbbc05]",
    hex: "#fbbc05",
  },
  green: {
    text: "text-[#34a853]",
    bg: "bg-[#34a853]",
    border: "border-[#34a853]",
    ring: "ring-[#34a853]",
    hex: "#34a853",
  },
};

export const accentOrder: Accent[] = ["blue", "red", "yellow", "green"];
