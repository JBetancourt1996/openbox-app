<template>
  <div>
    <!-- header -->
    <header class="">
      <nav
        class="
          bg-gradient-to-r
          from-purple-400
          via-pink-500
          to-red-500
          flex
          items-center
          py-4
          gap-4
        "
      >
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <div class="">
          <img src="../logo-open.png" width="100" alt="" />
        </div>
        <div
          class="
            hidden
            lg:flex
            text-white
            border border-white
            py-2
            px-2
            rounded-md
            leading-none
          "
        >
          <a href="">Tailwind UI Ecommerce is availeble now -> </a>
        </div>
        <ul class="text-white hidden md:flex flex-1 justify-end px-20 gap-4">
          Documentation
          <li></li>
          <li>Pricing & FAQ</li>
          <li>Sign in -></li>
        </ul>
        <div class="flex md:hidden flex-1 justify-end">
          <img class="w-10 h-10" src="../burger.png" alt="" />
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