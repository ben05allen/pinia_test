<script setup lang="ts">
import { useTasksStore } from "@/stores/tasks";
import type { Task } from "@/interfaces";

const tasksStore = useTasksStore();

let inputText = "";

const toggleCompleted = (task: Task) => {
  task.completed = !task.completed;
};
</script>

<template>
  <div class="mx-20 flex flex-col">
    <div class="text-center mb-5">
      <input
        class="border-2 border-blue-500 py-2 px-2 mr-2 rounded-md"
        type="text"
        placeholder="Enter task"
        v-model="inputText"
      />
      <button
        class="bg-blue-500 text-white rounded-md px-4 py-2 border-2 border-blue-500 hover:bg-blue-600 active:bg-emerald-300"
        @click="tasksStore.add(inputText)"
      >
        +
      </button>
    </div>
    <div class="text-xl list-none">
      <li
        v-for="(task, idx) in tasksStore.tasks"
        :key="idx"
        :class="{ 'bg-gray-100': idx % 2 === 0, 'bg-gray-200': idx % 2 !== 0 }"
      >
        <div class="flex flex-row justify-between items-center">
          <div class="flex items-center">
            <div class="ml-2">
              <input type="checkbox" v-model="task.completed" />
            </div>
            <div
              class="mx-3"
              :class="{
                'text-blue-400': !task.completed,
                'text-gray-500 line-through': task.completed,
              }"
            >
              {{ task.text }}
            </div>
          </div>
          <div>
            <button
              class="bg-pink-400 text-white rounded-md px-2 pb-1 my-2 mx-2 border-2 border-pink-400 hover:bg-red-500 active:bg-purple-500"
              @click="tasksStore.remove(idx)"
            >
              x
            </button>
          </div>
        </div>
      </li>
    </div>
  </div>
</template>
