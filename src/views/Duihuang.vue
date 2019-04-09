<template>
    <div>
        <Heder>积分兑换</Heder>
        <div class="boxcant">
            <div class="tan" v-if='tank'>
                <div class="boxca">
                    {{tanshu}}
                    <button @click="que()">确定</button>
                </div>
                
            </div>
            <div class="jife">
                你的积分：{{arrac.ji}}
            </div>
            <div class="boxa" v-for="(item,index) in arr" :key="item.id">
                <div class="imgbox">
                    <img :src="item.img" alt="">
                </div>
                <div class="textbox">
                    <p class="name">{{item.name}}</p>
                    <p class="ji">所需积分：<span>{{item.jifeng}}</span></p>
                    <button @click="btnd(index)">立即兑换</button>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import Heder from "../components/Heder";
import {mapState} from "vuex";
import { getdui } from "../api";
export default {
    name:"duihuang",
    data(){
        return {
            arr:null,
            tank:false,
        }
    },
    components:{
        Heder
    },
    computed: {
        ...mapState(['arrac']),
        ...mapState(['tanshu'])
    },
    methods: {
        async getduihuang(){
           let ap= await getdui()
            this.arr=ap.data
        },
        btnd(index){
            let {jifeng} = this.arr[index]
             this.tank=true
            this.$store.dispatch("actionXiu",jifeng)
            

        },
        que(){
            this.tank=false
        }
    },
    created() {
        this.getduihuang()
    },
}
</script>
<style lang="less" scoped>
.boxcant{
    width: 1200px;
    margin: 0px auto;
    padding:  50px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap ;
    position: relative;
    .jife{
        width: 100%;
        line-height: 40px;
        background: #ccc;
        text-align: left;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .tan{
        width: 100%;
        height: 100%;
        background: rgba(#fff, #fff,#fff, 0.5);
        position: absolute;
        top:0;
        .boxca{
            width: 300px;
            height: 300px;
            background: #fff;
            border: 1px solid #ccc;
            position: absolute;
            top:50%;
            left:50%;
            margin-top:-300px;
            margin-left:-300px;
            font-size: 22px;
            font-weight: 600;
            color: red;
            line-height: 240px;
            button{
                display: block;
                padding: 10px 60px;
                margin: 0 auto;
            }
        }
    }
    .boxa{
        width: 50%;
        height: 300px;
        // border: 1px solid red;
        padding: 65px 20px;
        box-sizing: border-box;
        display: flex;
        .imgbox{
            width: 35%;
            height: 100%;
            border: 1px solid #000;
            img{
                width: 100%;
                height: 100%;
                display: block;
            }
        }
        .textbox{
            width: 58%;
            height: 100%;
            // background: pink;
            margin-left: 2%;
            text-align: left;
            .name{
                font-size: 30px;
                font-weight: 500;
                line-height: 60px;
            }
            .ji{
                line-height: 60px;
            }
            button{
                padding: 10px 10px;
            }
        }
    }

}
</style>

