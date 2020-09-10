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
        ingredients: [
          {
            name: '具1',
            categories: ['test-class'],
          },
        ],
      },
    });
    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().name).toMatch('具1');
    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().categories).toMatch('test-class');
    expect(wrapper.findAll('ingredientvue-stub').length).toBe(1);
  });

  it('input prop three', () => {
    wrapper = shallowMount(GachaResult, {
      propsData: {
        ingredients: [
          {
            name: '具1',
            categories: ['test-class1', 'test-class2'],
          },
          {
            name: '具2',
            categories: ['test-3', 'test-4'],
          },
          {
            name: '具3',
            categories: ['class5', 'class6'],
          },
        ],
      },
    });

    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().name).toMatch('具1');
    expect(wrapper.findAll('ingredientvue-stub').at(1).attributes().name).toMatch('具2');
    expect(wrapper.findAll('ingredientvue-stub').at(2).attributes().name).toMatch('具3');
    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().categories).toMatch('test-class1,test-class2');
    expect(wrapper.findAll('ingredientvue-stub').at(1).attributes().categories).toMatch('test-3,test-4');
    expect(wrapper.findAll('ingredientvue-stub').at(2).attributes().categories).toMatch('class5,class6');
    expect(wrapper.findAll('ingredientvue-stub').length).toBe(3);
  });
});
