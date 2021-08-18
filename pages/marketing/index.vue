<template>
  <div class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 h-screen">
    <!-- header -->
    <header class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <nav class="flex items-center py-2 lg:mx-20 mx-5 lg:flex-wrap gap-4">
        <div class="">
          <img src="../../images/logo-open.png" width="100" alt="" />
        </div>
        <div
          class="
            hidden
            lg:flex
            flex-wrap
            text-white
            border border-white
            py-1
            px-2
            rounded-md
            leading-none
          "
        >
          <a href="">Tailwind UI Ecommerce is availeble now -> </a>
        </div>
        <ul class="text-white hidden lg:flex flex-1 justify-end gap-4">
          <li class="flex-initial">Documentation</li>
          <li class="flex-initial">Pricing & FAQ</li>
          <li class="flex-initial">Sign in -></li>
        </ul>
        <div class="flex lg:hidden flex-1 justify-end">
          <img class="w-9 h-9" src="../../images/burger.png" alt="" />
        </div>
      </nav>
    </header>
    <div class="lg:flex flex-wrap lg:justify-between flex-row py-4 lg:px-18">
      <div class="bg-resd-200 lg:w-5/12 lg:flex">
        <div class="text-center lg:text-justify">
          <p
            class="
              lg:text-
              text-white text-xs
              font-semibold
              tracking-wide
              uppercase
              mb-4
              text-whit
            "
          >
            By the makers of Tailwind CSS
          </p>
          <h1
            class="
              order-1
              lg:text-5xl
              font-extrabold
              tracking-tight
              text-white
              mb-4
            "
          >
            <span class="text-blue-400 lg:text-5xl"
              >Beautiful UI components,</span
            >
            crafted with Tailwind CSS
          </h1>
        </div>
      </div>
      <div class="bg-w-500 text-center lg:w-5/12 justify-center relative">
        <div class="flex-wrap">
          <div class="h-32 w-32 mx-auto">
            <img src="../../images/main-avatar.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tema1: [
        {
          id: 1,
          text: "Hero Sections",
          text1: "9 Components",
        },
      ],
    };
  },
};
</script>