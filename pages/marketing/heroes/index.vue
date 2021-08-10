<template>
  <div
    class="
      flex flex-col
      bg-gradient-to-r
      from-gray-900
      via-gray-800
      to-gray-900
    "
  >
    <div class="grid grid-cols-12 gap-4 h-15">
      <div class="col-span-6">
        <div class="grid grid-cols-6 mx-25">
          <div class="px-2 py-4 w-32">
            <img src="../logo-open.png" alt="" />
          </div>
          <div class="w-72 mx-12 mt-3 md:mx-15">
            <a href="#">
              <div
                class="
                  border
                  rounded-md
                  border-gray-100
                  px-3
                  py-2
                  leading-none
                  text-md text-white
                "
              >
                Emomerce components are coming
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <div class="grid grid-cols-6 py-4 px-32 justify-items-end">
          <div class="col-span-6 space-x-6">
            <span class="col-span-2 text-white hover:text-gray-400"
              >Documentation</span
            ><span class="col-span-2 text-white hover:text-gray-400"
              >Princing & FAQ</span
            ><span class="col-span-2 text-white hover:text-blue-400">Sign</span>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 h-screen">
      <div
        class="
          col-span-7
          bg-gradient-to-r
          from-gray-900
          via-gray-800
          to-gray-900
        "
      >
        <div class="grid-cols-12 gap-4 my-20 space-y-8">
          <div class="mx-25">
            <p
              class="
                text-sm
                font-semibold
                tracking-wide
                uppercase
                mb-4
                text-white
              "
            >
              By the makers of Tailwind CSS
            </p>

            <h1
              class="
                order-1
                lg:text-1xl
                text-5xl
                font-extrabold
                tracking-tight
                text-white
                mb-4
              "
            >
              <span class="text-blue-400 text-5xl"
                >Beautiful UI components,</span
              >
              crafted with Tailwind CSS
            </h1>
          </div>
          <div class="mx-25">
            <div class="grid grid-cols-6 items-center">
              <span class="col-span-1 inline-flex w-10 text-white leading-8"
                ><img src="../html.png" alt="" />Html</span
              >

              <span class="col-span-1 inline-flex w-10 text-white leading-8"
                ><img src="../oy.png" alt="" /> React</span
              >

              <span class="col-span-1 inline-flex w-10 text-white leading-8"
                ><img src="../vue.png" width="32" height="32" alt="" />vue</span
              >
            </div>
          </div>
          <div class="mx-25">
            <h1 class="text-justify text-sm text-white">
              Over 400+ professionally designed, fully responsive, expertly
              crafted component examples you can drop into your Tailwind
              projects and customize to your heart’s content. Get started by
              checking out our free preview components, or browsing all of the
              examples in the categories you're most curious about.
            </h1>
          </div>
          <div class="mx-25 inline-flex space-x-4">
            <a href="#">
              <div
                class="
                  py-3
                  px-4
                  border
                  leading-none
                  font-semibold
                  bg-white
                  hover:bg-gray-300
                  rounded-md
                "
              >
                Try out
              </div>
            </a>
            <a href="#">
              <div
                class="
                  py-3
                  px-4
                  border
                  leading-none
                  border-transparent
                  text-white
                  font-semibold
                  bg-gray-900
                  hover:bg-gray-700
                  rounded-md
                "
              >
                Browse everything
              </div>
            </a>
          </div>
        </div>
        <div class="col-span-12 z-50 absolute">
          <div class="flex justify-between px-24 text-white space-x-8">
            <div class="flex">
              <div>
                <h2 class="font-semibold text-white mb-2">400+ Examples</h2>
                <p class="leading-normal">
                  Beautifully designed, expertly crafted components that follow
                  all accessibility best practices and are easy to customize.
                </p>
              </div>
            </div>
            <div>
              <h2 class="font-semibold text-white mb-2">
                React, Vue, and HTML
              </h2>
              <p class="leading-normal">
                Accessible, interactive examples for React and Vue powered by
                Headless UI, plus vanilla HTML if you’d rather write any
                necessary JS yourself.
              </p>
            </div>
            <div>
              <h2 class="font-semibold text-white mb-2">Fully Responsive</h2>
              <p class="leading-normal">
                Every example is fully responsive and carefully designed and
                implemented to look great at any screen size.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          col-span-5
          bg-gradient-to-r
          from-gray-900
          via-gray-900
          to-gray-900
        "
      >
        <div class="mx-50 my-20">
          <img src="../main-avatar.png" class="w-100" width="100" alt="" />
        </div>
      </div>
    </div>
    <div class="bg-white w-full border-b-2 sticky top-0">
      <nav class="">
        <ul class="flex space-x-16 mx-20 py-4 leading-3 font-semibold">
          <li>Marketing</li>
          <li>Application UI</li>
          <li class="flex-none">
            Ecommerce &nbsp; &nbsp; &nbsp;
            <a href="#" class="text-sm font-bold text-green-400">
              Coming soon</a
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="w-full h-full bg-white">
      <div class="mx-20 text-2xl py-10 space-y-3">
        <h1 class="font-semibold flex">Marketing</h1>
        <h4 class="text-sm text-gray-500">
          Landing page heroes, feature sections, newsletter sign up forms —
          everything you need to build beautiful marketing websites.
        </h4>
      </div>
    </div>
    <div class="grid grid-cols-12 bg-white">
      <div class="col-span-4 bg-blue-200 h-150">
        <h3 class="mx-20 font-semibold">Page Sections</h3>
      </div>
      <div class="col-span-8 bg-purple-200">
        <div class="mx-auto">
          S
          <div class="" v-for="t in tema1" :key="t.id">
            <div class="text-blue-600">{{ t.text1 }}</div>
            <div class="w-32 h-32">{{ t.img }}</div>
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
          img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fworldvectorlogo.com%2Flogo%2Felement-ui-1&psig=AOvVaw0Z0xDEiOsk7t2wuaA1PEb7&ust=1628702016704000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCND_0_75pvICFQAAAAAdAAAAABAP",
          text: "Hero Sections",
          text1: "9 Components",
        },
      ],
    };
  },
};
</script>