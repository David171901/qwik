import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";
import { Link } from "@builder.io/qwik-city";

export const Navigation = component$(() => {
  useStylesScoped$(styles);
  return (
    <nav>
      <Link href="/" style={{textDecoration: "none", color: "black"}}>
        QWIK <br /> WEATHER
      </Link>
    </nav>
  );
});