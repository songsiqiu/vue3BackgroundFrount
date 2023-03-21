module.exports = {
  root: true, //esline规则对于根目录及其子目录生效
  globals: { //定义全局变量,例如vue中有不需要引入的变量,例如defineProps等,在这里定义好不会引起报错
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  extends: ['plugin:@typescript-eslint/recommended'], //使用推荐的@typescript-eslint/eslint-plugin中的规则
  plugins:['vue'], //能力来源自eslint-plugin-vue插件,可以用来校验 Vue 组件中的代码
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    semi:0,
    quotes:[2,'single'], //单引号
    'prefer-const': 2, //不变的变量使用const
    '@typescript-eslint/no-unused-vars': 0, // 允许出现未使用过的变量
    '@typescript-eslint/no-inferrable-types': 0, //  允许变量后面添加类型
    '@typescript-eslint/no-non-null-assertion': 0, // 允许使用非空断言
    'space-before-function-paren': 0, // 不允许函数的()前有空格
    'vue/no-multiple-template-root': 0, // 允许一个组件有多个根元素
    '@typescript-eslint/no-empty-function': 0, //允许出现空的函数
    '@typescript-eslint/no-explicit-any': [0], // 允许使用any
    '@typescript-eslint/no-var-requires': 0, // 项目中允许使用 require()语法。
  }
}
