<template>
  <div>

    <Table class="ordertable" ref="orderTable" border :columns="columns" :data="tableData"></Table>
    <Page :total="pager.total" :current="pager.page" :page-size="pager.page_size"
          @on-page-size-change="handlePageSizeChange"
          @on-change="handlePageChange" show-sizer/>

  </div>
</template>

<script>
  const pagerInit = {
    page: 1,
    page_size: 10,
    total: 0,
  }

  import {fetchService} from '@/apis/services'
  import {cols, getFormList} from './helper.jsx'
  import _omit from 'lodash/omit'

  export default {
    name: "ServiceList",
    data(){
      return {
        formData :{},
        tableData :[],
        filterform :{},
        pager :{...pagerInit},
      }
    },
    computed:{
      formList() {
        return getFormList(this.staff_list)
      },

      columns() {
        return cols(this)
      }
    },
    methods:{
      handlePageSizeChange(pageSize) {
        this.pager.page = this.pager.page_size < pageSize ?
          Math.ceil(this.pager.page * (this.pager.page_size / pageSize)) : this.pager.page
        this.pager.page_size = pageSize

        this.fetchService()
      },

      handlePageChange(page) {
        this.pager.page = page
        this.fetchService()
      },

      edit(row) {
        this.$router.push({name: 'newsDetail', params: {id: row.id}})
      },

      createServices(row) {
        this.$router.push({name: 'newsDetail', params: {id: 0}})
      },

      async remove(row) {
        this.$Modal.confirm({
          title: '确认',
          content: '确认删除?',
          width: 350,
          onOk: async () => {
            // await patchServices(row.id, {status: 'delete'})
            this.fetchService()
          },
        })
      },

      async fetchService() {
        // debugger
        const response = await fetchService(_omit(this.pager, 'total'))
        // @ts-ignore
        this.tableData = response
        // @ts-ignore
        this.pager.total = response.count
      },
    },
    mounted() {
      this.fetchService()
    }

  }
</script>

<style scoped>

</style>
