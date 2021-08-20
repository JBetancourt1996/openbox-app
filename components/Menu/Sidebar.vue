<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div
        v-if="isPanelOpen"
        class="
          sidebar-panel
          h-screen
          overflow-y-auto
          fixed
          z-999
          py-4
          px-4
          w-50
          left-0
          top-0
          bg-gradient-to-r
          from-gray-900
          via-blue-800
          to-blue-900
        "
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { store, mutations } from "../../pages/store";

export default {
  methods: {
    closeSidebarPanel: mutations.toggleNav,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
  },
};
</script>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
.sidebar-backdrop {
  background-color: rgba(19, 15, 64, 0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}
</style>
