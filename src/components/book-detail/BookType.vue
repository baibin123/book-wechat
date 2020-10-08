<template>
    <div class="btn-container">
        <button :class="index === 0 ? 'btn' : 'btn m-l-5'" v-for="(t, index) in data" :key="t">{{t | category}}</button>
    </div>
</template>

<script>
    export default {
        name: "BookType",
        data: function () {
            return {
                data: ['1', '2', '3'],
            }
        }
    }
</script>

<style scoped>
    .btn {
        background: none;
        border: 1px solid white;
        color: white;
        height: 20px;
        border-radius: 10px;
        font-size: 12px;
    }
</style>
