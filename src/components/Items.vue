<script setup lang="ts">
import { useItemsStore } from "@/stores/items";

let inputText = "";
const itemsStore = useItemsStore();
</script>

<template>
  <div class="mx-20 flex flex-col">
    <div class="text-center">
      <input
        class="border-2 border-blue-500 py-2 px-2 mr-2 rounded-md"
        type="text"
        placeholder="Enter task"
        v-model="inputText"
      />
      <button
        class="bg-blue-500 text-white rounded-md px-4 py-2 border-2 border-blue-500 hover:bg-blue-600 active:bg-emerald-300"
        @click="itemsStore.add(inputText)"
      >
        +
      </button>
    </div>
    <div class="text-blue-400 text-xl list-none">
      <li v-for="item in itemsStore.items">
        <button
          class="bg-pink-400 text-white rounded-md px-2 mb-2 border-2 border-pink-400 hover:bg-red-400 active:bg-purple-500"
          @click="itemsStore.remove(item)"
        >
          x
        </button>
        {{ item }}
      </li>
    </div>
  </div>
</template>
