import { shallowMount } from '@vue/test-utils';
import Ingredient from '@/components/Ingredient.vue';

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
        ingre: '具1',
      },
    });
    expect(wrapper.text()).toMatch('具1');
  });
});
