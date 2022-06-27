<template>
  <div>
    <van-nav-bar title="账号登陆" left-arrow />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^(?:(?:\+|00)86)?1\d{10}$/, message: '账号格式错误' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          {
            pattern:
              /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
            message: '请输入正确密码',
          },
        ]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <div class="tz">
      <a href="#">还没有账号，去注册~</a>
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/ .van-field__control {
  height: 120px;
  font-size: 34px;
}

.van-button {
  line-height: 50px;
  background-color: #1cb676;
  font-size: 36px;
  text-align: center;
  border: none;
}
.tz {
  text-align: center;
  margin-top: 60px;
  a {
    color: #666;
    font-size: 28px;
  }
}
</style>
