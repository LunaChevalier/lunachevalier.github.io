import { shallowMount } from '@vue/test-utils';
import TargetIngredients from '@/components/TargetIngredients.vue';

describe('TargetIngredients.vue', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(TargetIngredients);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('init', () => {
    expect(wrapper.find('.target-ingredients').text()).toMatch('抽選対象になる具材');
  });

  it('input ingredients 1', () => {
    wrapper = shallowMount(TargetIngredients, {
      propsData: {
        targetIngredients: ['具1'],
      },
    });
    expect(wrapper.find('.target-ingredients').text()).toMatch('抽選対象になる具材');
    expect(wrapper.find('.target-ingredient').text()).toMatch('具1');
  });

  it('input ingredients 2', () => {
    wrapper = shallowMount(TargetIngredients, {
      propsData: {
        targetIngredients: ['具1', '具2'],
      },
    });
    expect(wrapper.find('.target-ingredients').text()).toMatch('抽選対象になる具材');
    expect(wrapper.findAll('.target-ingredient').at(0).text()).toMatch('具1');
    expect(wrapper.findAll('.target-ingredient').at(1).text()).toMatch('具2');
  });
})