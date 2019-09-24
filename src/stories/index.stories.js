import Vue from 'vue'
import MyButton from '../components/Button.vue'

export default { title: 'Button' }

export const asAComponent = () => ({
  components: { MyButton },
  template: '<my-button></my-button>'
})
