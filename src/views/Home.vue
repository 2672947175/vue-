<template>
  <div class="home">
    <div class="denglubox">
        <div class="deng">登录</div>
        <div class="inpt">
          <form >
              <input type="text" ref="usename" name="usename" placeholder="账号" maxlength="10">
              <input type="password" ref="pass" name="pass" placeholder="密码"  maxlength="16">
               <router-link :to="shou" class="submit" tag="button" v-on:mousedown.native="btn" >
              登录
            </router-link>
          </form>
        </div>
        <!-- 提示框 -->
        <div class="tex" ref="tex"></div>
    </div>
  </div>
</template>

<script>
import {getpage} from '../api'
export default {
  name: 'home',
  components: {
   
  },
  data(){
    return {
      usename:'',
      pass:'',
      shou:'/'
    }
  },
  methods: {
     async getdelu(use,paw){
         let {msg,resa}= await getpage(use,paw)
         if(msg!=undefined){
            this.fn(msg)
            console.log(msg)
            return
         }
      if(resa!=undefined){
           this.shou=resa
      }
         
      },
    btn(){
      if(this.$refs.usename.value==""){
         this.fn('请输入账号')
        return false
      }
      if(this.$refs.pass.value==""){
         this.fn('请输入密码')
        return false
      }
      const usename = this.$refs.usename.value
      const pass = this.$refs.pass.value
      this.getdelu(usename,pass)
     
    }
  },
  mounted() {
   this.fn = (text)=>{
      const tex= this.$refs.tex
      tex.style.display = 'block'
      tex.innerHTML = text
      setTimeout(() => {
        tex.style.display = 'none'
      }, 1000);
   }
  },
}
</script>
<style lang="less">
  .denglubox{
    width: 30%;
    height: 500px;
    margin:20px auto;
    background: #c0c0c0;
    padding: 50px;
    .deng{
      width: 30%;
      height: 50px;
      line-height: 50px;
      text-align: left;
      border-bottom: 5px solid #f1f1f1;
      font-size: 20px;
      font-weight: 600;
      color:#f1f1f1;
     
    }
    .inpt{
      width: 100%;
      height: 200px;
      margin-top:80px;
      input{
        width: 80%;
        height: 40px;
        display: block;
        margin: 20px auto;
        padding: 0 20px;
      }
      .submit{
        margin-top: 50px;
        width: 60%;
        line-height: 40px;
      }

    }
  }
  .tex{
    position: fixed;
    top:0;
    width: 30%;
    height: 50px;
    left:50%;
    margin-left: -15%;
    line-height: 50px;
    background: red;
    color: #fff;
    display: none;
  }
</style>
