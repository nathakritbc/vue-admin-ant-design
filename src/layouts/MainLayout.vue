<script setup lang="ts">
import { ref } from "vue";
import {
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";
const selectedKeys = ref<string[]>(["1"]);
const collapsed = ref<boolean>(false);
</script>

<template>
  <div>
    <a-layout
      :style="{
        minHeight: '100vh',
      }"
    >
      <a-layout-sider
        v-model:collapsed="collapsed"
        :trigger="null"
        collapsible
        theme="light"
        width="250"
      >
        <div
          :style="{
            height: '32px',
            // background: 'rgba(255,255,255,.2)',
            backgroundColor: '#000',
            margin: '16px',
            borderRadius: '6px',
          }"
        />
        <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
          <a-menu-item key="1" @click="$router.push({ path: '/' })">
            <user-outlined />
            <span>Main</span>
          </a-menu-item>
          <a-menu-item key="2" @click="$router.push({ path: '/users' })">
            <video-camera-outlined />
            <span>users</span>
          </a-menu-item>
          <a-menu-item key="3" @click="$router.push({ path: '/login' })">
            <upload-outlined />
            <span>Login</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding-left: 20px">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            style="font-size: 16px"
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-breadcrumb
          :style="{
            marginTop: '18px',
            marginRight: '16px',
            marginLeft: '16px',
            borderRadius: '10px',
          }"
        >
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            ><a href="">Application Center</a></a-breadcrumb-item
          >
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
            borderRadius: '10px',
          }"
        >
          <main>
            <RouterView />
          </main>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<style lang="scss" scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
