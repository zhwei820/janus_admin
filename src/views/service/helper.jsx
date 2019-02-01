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
            <i-button type='primary' onClick={vm.edit.bind(vm, params.row)}>Edit</i-button>
            <i-button type='error' onClick={vm.remove.bind(vm, params.row)}>Delete</i-button>
          </div>)
      },
    },

  ]
}
import {getBodyLimitForm, getBodylimit} from './plugins/bodylimit'

export function getFormList(obj) {
  // debugger
  return {
    body_limit : getBodyLimitForm,
  }[obj.name].call(null, obj)
}

export function getDefaultFormData(name) {
  return {
    body_limit : getBodylimit,
  }[name].call(null)
}
