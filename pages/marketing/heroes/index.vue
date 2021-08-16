<template>
  <div>
    <!-- header -->
    <header class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <nav class="flex items-center py-4 lg:mx-20 mx-5 lg:flex-wrap gap-4">
        <div class="">
          <img src="../logo-open.png" width="100" alt="" />
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
        <ul class="text-white hidden lg:flex flex-1 justify-end px-20 gap-4">
          <li class="flex-initial">Documentation</li>
          <li class="flex-initial">Pricing & FAQ</li>
          <li class="flex-initial">Sign in -></li>
        </ul>
        <div class="flex lg:hidden flex-1 justify-end">
          <img class="w-9 h-9" src="../burger.png" alt="" />
        </div>
      </nav>
    </header>
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