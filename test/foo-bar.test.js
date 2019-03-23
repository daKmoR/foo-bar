import { html, fixture, expect } from '@open-wc/testing/index.js';

import '../src/foo-bar';

describe('<foo-bar>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<foo-bar></foo-bar>', 'asdf');
    expect(el.title).to.equal('open-wc');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <foo-bar title="different"></foo-bar>
    `);
    expect(el.title).to.equal('different');
  });
});
