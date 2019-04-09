<template>
  <div>
    <Heder>首页</Heder>

    <div class="contaite">
      <div class="conbox">
        <div class="left">会员</div>
        <div class="right" @click="btns">+ 添加会员</div>
      </div>
      <div class="neibox">
         <!-- 添加会员弹框 -->
        <div class="ale" v-if="isShow">
          <div class="tankuan">
            <!-- 头像框 -->
            <span class="toux">
              上传头像
              <img ref="imga">
              <input type="file" ref="touxian" @change="tou($event)">
            </span>
            <!-- 姓名 -->
            <input class="inp" ref="xing" type="text" placeholder="请输入姓名">
             <!-- 年龄 -->
            <input class="inp" ref="nian" type="text" placeholder="请输入年龄">
             <!-- 手机号 -->
            <input class="inp" ref="shouji" type="text" placeholder="请输入手机号" maxlength="11">
            <!-- 积分 -->
            <input class="inp" ref="jifeng" type="number" placeholder="积分">
            <button @click="btno">取消</button>
            <button @mousedown="bao">保存</button>
            <!-- 提示框 -->
            <div class="tex" ref="tex"></div>
          </div>
        </div>
        <!-- 介绍 -->
        <div class="nei">
          <ul>
            <li>头像</li>
            <li>姓名</li>
            <li>积分</li>
            <li>操作</li>
          </ul>
        </div>
        <!-- 添加列表 -->
        <div v-if="arr!=[]?true:false">
          <div class="textbox" v-for="(item,index) in ary" :key="index">
            <ul>
              <li @click="tiao(index)" >
                <img :src="item.img" v-if="sho">
                
              </li>
              <li>{{item.xing}}</li>
              <li>{{item.ji}}</li>
              <li>
                <span v-on:mousedown.stop="xiu(index)" v-on:mouseup.stop="gai(index)">修改</span>
                <span>／</span>
                <span @click="san(index)">删除</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Heder from "../components/Heder";
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: "shou",
  components: {
    Heder
  },
  data() {
    return {
      isShow: false,
      srca: null,
      arr: [],
      sho:true,
    };
  },
  computed: {
    ...mapState(['ary']),
  },
  methods: {
    //  获取vuex 里面的state 数据
    // file 获取头像事件
    tou(e) {
      //获取文件
      var file = this.$refs.touxian.files[0];
      var imga = this.$refs.imga;
      //创建读取文件的对象
      var reader = new FileReader();

      //创建文件读取相关的变量
      var imgFile;
      //为文件读取成功设置事件
      reader.onload = function(e) {
        // console.log("文件读取完成");
        imgFile = e.target.result;
        // console.log(imgFile);
        imga.src = imgFile;
        this.srca = imgFile;
        // console.log(this.srca);
      };
      //正式读取文件
      reader.readAsDataURL(file);
    },
    btns() {
      this.isShow = true;
    },
    btno() {
      this.isShow = false;
    },
    // 添加保存事件
    bao() {
      const xing = this.$refs.xing.value;
      const jifeng = this.$refs.jifeng.value;
      const img = this.$refs.imga;
      const nian = this.$refs.nian.value;
      const shouji = this.$refs.shouji.value;
      const sr = img.src
      if(sr==""){
        this.fn("请设置头像");
        return;
      }
      if (xing == "") {
        this.fn("请输入姓名");
        return;
      }
      if(nian ==''){
        this.fn("请输入年龄");
        return;
      }
      if(shouji ==''){
        this.fn("请输入手机号");
        return;
      }
      if(shouji!=''){
        const reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
        let sji=shouji.match(reg)
        if(sji==null){
          this.fn("请输入正确手机号");
          return;
        }
        
      }
      if (jifeng == "") {
        this.fn("请输入积分");
        return;
      }
      let arys = { xing: xing, ji: jifeng, img: img.src ,nian:nian,shouji:shouji}
      //利用本地缓存来存储
  
      this.ary.unshift(arys);
      this.isShow=false
    },
    tiao(index){
         this.$store.dispatch("actionAdd",index)
        this.$router.push({path:'/xiang'})
    },
    // 修改事件
    xiu(index){
      this.isShow= true;
      // const {img,ji,xing}=this.arr[index]
      let xin = this.$refs.xing.value
      // let jifen = this.$refs.jifeng.value
      // console.log(jifen)
      // let imgs = this.$refs.imga
      // imgs.src = img
    },
    san(index){
     this.ary.splice(index,1)      
    }
  },
  mounted() {
    this.fn = text => {
      const tex = this.$refs.tex;
      tex.style.display = "block";
      tex.innerHTML = text;
      setTimeout(() => {
        tex.style.display = "none";
      }, 1000);
    };
  }
};
</script>


<style lang="less">
.contaite {
  width: 1200px;
  margin: 0 auto;
}
.conbox {
  width: 100%;
  height: 60px;
  margin: 30px 0px 10px 0;
  background: #ccc;
  color: #fff;
  font-size: 18px;
  padding: 0 50px;
  box-sizing: border-box;
  .left {
    float: left;
    line-height: 60px;
    font-size: 20px;
    font-weight: 600;
  }
  .right {
    float: right;
    cursor: pointer;
    background: #fff;
    color: #000;
    padding: 5px 20px;
    margin-top: 13px;
  }
}
.neibox {
  width: 100%;
  background: #ccc;
  padding: 15px 80px;
  box-sizing: border-box;
  position: relative;
  .nei {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #fff;
    ul {
      width: 100%;
      li {
        width: 25%;
        line-height: 60px;
        float: left;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
      }
    }
  }
  .ale {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    .tankuan {
      width: 40%;
      margin: 0 auto;
      border: 1px solid #999;
      background: #fff;
      padding: 30px 0;
      box-sizing: border-box;
      .toux {
        width: 100px;
        height: 100px;
        margin: 20px auto;
        display: block;
        line-height: 100px;
        border: 1px solid #999;
        position: relative;
        margin-bottom: 50px;
        input {
          position: absolute;
          opacity: 0;
          display: block;
          width: 100%;
          height: 100%;
          top: 0;
        }
        img {
          width: 100%;
          height: 100%;
          display: block;
          position: absolute;
          top: 0;
        }
      }
      .inp {
        line-height: 50px;
        display: block;
        width: 70%;
        line-height: 40px;
        margin: 20px auto;
        border: 1px solid #999;
        padding: 0 20px;
        box-sizing: border-box;
        outline: none;
      }
      button {
        width: 30%;
        line-height: 40px;
        margin: 30px 10px;
      }
      .tex {
        position: absolute;
        top: 0;
        width: 30%;
        height: 50px;
        left: 50%;
        margin-left: -15%;
        line-height: 50px;
        background: red;
        color: #fff;
        display: none;
      }
    }
  }
  .textbox {
    width: 100%;
    ul {
      width: 100%;
      padding: 20px 0;
      display: flex;
      li {
        flex: 1;
        color: #fff;
        line-height: 100px;
        img {
          width: 100px;
          height: 100px;
          display: block;
          margin: 0px auto;
        }
      }
    }
  }
}
</style>