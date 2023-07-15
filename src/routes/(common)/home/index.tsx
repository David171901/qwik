import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import PageWrapper from "~/components/page-wrapper";

export default component$(() => {
  return (
    <>
      <PageWrapper>
        <div class="flex flex-col min-h-screen items-center justify-center text-center bg-brand p-4">
          <h2>Home</h2>
        </div>
      </PageWrapper>
    </>
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