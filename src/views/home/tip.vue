<template>
  <div>
    <a-carousel autoplay>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </a-carousel>

    <div>
      <a-button type="primary" @click="goBackToHome"> 返回 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tip",
  data() {
    return {
      content: "课程思政内容提示",
    };
  },
  methods: {
    //回到首页
    goBackToHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 540px;
  line-height: 160px;
  margin-top: 10px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>