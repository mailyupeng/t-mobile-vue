<template>
    <div class="login-container">
        <!-- navBar导航栏 $router.back() 回到上个页面去-->
        <van-nav-bar
            class="nav-bar"
            title="注册 / 登录"
            left-arrow
            @click-left="$router.back()"
        />
        <!-- /navBar导航栏 -->

        <!--
            基于 Vant 的表单验证：
            1、使用 van-form 组件包裹所有的表单项 van-field
            2、给 van-form 绑定 submit 事件
            当表单提交的时候会触发 submit 事件
            提示：只有表单验证通过，它才会调用 submit
            3、使用 Field 的rules属性定义校验规则
        -->
        <van-cell-group>
            <van-field
                class="login-vanField"
                v-model="userLogin.mobile"
                left-icon="phone-o"
                placeholder="请输入手机号"
            />
            <van-field
                class="login-vanField"
                v-model="userLogin.code"
                clearable
                left-icon="envelop-o"
                placeholder="请输入验证码"
            >
                <template #button>
                    <van-button class="send-btn" size="mini" round>发送验证码</van-button>
                </template>
            </van-field>
        </van-cell-group>

        <div class="login-btn-warp">
            <van-button class="login-btn" type="info" block @click="toLogin">登录</van-button>
        </div>
    </div>
</template>

<script>
    import { loginSub } from '@/api/user'
    export default {
        name: 'LoginIndex',
        data() {
            return {
                userLogin: {
                    mobile: '17090086870', // 手机号
                    code: '246810'    // 验证码
                },
            }
        },
        methods: {
            async toLogin() {
                try {
                    const res = await loginSub(this.userLogin);
                    console.log(res)
                }catch (err) {
                    console.log('登录失败:', err)
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .login-container {
        .login-vanField {
            height: 60px;
            display: flex;
            align-items: center;
        }
        .send-btn {
            width: 90px;
            height: 23px;
            background-color: #ededed;
            .van-button__text {
                font-size: 14px;
                color: #666666;
            }
        }
        .login-btn-warp {
            padding: 30px 16px;
            .login-btn {
                border-radius: 5px;
                background-color: #6db4fb;
                border: none;
                .van-button__text {
                    color: #FFFFFF;
                    font-size: 16px;
                }
            }
        }
    }
</style>