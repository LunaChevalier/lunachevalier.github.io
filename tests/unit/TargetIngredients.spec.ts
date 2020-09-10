import { shallowMount, config } from '@vue/test-utils';
import TargetIngredients from '@/components/TargetIngredients.vue';

config.showDeprecationWarnings = false;

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
        targetIngredients: [
          {
            name: '具1',
            categories: ['test-class'],
          },
        ],
      },
    });
    expect(wrapper.find('.target-ingredients').text()).toMatch('抽選対象になる具材');
    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().name).toMatch('具1');
    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().categories).toMatch('test-class');
    expect(wrapper.findAll('ingredientvue-stub').length).toBe(1);
  });

  it('input ingredients 2', () => {
    wrapper = shallowMount(TargetIngredients, {
      propsData: {
        targetIngredients: [
          {
            name: '具1',
            categories: ['test-class'],
          },
          {
            name: '具2',
            categories: ['class1', 'class2'],
          },
        ],
      },
    });

    expect(wrapper.find('.target-ingredients').text()).toMatch('抽選対象になる具材');
    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().name).toMatch('具1');
    expect(wrapper.findAll('ingredientvue-stub').at(1).attributes().name).toMatch('具2');
    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().categories).toMatch('test-class');
    expect(wrapper.findAll('ingredientvue-stub').at(1).attributes().categories).toMatch('class1,class2');
    expect(wrapper.findAll('ingredientvue-stub').length).toBe(2);
  });
});
