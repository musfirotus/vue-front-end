<template>
  <div>
    <button
      class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      type="button"
      style="transition: all .15s ease"
      v-on:click="toggleModal()"
    >
      Modal Product OUT
    </button>

    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <!-- a -->
      <div class="mx-auto">
        <div class="w-full max-w-xs mx-auto mt-8">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 class="text-gray-700 font-bold mt-4 mb-8 text-xl">
              Add Product OUT
            </h1>

            <!-- Product Name -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="productname"
                >Product Name</label
              >
              <div class="relative">
                <select
                  class="shadow appearance-none w-full bg-white border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Product 1</option>
                  <option>Product 2</option>
                  <option>Product 3</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Total -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="total"
                >Total</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="total"
                type="text"
              />
            </div>

            <div class="flex items-center justify-between">
              <router-link to="/dashboard" class="w-full">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Process
                </button>
              </router-link>
            </div>
            <div class="mt-4">
              <button
                class="text-blue-500 text-center font-bold"
                style="transition: all .15s ease"
                v-on:click="toggleModal()"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- b -->
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
  export default {
    name: "ProductOut",
    components: {},
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal;
      },
    },
  };
</script>
