import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AppWrapper } from "~/components/app-wrapper";
import { Navigation } from "~/components/navigation";
import { WeatherInfo } from "~/components/weather-info";

export default component$(() => {
  const city = useSignal("Granada");

  return (
    <AppWrapper>
      <Navigation />
      <h1>
        The weather in <span>{city.value}</span>
      </h1>

      <WeatherInfo city={city} />
    </AppWrapper>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
