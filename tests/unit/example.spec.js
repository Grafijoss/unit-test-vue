// import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'

describe('Click event', () => {
	it('Click on yes button calls our method with argument "yes"', () => {
		const spy = sinon.spy()
		const wrapper = mount(HelloWorld, {
			propsData: {
				callMe: spy
			}
		})
		wrapper.find('button.yes').trigger('click')

		spy.calledWith('yes')
	})
})
