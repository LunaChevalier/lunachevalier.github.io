import { shallowMount } from '@vue/test-utils';
import Gacha from '@/components/Gacha.vue';

describe('Gacha.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Gacha, {
    });
    expect(wrapper.text()).toMatch('HOME VUE');
  });
});
