import { shallowMount, config } from '@vue/test-utils';
import TargetIngredients from '@/components/TargetIngredients.vue';

config.showDeprecationWarnings = false;

describe('TargetIngredients.vue', () => {
  let wrapper: any;
  const ingredientDataSingle = [
    {
      name: 'sample具1',
      categories: ['meat'],
    },
  ];
  const ingredientDataDouble = [
    {
      name: '具1',
      categories: ['test-class'],
    },
    {
      name: '具2',
      categories: ['class1', 'class2'],
    },
  ];
  const ingredientDataForth = [
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
      categories: ['test-class2'],
    },
    {
      name: '具4',
      categories: ['class5', 'class6'],
    },
  ];
  const ingredientDataFifth = [
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
      categories: ['test-class2'],
    },
    {
      name: '具4',
      categories: ['class5', 'class6'],
    },
    {
      name: '具5',
      categories: ['lass5', 'lass6'],
    },
  ];
  const ingredientDataSix = [
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
      categories: ['test-class2'],
    },
    {
      name: '具4',
      categories: ['class5', 'class6'],
    },
    {
      name: '具5',
      categories: ['lass5', 'lass6'],
    },
    {
      name: '具6',
      categories: ['la5', 'la6'],
    },
  ];
  beforeEach(() => {
    wrapper = shallowMount(TargetIngredients, {
      propsData: {
        targetIngredients: ingredientDataSingle,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('init', () => {
    expect(wrapper.find('h2').text()).toMatch('抽選対象になる具材');
    expect(wrapper.find('.list-item-more-button').exists()).toBeTruthy();
    expect(wrapper.find('.list-item-less-button').exists()).toBeFalsy();
    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().name).toMatch('sample具1');
    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().categories).toMatch('meat');
    expect(wrapper.findAll('ingredientvue-stub').length).toBe(1);
    expect(wrapper.vm.count).toBe(5);
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
    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().name).toMatch('具1');
    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().categories).toMatch('test-class');
    expect(wrapper.findAll('ingredientvue-stub').length).toBe(1);
  });

  it('input ingredients 2', () => {
    wrapper = shallowMount(TargetIngredients, {
      propsData: {
        targetIngredients: ingredientDataDouble,
      },
    });

    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().name).toMatch('具1');
    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().categories).toMatch('test-class');
    expect(wrapper.findAll('ingredientvue-stub').at(1).attributes().name).toMatch('具2');
    expect(wrapper.findAll('ingredientvue-stub').at(1).attributes().categories).toMatch('class1,class2');
    expect(wrapper.findAll('ingredientvue-stub').length).toBe(2);
  });

  it('input ingredients 6', () => {
    wrapper = shallowMount(TargetIngredients, {
      propsData: {
        targetIngredients: ingredientDataSix,
      },
    });

    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().name).toMatch('具1');
    expect(wrapper.findAll('ingredientvue-stub').at(0).attributes().categories).toMatch('test-class');
    expect(wrapper.findAll('ingredientvue-stub').at(1).attributes().name).toMatch('具2');
    expect(wrapper.findAll('ingredientvue-stub').at(1).attributes().categories).toMatch('class1,class2');
    expect(wrapper.findAll('ingredientvue-stub').at(2).attributes().name).toMatch('具3');
    expect(wrapper.findAll('ingredientvue-stub').at(2).attributes().categories).toMatch('test-class2');
    expect(wrapper.findAll('ingredientvue-stub').at(3).attributes().name).toMatch('具4');
    expect(wrapper.findAll('ingredientvue-stub').at(3).attributes().categories).toMatch('class5,class6');
    expect(wrapper.findAll('ingredientvue-stub').at(4).attributes().name).toMatch('具5');
    expect(wrapper.findAll('ingredientvue-stub').at(4).attributes().categories).toMatch('lass5,lass6');
    // expect(wrapper.findAll('ingredientvue-stub').at(5).attributes().name).toMatch('具6');
    // expect(wrapper.findAll('ingredientvue-stub').at(5).attributes().categories).toMatch('la5,la6');
    expect(wrapper.findAll('ingredientvue-stub').length).toBe(5);
  });

  it('isMore', () => {
    wrapper.vm.isMore();
    expect(wrapper.vm.count).toBe(1);
  });

  it('isMore ingredients 2', () => {
    wrapper = shallowMount(TargetIngredients, {
      propsData: {
        targetIngredients: ingredientDataDouble,
      },
    });

    wrapper.vm.isMore();
    expect(wrapper.vm.count).toBe(2);
  });

  it('isMore ingredients 4', () => {
    wrapper = shallowMount(TargetIngredients, {
      propsData: {
        targetIngredients: ingredientDataForth,
      },
    });

    wrapper.vm.isMore();
    expect(wrapper.vm.count).toBe(4);
  });

  it('isMore ingredients 5', () => {
    wrapper = shallowMount(TargetIngredients, {
      propsData: {
        targetIngredients: ingredientDataFifth,
      },
    });

    wrapper.vm.isMore();
    expect(wrapper.vm.count).toBe(5);
  });

  it('isMore ingredients 6', () => {
    wrapper = shallowMount(TargetIngredients, {
      propsData: {
        targetIngredients: ingredientDataSix,
      },
    });

    wrapper.vm.isMore();
    expect(wrapper.vm.count).toBe(6);
  });

  it('isLess', () => {
    wrapper.vm.isLess();
    expect(wrapper.vm.count).toBe(5);
  });

  it('isLess ingredients 2', () => {
    wrapper = shallowMount(TargetIngredients, {
      propsData: {
        targetIngredients: ingredientDataDouble,
      },
    });

    wrapper.vm.isLess();
    expect(wrapper.vm.count).toBe(5);
  });

  it('isLess ingredients 4', () => {
    wrapper = shallowMount(TargetIngredients, {
      propsData: {
        targetIngredients: ingredientDataForth,
      },
    });

    wrapper.vm.isLess();
    expect(wrapper.vm.count).toBe(5);
  });

  it('isLess ingredients 5', () => {
    wrapper = shallowMount(TargetIngredients, {
      propsData: {
        targetIngredients: ingredientDataFifth,
      },
    });

    wrapper.vm.isLess();
    expect(wrapper.vm.count).toBe(5);
  });

  it('isLess ingredients 6', () => {
    wrapper = shallowMount(TargetIngredients, {
      propsData: {
        targetIngredients: ingredientDataSix,
      },
    });

    wrapper.vm.isLess();
    expect(wrapper.vm.count).toBe(5);
  });
});
