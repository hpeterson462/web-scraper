const request = require('./request');
const { JSDOM } = require('jsdom');

describe('request function', () => {
  it('makes a request to Mountain Project Oregon page and returns html', async () => {
    const html = await request();

    expect(html).toEqual(expect.stringContaining('Oregon'));
  });
})
