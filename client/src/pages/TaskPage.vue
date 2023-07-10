<template lang="">
    <div class="flex flex-col">
        <div class="flex justify-between items-center mb-6">
            <h3 class="font-bold text-lg">Manage Todo</h3>
            <div class="flex items-center">
                <select v-model="isFilterBy" class="form-select">
                    <option value="">All</option>
                    <option value="0">Open</option>
                    <option value="1">In Progress</option>
                    <option value="1">Testing</option>
                    <option value="1">Completed</option>
                </select>
                <Button
                    label="Add Todo"
                    severity="primary"
                    icon="pi pi-plus"
                    rounded
                    class="w-full ml-3"
                    @click="visibleRight = true"
                />
            </div>
        </div>

        <!-- Todo Card Section -->
        <div class="flex flex-col gap-3">
            <TaskSkeleton v-if="isLoading" />
            <TodoCard
                v-for="(item, index) in tasks"
                :key="index"
                :task="item"
                :isFilterBy="isFilterBy"
                @onEditTask="onEditTask($event, index)"
                @onDeleteTask="onDeleteTask($event, index)"
            />
        </div>
    </div>

    <!-- Todo Create -->
    <Sidebar
        v-model:visible="visibleRight"
        position="right"
        :showCloseIcon="false"
        :dismissable="false"
    >
        <h3 class="font-bold text-black text-lg mb-4">Todo Details</h3>
        <form @submit.prevent="submitTodoForm">
            <div class="mb-3">
                <label class="form-label">Title <span>*</span></label>
                <InputText
                    type="text"
                    v-model="task.title"
                    placeholder="Title"
                />
            </div>
            <div class="mb-3">
                <label class="form-label">Status</label>
                <Dropdown
                    v-model="task.status"
                    :options="statusType"
                    optionValue="code"
                    optionLabel="name"
                    placeholder="Select"
                />
            </div>
            <div class="mb-3">
                <label class="form-label">Description</label>
                <Textarea
                    v-model="task.description"
                    placeholder="Description"
                    autoResize
                    rows="5"
                    cols="30"
                />
            </div>
            <div class="flex gap-2">
                <Button
                    type="submit"
                    label="Save"
                    severity="primary"
                    icon="pi pi-save"
                />
                <Button
                    label="Cancel"
                    severity="secondary"
                    icon="pi pi-times"
                    @click="resetTodoForm()"
                />
            </div>
        </form>
    </Sidebar>

    <Toast />
    <ConfirmDialog></ConfirmDialog>
</template>
<script>
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import ConfirmDialog from "primevue/confirmdialog";
import Toast from "primevue/toast";
import Task from "../components/tasks/Task.vue";
import TodoCard from "../components/TodoCard.vue";
import TaskSkeleton from "../components/tasks/TaskSkeleton.vue";
import { useTaskStore } from "../store/task";
import { storeToRefs } from "pinia";
export default {
    name: "TaskPage",
    components: {
        Button,
        Sidebar,
        InputText,
        Textarea,
        Dropdown,
        ConfirmDialog,
        Toast,
        Task,
        TodoCard,
        TaskSkeleton,
    },
    data() {
        return {
            store: useTaskStore(),
            visibleRight: false,
            formSubmitted: false,
            isFilterBy: "",
            isLoading: false,
            isFormShow: false,
            tasks: [],
            formAction: "add",
            statusFilterType: [
                { name: "All", code: "" },
                { name: "Open", code: 0 },
                { name: "In Progress", code: 1 },
                { name: "Testing", code: 2 },
                { name: "Done", code: 3 },
            ],
            statusType: [
                { name: "Open", code: 0 },
                { name: "In Progress", code: 1 },
                { name: "Testing", code: 2 },
                { name: "Done", code: 3 },
            ],
            task: {
                id: "",
                title: "",
                status: 0,
                description: "",
            },
        };
    },
    methods: {
        showForm: function () {
            this.isFormShow = !this.isFormShow;
        },
        onLoadTasks: async function () {
            const store = useTaskStore();
            const { taskList, taskCount, loading } = storeToRefs(store);
            if (taskCount.value == 0) {
                this.isLoading = true;
                await store.fetchAllTasks();
                this.isLoading = loading.value;
            }
            this.tasks = taskList.value;
        },
        addTask: async function (task) {
            await this.store.createTask(task);
        },
        submitTodoForm: async function () {
            let message = "Task Added Successfully!";
            if (this.task.id != "") {
                await this.store.updateTask(this.task.id, this.task);
                message = "Task Updated Successfully!";
            } else {
                await this.store.createTask(this.task);
            }
            this.$toast.add({
                severity: "success",
                summary: "Success",
                detail: message,
                life: 3000,
            });
            this.resetTodoForm();
        },
        onEditTask: function (task, index) {
            this.task = task;
            this.visibleRight = true;
        },
        onDeleteTask: function (taskId, index) {
            this.$confirm.require({
                message: "Do you want to delete this record?",
                header: "Delete Confirmation",
                icon: "pi pi-info-circle",
                acceptClass: "p-button-danger",
                accept: async () => {
                    await this.store.deleteTask(index, taskId);
                    this.$toast.add({
                        severity: "success",
                        summary: "Confirmed",
                        detail: "Record deleted",
                        life: 3000,
                    });
                },
                reject: () => {
                    this.$toast.add({
                        severity: "error",
                        summary: "Rejected",
                        detail: "You have rejected",
                        life: 3000,
                    });
                },
            });
        },
        resetTodoForm: function () {
            this.task = {
                id: "",
                title: "",
                status: 0,
                description: "",
            };
            this.visibleRight = false;
        },
    },
    mounted() {
        this.onLoadTasks();
    },
};
</script>
<style></style>
