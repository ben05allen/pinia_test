import { ref } from "vue";
import { defineStore } from "pinia";
import type { Task } from "@/interfaces";

export const useTasksStore = defineStore("tasksArray", () => {
  const tasks = ref<Task[]>([]);
  function add(newText: string): void {
    if (newText.trim() !== "") {
      tasks.value.push({ text: newText.trim(), completed: false });
    }
  }
  function remove(idx: number): void {
    tasks.value.splice(idx, 1);
  }

  return { tasks, add, remove };
});
