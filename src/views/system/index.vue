<template>
  <a-layout id="components-layout-demo-top-side-2">
    <!-- 功能栏 -->
    <div>
      <a-layout-header>
        <div class="logo">调查问卷</div>
        <a-row type="flex">
          <a-col :span="22">
            <a-row type="flex">
              <!-- 首页 -->
              <a-col :span="3">
                <div>
                  <a-button type="primary"> 首页 </a-button>
                </div>
              </a-col>
              <!-- 问卷表单 -->
              <a-col :span="3">
                <div>
                  <a-button type="primary"> 问卷表单 </a-button>
                </div>
              </a-col>
              <!-- 模板中心 -->
              <a-col :span="3">
                <div>
                  <a-button type="primary"> 模板中心 </a-button>
                </div>
              </a-col>
              <!-- 其它 -->
              <a-col :span="15">
                <div>
                  <a-button type="primary"> 表单数据 </a-button>
                </div>
              </a-col>
            </a-row>
          </a-col>
          <!-- 头像 -->
          <a-col :span="2">
            <div class="jsl-avatar">
              <a-dropdown>
                <a-menu slot="overlay" @click="handleMenuClick">
                  <a-menu-item key="1">
                    <a-icon type="user" /> 个人信息
                  </a-menu-item>
                  <a-menu-item key="2">
                    <a-icon type="user" /> 系统设置
                  </a-menu-item>
                  <a-menu-item key="3">
                    <a-icon type="user" /> 退出
                  </a-menu-item>
                </a-menu>
                <a-button style="margin-left: 8px">
                  寂纱棱 <a-icon type="user" />
                </a-button>
              </a-dropdown>
            </div>
          </a-col>
        </a-row>
      </a-layout-header>
    </div>

    <a-layout>
      <a-layout-sider width="210" style="background: #fff">
        <a-menu mode="inline" :default-selected-keys="['1']" :default-open-keys="['sub1']" :style="{ height: '100%', borderRight: 1 }" >
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="laptop" />我的表单</span>
            <a-menu-item key="1"
              ><router-link to="/system/folder">文件夹</router-link>
            </a-menu-item>
            <a-menu-item key="2"
              ><router-link to="/system/default">默认表单</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="notification" />表单发布</span>
            <a-menu-item key="3"
              ><router-link to="/system/published">已发布表单</router-link>
            </a-menu-item>
            <a-menu-item key="4"
              ><router-link to="/system/published">未发布表单</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <span slot="title"><a-icon type="notification" />回收站</span>
            <a-menu-item key="5"
              ><router-link to="/text">删除的表单</router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 1px 0px 0px 5px">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->

        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '100vh',
          }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: "System",
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    // 个人中心
    handleMenuClick(e) {
      console.log("点击个人中心", e);
    },
  },
};
</script>

<style scoped>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
.jsl-avatar {
  margin-left: 15px;
}
.ant-menu-item {
  padding-right: 100px;
  padding: 0 auto;
}

.logo {
  /* height: 32px; */
  text-align: center;
  color: springgreen;
  line-height: 32px;
}
</style>
