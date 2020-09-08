import { shallowMount, config } from '@vue/test-utils';
import Ingredient from '@/components/Ingredient.vue';

config.showDeprecationWarnings = false;

describe('Ingredient.vue', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(Ingredient);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('init', () => {
    expect(wrapper.text()).toMatch('');
  });

  it('input prop one', () => {
    wrapper = shallowMount(Ingredient, {
      propsData: {
        name: '具1',
        categories: ['test-class'],
      },
    });
    expect(wrapper.text()).toMatch('具1');
    expect(wrapper.contains('.test-class')).toBe(true);
  });
});
