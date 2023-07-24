<script setup lang="ts">
import { useItemsStore } from "@/stores/items";

const itemsStore = useItemsStore();
</script>

<template>
  <div class="mx-20 flex flex-col">
    <div>
      <input
        class="border-2 border-blue-500 py-2 px-2 mr-2 rounded-md"
        type="text"
        placeholder="Enter task"
      />
      <button
        class="bg-blue-500 text-white rounded-md px-5 py-2 border-2 border-blue-500 hover:bg-blue-600"
        @click="itemsStore.add"
      >
        +
      </button>
    </div>
    <div class="text-blue-400 text-xl">
      <li v-for="item in itemsStore.items">
        {{ item }}
      </li>
    </div>
  </div>
</template>
