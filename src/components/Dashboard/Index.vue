<template>
  <div class="flex w-full">
    <div class="w-1/4 h-screen">
      <Sidebar />
    </div>
    <div class="w-3/4 h-screen border border-black">
      <Detail />
    </div>
    <!-- <h1 class="mb-6">Dashboard nya belum rapih</h1>
    <product-all />
    <product-in />
    <product-out />

    <sign-out class="mt-8" /> -->
  </div>
</template>

<script>
  // import SignOut from "@/components/Button/SignOut.vue";
  // import ProductAll from "@/components/Modal/ProductAll.vue";
  // import ProductIn from "@/components/Modal/ProductIn.vue";
  // import ProductOut from "@/components/Modal/ProductOut.vue";
  import Detail from './Detail'
  import Sidebar from '../Sidebar/SidebarDash'

  export default {
    name: "Dashboard",
    components: {
      // SignOut,
      // ProductAll,
      // ProductIn,
      // ProductOut,
      Detail,
      Sidebar
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>
