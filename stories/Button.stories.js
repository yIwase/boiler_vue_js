import Button from '../src/components/Button.vue'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Button',
  component: Button,
}

export const Submit = () => ({
  components: { Button },
  template: '<Button @click="action" type="submit">はい</Button>',
  methods: { action: action('clicked') },
})

export const Cancel = () => ({
  components: { Button },
  template: '<Button @click="action" type="cancel">キャンセル</Button>',
  methods: { action: action('clicked') },
})
