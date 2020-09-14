import { shallowMount, config } from '@vue/test-utils';
import Gacha from '@/components/Gacha.vue';
import ingredientsData from '../data/ingredients.json';

config.showDeprecationWarnings = false;

describe('Gacha.vue', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(Gacha);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('init', () => {
    expect(wrapper.find('.text-nowrap').text()).toMatch('具の数');
    expect(wrapper.find('.lottery').text()).toMatch('具材を決定');
    expect(wrapper.vm.count).toBe(1);
    expect(wrapper.vm.isResultDisplay).toBeFalsy();
  });

  it('data update', () => {
    wrapper.vm.ingredients = ['具1', '具2'];
    expect(wrapper.find('.text-nowrap').text()).toMatch('具の数');
    expect(wrapper.find('.lottery').text()).toMatch('具材を決定');
    expect(wrapper.vm.ingredients).toEqual(['具1', '具2']);
  });

  it('if 具材を決定 push, lottery called', () => {
    const lottery = jest.fn();
    wrapper = shallowMount(Gacha, { methods: { lottery }});

    wrapper.find('.lottery').trigger('click');

    expect(lottery).toBeCalled();
  });

  it('lottery test (default size 1)', () => {
    const isPush = jest.fn();
    isPush.mockReturnValue(true);
    wrapper = shallowMount(Gacha, { methods: { isPush }});

    wrapper.vm.lottery();

    expect(ingredientsData).toEqual(expect.arrayContaining(wrapper.vm.ingredients));
    expect(wrapper.vm.ingredients).toHaveLength(1);
  });

  it('lottery test (size 2)', () => {
    const isPush = jest.fn();
    isPush.mockReturnValue(true);
    wrapper = shallowMount(Gacha, { methods: { isPush }});
    wrapper.vm.count = 2;

    wrapper.vm.lottery();

    expect(ingredientsData).toEqual(expect.arrayContaining(wrapper.vm.ingredients));
    expect(wrapper.vm.ingredients).toHaveLength(2);
  });

  it('lottery test (size max ingredientsData - 1)', () => {
    const isPush = jest.fn();
    isPush.mockReturnValue(true);
    wrapper = shallowMount(Gacha, { methods: { isPush }});
    wrapper.vm.count = ingredientsData.length - 1;

    wrapper.vm.lottery();

    expect(ingredientsData).toEqual(expect.arrayContaining(wrapper.vm.ingredients));
    expect(wrapper.vm.ingredients).toHaveLength(ingredientsData.length - 1);
  });

  it('lottery test (size max ingredientsData)', () => {
    const isPush = jest.fn();
    isPush.mockReturnValue(true);
    wrapper = shallowMount(Gacha, { methods: { isPush }});
    wrapper.vm.count = ingredientsData.length;

    wrapper.vm.lottery();

    expect(ingredientsData).toEqual(expect.arrayContaining(wrapper.vm.ingredients));
    expect(wrapper.vm.ingredients).toHaveLength(ingredientsData.length);
  });

  it('lottery test (size max ingredientsData + 1)', () => {
    const isPush = jest.fn();
    isPush.mockReturnValue(true);
    wrapper = shallowMount(Gacha, { methods: { isPush }});
    wrapper.vm.count = ingredientsData.length + 1;

    wrapper.vm.lottery();

    expect(ingredientsData).toEqual(expect.arrayContaining(wrapper.vm.ingredients));
    expect(wrapper.vm.ingredients).toHaveLength(ingredientsData.length);
  });

  it('lottery test (size max ingredientsData + 5)', () => {
    const isPush = jest.fn();
    isPush.mockReturnValue(true);
    wrapper = shallowMount(Gacha, { methods: { isPush }});
    wrapper.vm.count = ingredientsData.length + 5;

    wrapper.vm.lottery();

    expect(ingredientsData).toEqual(expect.arrayContaining(wrapper.vm.ingredients));
    expect(wrapper.vm.ingredients).toHaveLength(ingredientsData.length);
  });

  it('lottery test (isPush is false)', () => {
    const isPush = jest.fn();
    isPush.mockReturnValue(false);
    wrapper = shallowMount(Gacha, { methods: { isPush }});

    wrapper.vm.lottery();

    expect(ingredientsData).toEqual(expect.arrayContaining(wrapper.vm.ingredients));
    expect(wrapper.vm.ingredients).toHaveLength(0);
  });

  it('lottery test (isResultDisplay is true)', () => {
    wrapper.vm.isResultDisplay = true;

    wrapper.vm.lottery();

    expect(ingredientsData).toEqual(expect.arrayContaining(wrapper.vm.ingredients));
    expect(wrapper.vm.ingredients).toHaveLength(0);
  });

  it('isPush test (input 1)', () => {
    wrapper.vm.count = 1;
    expect(wrapper.vm.isPush()).toBeTruthy();
  });

  it('isPush test (input 0)', () => {
    wrapper.vm.count = 0;
    expect(wrapper.vm.isPush()).toBeFalsy();
  });

  it('isPush test (input -1)', () => {
    wrapper.vm.count = -1;
    expect(wrapper.vm.isPush()).toBeFalsy();
  });

  it('isPush test (input a)', () => {
    wrapper.vm.count = 'a';
    expect(wrapper.vm.isPush()).toBeFalsy();
  });

  it('isPush test (no input)', () => {
    wrapper.vm.count = '';
    expect(wrapper.vm.isPush()).toBeFalsy();
  });

  it('isResultDisplay is true', async () => {
    await wrapper.setData({ isResultDisplay: true });
    expect(wrapper.vm.isResultDisplay).toBeTruthy();
    expect(wrapper.find('.lottery').text()).toMatch('もとに戻す');
  });

  it('isResultDisplay is false', async () => {
    await wrapper.setData({ isResultDisplay: false });
    expect(wrapper.vm.isResultDisplay).toBeFalsy();
    expect(wrapper.find('.lottery').text()).toMatch('具材を決定');
  });
});
