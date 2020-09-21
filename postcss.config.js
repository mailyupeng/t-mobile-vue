/**
 * Create by: HZ
 * Date: 2020/9/17 17:58
 * Description: 像素转换成rem, 做移动端适配, (行内样式不会转换)
 *
 * 关于postcss配置文件
 *  1.是基于Node.js运行的一个处理Css的工具, 它的配置文件也是运行在Node中
 *  2.自动添加浏览器厂商声明前缀,用来兼容不同的浏览器
 *  3.VueCLI已经在内部默认配置了 autoprefixer
 *    browsers用来兼容到的系统(系统)环境,但是控制台写在编译器警告,因为
 *    VueCLI是通过项目中的.browserslistrc文件来配置要兼容的环境信息
 *    'Android >= 4.0', 'iOS >= 8'配置到.browserslistrc文件中
 */
module.exports = {
    plugins: {
        // 'autoprefixer': {
        //   browsers: ['Android >= 4.0', 'iOS >= 8']
        // },

        /**
         *  把PX转换成rem
         *  rootValue：转换的根元素,基准值, 按照移动端设计稿来一般都是750px / 2 = 基准值
         *  propList：用来设定可以从 px 转为 rem 的属性, 例如 * 就是所有属性都要转换，width 就是仅转换 width 属性
         * */
        'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*']
        }
    }
}
