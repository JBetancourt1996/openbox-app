<template>
  <div class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 h-screen">
    <!-- header -->
    <header class="bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900">
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
          <li class="">Documentation</li>
          <li class="">Pricing & FAQ</li>
          <li class="">Sign in -></li>
        </ul>
        <div class="flex lg:hidden flex-1 justify-end">
          <div id="app">
            <nav class="main-nav">
              <Burger></Burger>
            </nav>

            <Sidebar>
              <ul class="sidebar-panel-nav">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </Sidebar>
          </div>
        </div>
      </nav>
    </header>
    <div class="flex flex-wrap lg:justify-between py-4 lg:px-18 px-4">
      <div class="bg-resd-200 lg:w-7/12 z-50">
        <div class="text-start mt-8">
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
              text-3xl
              sm:text-5xl
              sm:leading-none
              font-extrabold
              tracking-tight
              text-white
              mb-4
            "
          >
            <span class="text-blue-400">Beautiful UI components,</span>
            crafted with Tailwind CSS
          </h1>
          <div
            class="
              flex flex-wrap
              lg:space-x-16
              space-x-6
              lg:mt-8
              text-white
              font-medium
              justify-start
            "
          >
            <span class=""
              ><img
                src="../../images/html.png"
                width="32"
                height="32"
                alt=""
              />Html</span
            >

            <span class=""
              ><img
                src="../../images/main-avatar.png"
                width="32"
                height="32"
                alt=""
              />
              React</span
            >

            <span class=""
              ><img
                src="../../images/vue.png"
                width="32"
                height="32"
                alt=""
              />vue</span
            >
          </div>
          <h1
            class="text-justify text-sm text-white mt-4 leading-relaxed order-2"
          >
            Over 400+ professionally designed, fully responsive, expertly
            crafted component examples you can drop into your Tailwind projects
            and customize to your heart’s content. Get started by checking out
            our free preview components, or browsing all of the examples in the
            categories you're most curious about.
          </h1>
        </div>
      </div>
      <div class="bg-w-500 text-center lg:w-5/12 justify-center mt-8">
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
import Burger from "../../components/Menu/Burger.vue";
import Sidebar from "../../components/Menu/Sidebar.vue";
export default {
  name: "app",
  components: {
    Burger,
    Sidebar,
  },
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