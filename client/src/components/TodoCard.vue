<template>
    <div
        class="w-full relative flex items-center justify-between px-6 py-4 bg-white shadow-sm rounded"
        v-if="isFilterBy == task.status || isFilterBy == ''"
    >
        <div class="flex gap-3 items-center">
            <Badge
                :value="onGetStatusText(task.status)"
                :severity="onGetStatusColor(task.status)"
            ></Badge>
            <h3>{{ task.title }}</h3>
        </div>
        <div class="flex gap-5">
            <button
                class="text-black hover:text-primary-600"
                size="small"
                link
                @click="onEditTask(task)"
            >
                <i class="far fa-edit"></i>
            </button>
            <button
                class="text-black hover:text-primary-600"
                size="small"
                link
                @click="onAddSub(task)"
            >
                <i class="far fa-plus"></i>
            </button>
            <button
                class="text-black hover:text-primary-600"
                size="small"
                link
                @click="onDeleteTask(task.id)"
            >
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    </div>
</template>
<script>
import Badge from "primevue/badge";
export default {
    name: "TodoCard",
    components: {
        Badge,
    },
    props: ["task", "isFilterBy"],
    data() {
        return {
            badege: { value: "Done" },
            statusType: ["Open", "In Prgress", "Testing", "Done"],
            statusTypeColor: ["", "info", "warning", "success"],
        };
    },
    methods: {
        onDeleteTask: function (taskId) {
            this.$emit("onDeleteTask", taskId);
        },
        onEditTask: function (task) {
            this.$emit("onEditTask", task);
        },
        onAddSub: function (task) {
            this.$emit("onAddSub", task);
        },
        onGetStatusText(i) {
            return this.statusType[i];
        },
        onGetStatusColor(i) {
            return this.statusTypeColor[i];
        },
    },
};
</script>
<style></style>
