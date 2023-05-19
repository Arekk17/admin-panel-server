import { faker } from '@faker-js/faker';
import type { Landing } from '../types';

const html = `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<p>This is a paragraph of text. It can contain <b>bold</b> text, <i>italic</i> text, and <u>underlined</u> text. It can also contain <span style="color:red">colored</span> text.</p>
<p>This is another paragraph of text. It can also contain <a href="https://www.example.com">links</a> to other websites.</p>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>
<dl>
  <dt>Term 1</dt>
  <dd>Definition 1</dd>
  <dt>Term 2</dt>
  <dd>Definition 2</dd>
  <dt>Term 3</dt>
  <dd>Definition 3</dd>
</dl>`;

const generateLandings = (count: number = 20) => {
  const landings: Array<Omit<Landing, 'id'>> = Array.from(
    { length: count },
    () => ({
      title: faker.lorem.words(4),
      name: faker.lorem.words(4),
      slug: faker.lorem.slug(),
      content: html,
    })
  );

  return {
    name: 'landing',
    data: landings,
  };
};

export default generateLandings;
