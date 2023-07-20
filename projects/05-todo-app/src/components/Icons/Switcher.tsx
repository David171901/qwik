import { component$ } from "@builder.io/qwik";
import { LuHome, LuClipboardList, LuPenTool, LuTrash  } from "@qwikest/icons/lucide";

interface SwitcherProps {
  code:
  | "Home"
  | "List"
  | "Pen"
  | "Trash"
  | string;
}

export const Switcher = component$<SwitcherProps>(({ code }) => {
  switch (code) {
    case "Home":
      return <LuHome />;
    case "List":
      return <LuClipboardList />;
    case "Pen":
      return <LuPenTool />;
    case "Trash":
      return <LuTrash />;
    default:
      return null;
  }
});