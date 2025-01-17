import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AlertTemplate } from '../AlertTemplate'

export default {
  title: 'Templates/Alert',
  component: AlertTemplate,
  argTypes: {
    onBtnClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof AlertTemplate>

const Template: ComponentStory<typeof AlertTemplate> = (args) => (
  <AlertTemplate {...args} />
)

export const Component = Template.bind({})
Component.args = {
  btnText: 'ClickMe',
  text: 'Alert text',
  title: 'Alert title',
}

export const ComponentWithChildren = Template.bind({})
ComponentWithChildren.args = {
  ...Component.args,
  children: <div>testing children</div>,
}
