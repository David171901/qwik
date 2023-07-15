import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Logo } from "~/components/icons/logo";

export default component$(() => {
  return (
    <>
      <div class="flex flex-col min-h-screen items-center justify-center text-center bg-brand p-4">
        <Logo classCustom="w-64 sm:w-[35rem]"/>
        <h1 class="text-xl my-1 font-medium">Discover some of the most amazing Quotes from The Simpsons</h1>
        <div>
          <strong>DISCLAIMER:</strong>This in an unofficial app (even though it looks so cool!)
        </div>
        <Link class="btn my-4" href="/home">
          Enter App
        </Link>
        <div class="flex gap-12">
          <img class="object-contain hidden md:block" src="./img/bart.png" alt="Bart Simpson" width={200} height={330}/>
          <img class="object-contain hidden md:block" src="./img/homer.png" alt="Homer Simpson" width={200} height={330}/>
          <img class="object-contain" src="./img/moe.png" alt="Moe" width={200} height={330}/>
        </div>
      </div>
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
