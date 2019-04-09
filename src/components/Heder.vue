<template>
  <div class="heder">
    <router-link to="/shou" class="a1">
      <i class="iconfont icon-shouye"></i>
    </router-link>
    <slot></slot>
    <router-link to="/" class="a2">
      退出
    </router-link>
  </div>
</template>