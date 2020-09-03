import { shallowMount } from '@vue/test-utils';
import GachaResult from '@/components/GachaResult.vue';

describe('GachaResult.vue', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(GachaResult);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('init', () => {
    expect(wrapper.text()).toMatch('');
  });

  it('input prop one', () => {
    wrapper = shallowMount(GachaResult, {
      propsData: {
        ingredient: ['具1'],
      },
    });
    expect(wrapper.text()).toMatch('具1');
    expect(wrapper.vm.ingredient).toEqual(['具1']);
  });

  it('input prop three', () => {
    wrapper = shallowMount(GachaResult, {
      propsData: {
        ingredient: ['具1', '具2', '具3'],
      },
    });
    expect(wrapper.text()).toMatch('具1');
    expect(wrapper.text()).toMatch('具2');
    expect(wrapper.text()).toMatch('具3');
    expect(wrapper.vm.ingredient).toEqual(['具1', '具2', '具3']);
  });
});
