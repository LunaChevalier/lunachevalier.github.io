import { shallowMount, config } from '@vue/test-utils';
import Gacha from '@/components/Gacha.vue';

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
    expect(wrapper.text()).toMatch('具の数: 具材を決定');
    expect(wrapper.vm.count).toBe(1);
  });

  it('data update', () => {
    wrapper.vm.ingres = ['具1', '具2'];
    expect(wrapper.text()).toMatch('具の数: 具材を決定');
    expect(wrapper.vm.ingres).toEqual(['具1', '具2']);
  });

  it('if 具材を決定 push, lottery called', () => {
    const lottery = jest.fn();
    wrapper = shallowMount(Gacha, { methods: { lottery }});

    wrapper.find('button').trigger('click');
    expect(lottery).toBeCalled();
  });

  it('lottery test (default size 1)', () => {
    wrapper.vm.lottery();
    expect(['玉ねぎ', '人参', 'じゃがいも', '大根']).toEqual(expect.arrayContaining(wrapper.vm.ingres));
    expect(wrapper.vm.ingres).toHaveLength(1);
  });

  it('lottery test (size 2)', () => {
    wrapper.vm.count = 2;
    wrapper.vm.lottery();
    expect(['玉ねぎ', '人参', 'じゃがいも', '大根']).toEqual(expect.arrayContaining(wrapper.vm.ingres));
    expect(wrapper.vm.ingres).toHaveLength(2);
  });

  it('lottery test (size 3)', () => {
    wrapper.vm.count = 3;
    wrapper.vm.lottery();
    expect(['玉ねぎ', '人参', 'じゃがいも', '大根']).toEqual(expect.arrayContaining(wrapper.vm.ingres));
    expect(wrapper.vm.ingres).toHaveLength(3);
  });

  it('lottery test (size 4)', () => {
    wrapper.vm.count = 4;
    wrapper.vm.lottery();
    expect(['玉ねぎ', '人参', 'じゃがいも', '大根']).toEqual(expect.arrayContaining(wrapper.vm.ingres));
    expect(wrapper.vm.ingres).toHaveLength(4);
  });

  it('lottery test (size 5)', () => {
    wrapper.vm.count = 5;
    wrapper.vm.lottery();
    expect(['玉ねぎ', '人参', 'じゃがいも', '大根']).toEqual(expect.arrayContaining(wrapper.vm.ingres));
    expect(wrapper.vm.ingres).toHaveLength(4);
  });

  it('lottery test (size 10)', () => {
    wrapper.vm.count = 10;
    wrapper.vm.lottery();
    expect(['玉ねぎ', '人参', 'じゃがいも', '大根']).toEqual(expect.arrayContaining(wrapper.vm.ingres));
    expect(wrapper.vm.ingres).toHaveLength(4);
  });
});
