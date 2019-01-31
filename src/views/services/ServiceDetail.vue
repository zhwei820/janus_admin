<template>
  <div>
    <HeaderBoard title="新闻管理" :items='["内容", "新闻管理"]'></HeaderBoard>
    <InputForm @submit="onSubmit" :formList="formList" :errors="errors"></InputForm>

  </div>
</template>
<script lang="jsx">

  import {getFormList} from './helper'
  import InputForm from '@/components/InputForm'
  import {createService, patchService, fetchServiceById} from '@/apis/services'

  export default {
    name: "ServiceList",
    data(){
      return {
        formData :{},
      }
    },
    computed:{
      formList() {
        return getFormList(this.formData)
      },
      name() {
        return Number(this.$route.params.name)
      }
    },
    methods:{

      async onSubmit(form, valid) {
        if (valid) {
          await this.createOrUpdateService(form)
        } else {
          this.$Message.error('请修复以下错误!')
        }
      },
      async createOrUpdateService(data) {
        this.errors = {}  // 清空errors很重要, 不然会导致后续的提示不显示
                          // https://github.com/iview/iview/blob/master/src/components/form/form-item.vue#L81
        try {
          if (this.id === 0) {
            await createService(data)
          } else {
            await patchService(this.id, data)
          }
          this.$router.push({name: 'newsList'} )
        } catch (e) {
          console.log(e)
          this.errors = e.data || {}
        }
      },

      async fetchServiceById(id) {
        const response = await fetchServiceById(id)
        // @ts-ignore
        this.formData = response
      },

      created() {
        if (this.id > 0) {
          this.fetchServiceById(this.id)
        }
      }
    }
  }

</script>
