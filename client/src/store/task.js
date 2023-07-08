import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import {
    allTasks,
    createTasks,
    updateTasks,
    deleteTasks,
} from "../http/task-api";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        taskList: [],
        loading: true
    }),
    getters: {
        taskCount: (state) => { return state.taskList.length }
    },
    actions: {
        async fetchAllTasks() {
            const { data } = await allTasks();
            this.taskList = data.data;
            this.loading = false;
        },

        async createTask(task) {
            const { data } = await createTasks(task);
            this.taskList.unshift(data.data);
        },

        async updateTask(id, task) {
            const { data } = await updateTasks(id, task);
            const taskIndex = this.taskList.findIndex((item => item.id == id));
            this.taskList[taskIndex] = data.data;
        },

        async deleteTask(index, id) {
            const { data } = await deleteTasks(id);
            this.taskList.splice(index, 1);
        },
    }
})
