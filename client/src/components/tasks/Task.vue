<template>
    <div
        class="card mb-2 app-task-card"
        :class="{ completed: task.status == 3 }"
        v-if="isFilterBy == task.status || isFilterBy == ''"
    >
        <div
            class="card-body d-flex justify-content-between align-content-center"
        >
            <div class="app-task-card-title">
                <div class="app-task-card-text" value="">{{ task.title }}</div>
            </div>
            <div>
                <button class="btn btn-sm btn-success mx-2">
                    <i class="far fa-edit" @click="onEditTask(task)"></i>
                </button>
                <button
                    class="btn btn-sm btn-danger"
                    @click="onDelete(task.id)"
                >
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Task",
    props: ["task", "isFilterBy"],
    methods: {
        onEditTask: function (task) {
            this.$emit("onEditTask", task);
        },
        onDelete: function (taskId) {
            this.$emit("onDeleteTask", taskId);
        },
    },
};
</script>
<style lang=""></style>
