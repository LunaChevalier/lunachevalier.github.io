import ingredientsData from '@/assets/json/ingredients.json'
import ingredientsTestData from '../data/ingredients.json'

describe('ingredients.json', () => {
  it('init', () => {
    expect(ingredientsData).toEqual(ingredientsTestData);
  });
});
