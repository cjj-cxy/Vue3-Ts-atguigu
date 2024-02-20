<template>
  <div>
    <h1>测试axios二次封装</h1>
  </div>
</template>

<script lang="ts" setup name="">
import { onMounted } from 'vue';
import request from '@/utils/request';

onMounted(() => {
  request({
    url:'/user/login',
    method:'post',
  data:{
    username:'admin',
    password:'111111'
  }
  }).then(res => {
    console.log(res)
  })
})
</script>

<style scoped>

</style>