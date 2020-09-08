import ingredientsTestData from '../src/assets/json/ingredients.json';
import * as fs from 'fs';

const body: string = `# カレー具材ガチャ

具の数を入れて、具材を決定すると、具の数だけ具材を決定してくれます  
実装されている具材は以下になります

ingredients

随時追加予定
`.replace('ingredients', ingredientsTestData.map((ingredient) => `- ${ingredient.name}`).join('\n'));

fs.writeFileSync('README.md', body);

console.log("success README.md generate");
