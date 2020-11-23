<template>
  <div>
    <div class="container">
      <div class="header">
        <go-back></go-back>
        <div class="title">注册</div>
        <router-link to="/login" tag="div" class="more">登录</router-link>
      </div>
      <div class="login-box">
        <div class="ipt">
          <label for="">昵称：</label
          ><input type="text" v-model="userInfo.nickname" @blur="nameReg" />
          <p v-show="nickNameReg">* 请输入正确昵称</p>
        </div>
        <div class="ipt">
          <label for="">手机号：</label
          ><input type="text" v-model="userInfo.phone" @blur="regPhone" />
          <p v-show="phoneReg">* 请输入正确手机号</p>
        </div>
        <div class="ipt">
          <label for="">密码：</label
          ><input type="text" v-model="userInfo.password" @blur="regPwd" />
          <p v-show="pwdReg">* 请输入正确密码</p>
        </div>
        <div class="ipt">
          <label for="">验证码：</label
          ><input type="text" v-model="userInfo.code" @blur="regCode" />
          <button class="yzm" @click="getCode">{{ msg }}</button>
          <p v-show="codeReg">* 请输入正确的验证码</p>
        </div>
        <button @click="register">下一步</button>
        <div class="agree">
          <input
            type="checkbox"
            v-model="userInfo.isAgree"
          />我已阅读并同意使用条款和隐私政策
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import {getRegister} from '../../util/axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
      msg: "获取验证码",
      num: 60,
      nickNameReg: false,
      phoneReg: false,
      pwdReg: false,
      codeReg: false,
      userInfo: {
        nickname: "",
        phone: "",
        password: "",
        code: "",
        isAgree: true,
      },
      infoList: JSON.parse(localStorage.getItem("userInfo"))
        ? JSON.parse(localStorage.getItem("userInfo"))
        : [],
    };
  },
  methods: {
    nameReg() {
      if (this.userInfo.nickname == "") {
        this.nickNameReg = true;
      } else {
        this.nickNameReg = false;
      }
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
    regCode() {
      if (this.userInfo.code == "") {
        this.codeReg = true;
      } else {
        this.codeReg = false;
      }
    },

    register() {
      if (!this.userInfo.isAgree) {
        alert("请勾选同意本协议");
        return;
      }
      if (
        this.userInfo.nickName == "" ||
        this.userInfo.phone == "" ||
        this.userInfo.password == "" ||
        this.userInfo.code == ""
      ) {
        alert("请输入完整信息！！！");
        return;
      }
      getRegister(this.userInfo).then(res => {
        if(res.code == 200){
          Toast.success(res.msg);
          this.$router.push('/login')
        }else{
          Toast.fail(res.msg)
        }
      })
    },
    getCode() {
      let timer = setInterval(() => {
        if (vm.num <= 1) {
          clearInterval();
          vm.msg = "获取验证码";
        } else {
          vm.num--;
          vm.msg = `重新发送(${vm.num})`;
        }
      }, 1000);
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
.container .login-box .ipt p {
  font-size: 0.15rem;
  color: red;
  margin-left: 0.5rem;
  position: absolute;
  right: 0;
  bottom: 0.25rem;
}
.container .login-box .ipt:nth-child(4) p {
  right: 2rem;
}
.container .login-box .ipt input {
  width: 4rem;
  font-size: 0.2rem;
  height: 0.3rem;
}

.container .login-box .forget {
  text-align: right;
  font-size: 0.2rem;
  color: #666;
  margin: 0.3rem 0;
}

.container .login-box button {
  width: 100%;
  height: 0.8rem;
  background-color: #f26c10;
  color: #fff;
  font-size: 0.3rem;
  border-radius: 5px;
  margin: 0.2rem 0;
}

.container .login-box .yzm {
  width: 2rem;
  height: 0.6rem;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.3rem;
  color: #555;
  background-color: #fff;
  margin: 0
}

.container .login-box .agree {
  font-size: 0.15rem;
  margin: 0.15rem 0;
  color: #666;
}
</style>