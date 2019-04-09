<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
ul li{
  list-style: none;
}
a{
  text-decoration: none;
}

#app {
 
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.heder{
        width: 100%;
        height: 50px;
        background: #ccc;
        line-height: 50px;
        color: #fff;
        font-size: 20px;
        .a1{
            float: left;
            padding: 0 50px;
            i{
                font-size: 28px;
                color: #fff;
            }
        }
        .a2{
            float: right;
            padding: 0 50px;
            color: #fff;
            font-size: 20px;
            cursor: pointer;
        }
    }
</style>
