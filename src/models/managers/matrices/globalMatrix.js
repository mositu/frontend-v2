import MatrixObjectManager from './_base'
import commons from '../_common'

const globalMatrix = new MatrixObjectManager({
  name: 'globalMatrix',
  api: {
    serverSensitive: true,

    url: '/result/matrix',
    extraParams: {
      "show_closed_zones": true
    }
  },
  validator: commons.defaultValidator,
  ttl: 1000 * 60 * 60 * 1, // 1 hour
  ajaxHooks: commons.defaultAjaxHooks
});

export default globalMatrix