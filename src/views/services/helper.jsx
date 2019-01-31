import {dateFormat} from '@/utils/dateFormat'

// tslint:disable
export function cols(vm) {
  return [
    {
      title: 'Api Name',
      key: 'name',
    },
    {
      title: 'Listen Path',
      key: 'listen_path',
      render: (h, params) => {
        return (
          <span>
            {params.row.proxy.listen_path}
          </span>)
      },
    },
    {
      title: 'Active',
      key: 'active',
      render: (h, params) => {
        const txt = '' + params.row.active
        const color = params.row.active ? 'success' : 'magenta'
        return (
          <span>
            <tag color={color}> {txt}</tag>
          </span>)
      },
    },
    {
      title: 'Operations',
      key: 'action',
      width: 250,
      align: 'center',
      render: (h, params) => {
        return (
          <div>
            <i-button type='primary' onClick={vm.edit.bind(vm, params.row)}>编辑</i-button>
            <i-button type='error' onClick={vm.remove.bind(vm, params.row)}>删除</i-button>
          </div>)
      },
    },

  ]
}

export function getFormList(formData) {
  return [
    {
      title: '标题',
      key: 'title',
      defaultValue: formData['title'],
      type: 'input',
      rule: {required: true, message: '请输入标题', trigger: 'blur'},
      props: {
        placeholder: '请输入标题'
      }
    },
    {
      title: '列表缩略图',
      key: 'front_image',
      defaultValue: formData['front_image'],
      type: 'upload',
      rule: {required: true, message: '请输入列表缩略图', trigger: 'blur'},
      props: {
        placeholder: '请输入列表缩略图'
      }
    },
    {
      title: 'Banner',
      key: 'banner',
      defaultValue: formData['banner'],
      type: 'upload',
      rule: {required: false},
      props: {
        placeholder: '请输入Banner'
      }
    },
    {
      title: '摘要',
      key: 'abstract',
      defaultValue: formData['abstract'],
      type: 'textarea',
      rule: {required: true, message: '请输入摘要', trigger: 'blur'},
      props: {
        placeholder: '请输入摘要'
      }
    },
    {
      title: '内容',
      key: 'content',
      defaultValue: formData['content'],
      type: 'editor',
      rule: {required: true, message: '请输入内容', trigger: 'blur'},
      props: {
        placeholder: '请输入内容'
      }
    },
  ]

}
