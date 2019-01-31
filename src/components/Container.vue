<style scoped>

</style>

<template>
  <div class="layout">



      <div style="display: inline-block">
        <Menu mode="horizontal" theme="light" width="auto" :active-name="activeMenu"
              @on-select="onSelectMenuChange">

          <MenuItem name="services" to="/services">Janus Apis</MenuItem>
          <MenuItem name="authservers" to="/janusauth">Janus Auth</MenuItem>
          <MenuItem name="health" to="/health">Health Check</MenuItem>

        </Menu>
      </div>

    <div class="layout-nav" style="float: right; margin-right: 100px; margin-top: 35px">
      <Dropdown v-if="user.token && user.username">

        <a href="javascript:void(0)">
          {{ user.name }}
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>
            <a href="/changepassword">修改密码</a>
          </DropdownItem>
          <DropdownItem>
            <a href="/logout">退出登录</a>
          </DropdownItem>

        </DropdownMenu>
      </Dropdown>

      <a v-else class="gb_header_user_login" href="/login">登录系统</a>

    </div>

    <Layout >
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
      <Content :style="{padding: '0 16px 16px'}">
          <router-view/>
      </Content>
    </Layout>
  </div>
</template>

<script lang="js">
  import {USER_INFO} from '@/config'
  import storage from '@/utils/storage'

  const ACTIVEMENU = 'ACTIVEMENU'

  export default {
    name: "Container",
    data() {
      return {
        formInline: {
          username: '',
          password: ''
        },

      }
    },
    computed: {
      user() {
        const userInfo = storage.getItem(USER_INFO)
        return userInfo
      },
      activeMenu() {
        return storage.getItem(ACTIVEMENU)
      },
    },
    methods: {
      onSelectMenuChange(val) {
        storage.setItem(ACTIVEMENU, val)
      }
    },
  }

</script>
