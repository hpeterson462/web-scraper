const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const request = async () => {
  const response = await fetch('https://www.mountainproject.com/area/classics/105708965/oregon');
  const html = await response.text();
  //  const dom = new JSDOM(html);

  return html;
};

module.exports = request;
