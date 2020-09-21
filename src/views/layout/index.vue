<template>
    <div class="layout-container">
        <!-- 子路由出口 -->
        <router-view />
        <!-- 子路由出口 -->

        <!-- 底部tabBar标签栏 -->
        <van-tabbar v-model="active" route active-color="#07c160" inactive-color="#666">
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="envelop-o" to="/ask">问答</van-tabbar-item>
            <van-tabbar-item icon="video-o" to="/video" badge="99">视频</van-tabbar-item>
            <van-tabbar-item icon="user-o" to="/my">我的</van-tabbar-item>
        </van-tabbar>
        <!-- 底部tabBar标签栏 -->
    </div>
</template>

<script>
    export default {
        name: 'LayoutIndex',
        components: {},
        props: {},
        data() {
            return {
                active: 0
            }
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style scoped lang="less"></style>