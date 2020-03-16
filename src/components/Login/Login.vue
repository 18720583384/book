<template>
    <div class="login">
      <mt-header fixed title="登录界面">
        <mt-button @click="$router.back()" slot="left" icon="back"></mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <h4>阅读账号登录</h4>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">登录</mt-tab-item>
        <mt-tab-item id="2">注册</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <p style="padding-top: 20px;"><input type="text" placeholder="请输入用户名" class="loginInput" v-model="name"></p>
          <p><input type="password" class="loginInput" placeholder="请输入密码" v-model="password"></p>
          <p><input type="text" placeholder="请输入手机号" v-model="phone" class="loginInput"></p>
          <p>
            <input style="width: 40%;" type="text" placeholder="请输入验证码" v-model="yzm" class="loginInput">
            <button v-show="dis" @click="disGet">获取验证码</button>
            <button disabled v-show="!dis">获取验证码{{djs}}</button>
          </p>
          <p><input type="submit" class="subBtn" value="登录"></p>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <p style="padding-top: 20px;"><input type="text" placeholder="请输入用户名" class="loginInput" v-model="name"></p>
          <p><input type="password" class="loginInput" placeholder="请输入密码" v-model="password"></p>
          <p><input type="password" class="loginInput" placeholder="请再次输入密码" v-model="password2"></p>
          <p><input type="text" placeholder="请输入手机号" v-model="phone" class="loginInput"></p>
          <p>
            <input style="width: 40%;" type="text" placeholder="请输入验证码" v-model="yzm" class="loginInput">
            <button v-if="dis" @click="disGet">获取验证码</button>
            <button disabled v-if="!dis">获取验证码{{djs}}</button>
          </p>
          <p><input type="submit" class="subBtn" value="注册"></p>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            selected:'1',
            name:'',
            password:'',
            password2:'',
            phone:'',
            yzm:'',
            djs:'',
            dis:false
          }
        },
      watch:{
          phone:(value)=>{
            console.log(this.phone)
            if(value==''){
              this.dis=false
            }else{
              this.dis=true
            }
          }
      },
      methods:{
          disGet(){
            this.dis=false
            this.djs=29
            const ddd=setInterval(()=>{
              this.djs--
              if(this.djs==0){
                clearInterval(ddd)
                this.dis=true
              }
            },1000)
          }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.login
  font-size 0.8em
  h4
    text-align center
    padding 50px
  p
    text-align center
    .loginInput
      width 65%
      height 34px
  button
    background-color #7a99d6
    border:1px solid #7a99d6
    height 34px
    width 25%
  .subBtn
    background-color #7a99d6
    width 65%
    height 34px
    border none
</style>
