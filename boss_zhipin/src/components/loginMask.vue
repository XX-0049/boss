<template>
  <div class="body_styo">
    <!-- 轮播图 -->
     <van-swipe class='loginMask' 
      :show-indicators="false" 
      :autoplay="2000" 
      indicator-color="#1989fa">
      <van-swipe-item class='loginMaskImg loginBg_1'></van-swipe-item>
      <van-swipe-item class='loginMaskImg loginBg_2'></van-swipe-item>
      <van-swipe-item class='loginMaskImg loginBg_3'></van-swipe-item>
    </van-swipe>

     <!-- 我要招人、我要应聘 -->
    <van-button class='loginMaskBtn_1' color="#14c1bb">我要招人</van-button>
    <van-button 
      class='loginMaskBtn_2' 
      color="#14c1bb"
      to="/index_jobList"
      >我要应聘</van-button>
  </div>
</template>

<script>
export default {
  name: 'loginMask',
  data () {
    return {
      msg: 'boss直聘'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body_sty{position: relative;height: 100%;}
.h1_sty{
  font-size: 0.3rem;
}
.loginMask{
  position: absolute;top: 0;left: 0;z-index: 5;
  width:100%;height: 100%;
}
.loginMaskImg{width:100%;height: 100%;}

.loginBg_1{
  background-image: url('../assets/loginMask/1.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}
.loginBg_2{
  background-image: url('../assets/loginMask/2.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}
.loginBg_3{
  background-image: url('../assets/loginMask/3.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}

.loginMaskBtn_1{
  position: absolute;bottom: 1rem;left: .9rem;z-index: 6;
  height:.6rem;line-height: .6rem;padding: 0 .42rem;
}
.loginMaskBtn_2{
  position: absolute;bottom: 1rem;right: .9rem;z-index: 6;
  height:.6rem;line-height: .6rem;padding: 0 .42rem;
}
</style>
