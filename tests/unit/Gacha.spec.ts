import { shallowMount, config } from '@vue/test-utils';
import Gacha from '@/components/Gacha.vue';
import ingredientsData from '../data/ingredients.json';

config.showDeprecationWarnings = false;

describe('Gacha.vue', () => {
  let wrapper: any;
  const ingrents = ingredientsData.map((ingredient) => ingredient.name);
  beforeEach(() => {
    wrapper = shallowMount(Gacha);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('init', () => {
    expect(wrapper.text()).toMatch('具の数: 具材を決定');
    expect(wrapper.vm.count).toBe(1);
  });

  it('data update', () => {
    wrapper.vm.ingredients = ['具1', '具2'];
    expect(wrapper.text()).toMatch('具の数: 具材を決定');
    expect(wrapper.vm.ingredients).toEqual(['具1', '具2']);
  });

  it('if 具材を決定 push, lottery called', () => {
    const lottery = jest.fn();
    wrapper = shallowMount(Gacha, { methods: { lottery }});

    wrapper.find('button').trigger('click');
    expect(lottery).toBeCalled();
  });

  it('lottery test (default size 1)', () => {
    wrapper.vm.lottery();
    expect(ingrents).toEqual(expect.arrayContaining(wrapper.vm.ingredients));
    expect(wrapper.vm.ingredients).toHaveLength(1);
  });

  it('lottery test (size 2)', () => {
    wrapper.vm.count = 2;
    wrapper.vm.lottery();
    expect(ingrents).toEqual(expect.arrayContaining(wrapper.vm.ingredients));
    expect(wrapper.vm.ingredients).toHaveLength(2);
  });

  it('lottery test (size max ingrents - 1)', () => {
    wrapper.vm.count = ingrents.length - 1;
    wrapper.vm.lottery();
    expect(ingrents).toEqual(expect.arrayContaining(wrapper.vm.ingredients));
    expect(wrapper.vm.ingredients).toHaveLength(ingrents.length - 1);
  });

  it('lottery test (size max ingrents)', () => {
    wrapper.vm.count = ingrents.length;
    wrapper.vm.lottery();
    expect(ingrents).toEqual(expect.arrayContaining(wrapper.vm.ingredients));
    expect(wrapper.vm.ingredients).toHaveLength(ingrents.length);
  });

  it('lottery test (size max ingrents + 1)', () => {
    wrapper.vm.count = ingrents.length + 1;
    wrapper.vm.lottery();
    expect(ingrents).toEqual(expect.arrayContaining(wrapper.vm.ingredients));
    expect(wrapper.vm.ingredients).toHaveLength(ingrents.length);
  });

  it('lottery test (size max ingrents + 5)', () => {
    wrapper.vm.count = ingrents.length + 5;
    wrapper.vm.lottery();
    expect(ingrents).toEqual(expect.arrayContaining(wrapper.vm.ingredients));
    expect(wrapper.vm.ingredients).toHaveLength(ingrents.length);
  });
});
