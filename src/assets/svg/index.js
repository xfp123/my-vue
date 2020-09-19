import Vue from 'vue'
import SvgIcon from '@/common/svgIcon' // svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./icon', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
