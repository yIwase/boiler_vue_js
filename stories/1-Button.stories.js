import { action } from '@storybook/addon-actions'

import MyButton from './MyButton'

export default {
  title: 'SampleButton',
  component: MyButton,
}

export const Text = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') },
})

export const Emoji = () => ({
  components: { MyButton },
  template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
  methods: { action: action('clicked') },
})
