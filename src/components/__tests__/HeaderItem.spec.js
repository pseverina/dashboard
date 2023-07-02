import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeaderItem from '../HeaderItem.vue'

describe('HeaderItem', () => {
  it('renders properly', () => {
    const wrapper = mount(HeaderItem, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
