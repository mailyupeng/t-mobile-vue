<template>
    <view class="layout-container">
        <!-- 子路由出口 -->
        <router-view />
        <!-- 子路由出口 -->

        <!-- 底部tabBar标签栏 -->
        <view>项目的tabBar底部配置</view>
        <!-- 底部tabBar标签栏 -->

    </view>
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