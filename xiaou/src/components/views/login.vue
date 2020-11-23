<template>
  <div>
    <div class="container">
      <div class="header">
        <go-back></go-back>
        <div class="title">登录</div>
        <router-link to="/register" tag="div" class="more">注册</router-link>
      </div>
      <div class="login-box">
        <div class="ipt">
          <label for="">手机号：</label
          ><input type="text" v-model="userInfo.phone" @blur="regPhone" />
          <p v-show="phoneReg">* 请输入正确手机号</p>
        </div>
        <div class="ipt">
          <label for="">密码：</label
          ><input type="password" v-model="userInfo.password" @blur="regPwd" />
          <p v-show="pwdReg">* 请输入正确密码</p>
        </div>
        <div class="forget">忘记密码</div>
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>
 
<script>
import {getLogin} from '../../util/axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
      phoneReg: false,
      pwdReg: false,
      userInfo: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.userInfo.phone == "" || this.userInfo.password == "") {
        alert("请输入手机号和密码！！！");
        return;
      }
      getLogin(this.userInfo).then(res => {
        if(res.code == 200){
          Toast.success(res.msg);
          sessionStorage.setItem('user', JSON.stringify(res.list))
          this.$router.push('/mine')
        }else{
          Toast.fail(res.msg)
        }
      })
    },
    regPhone() {
      if (this.userInfo.phone == "") {
        this.phoneReg = true;
      } else {
        this.phoneReg = false;
      }
    },
    regPwd() {
      if (this.userInfo.password == "") {
        this.pwdReg = true;
      } else {
        this.pwdReg = false;
      }
    },
  },
};
</script>
 
<style scoped>
.container {
  width: 7.5rem;
  height: 9.5rem;
  margin: 0 auto;
  background-color: #fff;
  padding-bottom: 2rem;
}

.container .header {
  width: 7.5rem;
  height: 0.88rem;
  background-color: #f26c10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}

.container .header .title {
  font-size: 0.36rem;
}

.container .header .more {
  margin-right: 0.3rem;
  font-size: 0.3rem;
  color: #fff;
}

.container .login-box {
  width: 5.5rem;
  margin: 0 auto;
  padding: 1.5rem 0;
}

.container .login-box .ipt {
  font-size: 0.2rem;
  margin-top: 0.3rem;
  border-bottom: 2px solid #a3a3a3;
  padding: 0.2rem 0;
  position: relative;
}

.container .login-box .ipt input {
  width: 4rem;
  font-size: 0.2rem;
  height: 0.3rem;
  margin-top: 0.1rem;
}
.container .login-box .ipt p {
  font-size: 0.15rem;
  color: red;
  margin-left: 0.5rem;
  position: absolute;
  right: 0;
  bottom: 0.25rem;
}
.container .login-box .forget {
  text-align: right;
  font-size: 0.2rem;
  color: #666;
  margin: 0.3rem 0;
}

.container .login-box button {
  width: 100%;
  height: 0.6rem;
  background-color: #f26c10;
  color: #fff;
  font-size: 0.25rem;
  border-radius: 5px;
}
</style>