import { shallowMount, config } from '@vue/test-utils';
import TargetIngredients from '@/components/TargetIngredients.vue';

config.showDeprecationWarnings = false;

describe('TargetIngredients.vue', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(TargetIngredients, {
      propsData: {
        targetIngredients: [
          {
            name: 'sample具1',
            categories: ['meat'],
          },
        ],
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('init', () => {
    expect(wrapper.find('.target-ingredients').text()).toMatch('抽選対象になる具材');
    expect(wrapper.find('.list-item-more-button').exists()).toBeTruthy();
    expect(wrapper.find('.list-item-less-button').exists()).toBeFalsy();
    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().name).toMatch('sample具1');
    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().categories).toMatch('meat');
    expect(wrapper.findAll('ingredientvue-stub').length).toBe(1);
    expect(wrapper.vm.count).toBe(2);
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

  it('isMore', () => {
    wrapper.vm.isMore();
    expect(wrapper.vm.count).toBe(1);
  });

  it('isMore ingredients 2', () => {
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

    wrapper.vm.isMore();
    expect(wrapper.vm.count).toBe(2);
  });

  it('isMore ingredients 3', () => {
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
          {
            name: '具3',
            categories: ['class3', 'class4'],
          },
        ],
      },
    });

    wrapper.vm.isMore();
    expect(wrapper.vm.count).toBe(3);
  });

  it('isLess', () => {
    wrapper.vm.isLess();
    expect(wrapper.vm.count).toBe(2);
  });

  it('isLess ingredients 2', () => {
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

    wrapper.vm.isLess();
    expect(wrapper.vm.count).toBe(2);
  });

  it('isLess ingredients 3', () => {
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
          {
            name: '具3',
            categories: ['class3', 'class4'],
          },
        ],
      },
    });

    wrapper.vm.isLess();
    expect(wrapper.vm.count).toBe(2);
  });
});
