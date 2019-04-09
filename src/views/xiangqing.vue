<template>
    <div>
        <Heder>个人信息</Heder>
        <div class="boxcan">
            <div class="touxian">
                <div class="imgbox">
                    <img :src="arrac.img" alt="头像">
                    <p>{{arrac.xing}}</p>
                </div>
                
            </div>
            <ul>
                <li><span>
                    年龄
                </span>
                <span class="nei">
                    {{arrac.nian}}
                </span>
                </li>
                <li><span>
                    电话
                </span>
                <span class="nei">
                    {{arrac.shouji}}
                </span>
                </li>
                <li><span>
                    积分
                </span>
                <span class="nei">
                    {{arrac.ji}}
                </span>
                    <button @click="btn">积分兑换</button>
                </li>
            </ul>
        </div>
    </div>
   
</template>
<script>
import Heder from "../components/Heder";
import {mapState} from 'vuex'
export default {
    name:"xiang",
     components: {
        Heder
    },
    computed: {
        ...mapState(['arrac'])
    },
    methods: {
        btn(){
            this.$router.push('/duihuang')
        }
    },

}
</script>
<style lang="less">
    .boxcan{
        width: 1200px;
        background: #ccc;
        margin: 50px auto;
        .touxian{
            width: 100%;
            height: 300px;
            background: #ddd;
            position: relative;
            .imgbox{
                width: 130px;
                height: 130px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                background: #fff;
                border-radius: 50%;
                img{
                width: 100%;
                height: 100%;
                display: block;
                border-radius: 50%;
                }
                p{
                    margin-top:10px;
                    font-size: 18px;
                }
            }
            
        }
        ul{
            width: 100%;
           
            li{
                width: 100%;
                line-height: 100px;
                border-bottom: 1px solid #fff;
                padding: 0 50px;
                box-sizing: border-box;
                text-align: left;
                font-size: 18px;
                .nei{
                    padding: 0 20px;
                }
                button{
                    background: #fff;
                    float: right;
                    line-height: 50px;
                    padding: 0px 20px;
                    margin-top:25px;
                }
            }

        }
    }
</style>
