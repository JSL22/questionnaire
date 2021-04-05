<template>
  <div class="container">
    <!-- 登录 -->
    <a-layout>
      <a-layout-header>
        <div>
          <a-row type="flex" justify="end">
            <div v-if="true">
              <a-space>
                <a-button @click="login">登录</a-button>
                <a-button >注册</a-button>
              </a-space>
            </div>
            <div v-else>
              <a-button>登录</a-button>
            </div>
          </a-row>
        </div>
      </a-layout-header>
      <!-- 标题 -->
      <a-layout-content class="jsl-title" :xm="10">
        <div style="padding: 20px">
          <a-row :gutter="16" type="flex" justify="center">
            <a-col :span="13">
              <a-card :bordered="true" hoverable>
                <span class="jsl-font">课程思政教学效果调查问卷</span>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </a-layout-content>
      <!-- 提示 -->
      <a-layout-footer class="jsl-tip" :xm="10">
        <div>
          <a-row type="flex" justify="end">
            <a-tooltip>
              <template slot="title"> 课程思政介绍 </template>
              <a-button type="primary" size="large" @click="tip"> 调查问卷小提示 </a-button>
            </a-tooltip>
          </a-row>
        </div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "Index",
  methods:{
    // 登录
    login(){
      this.$router.push({path:'/login'})
    },
    //课程思政提示
    tip(){
      this.$router.push({path:'/tip'})
    }
  }
};
</script>

<style>
.jsl-title {
  margin-top: 160px;
}
.jsl-font {
  font-size: 60px;
}
.jsl-tip {
  margin-top: 220px;
}
</style>