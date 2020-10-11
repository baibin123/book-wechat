<template>
    <div class="full-width">
        <iframe class="full-width" :src="web_src" frameborder="0"></iframe>
    </div>
</template>

<script>
    import { tranformGetParmas } from "../util/common";

    export default {
        name: "BookWeb",
        data() {
            return {
                web_src: null,
            }
        },

        created: function() {
            const open_id = localStorage.getItem('openId');
            const user_id = localStorage.getItem('userId');
            const id = this.$route.query.id;
            const params = {
                m: '',
                c:'Book',
                a: 'bookinfo',
                bid: id,
                parent: user_id,
                open_id: open_id
            };
            this.web_src=`http://book.truckloud.com/index.php${tranformGetParmas(params)}`;
        },
        methods: {
            goBack: function () {
                this.$router.go(-1);
            },
        }
    }
</script>

<style scoped>

</style>
