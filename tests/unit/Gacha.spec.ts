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
});
