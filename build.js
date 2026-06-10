const fs = require('fs');

function build() {
  const css = fs.readFileSync('E:\\111\\css\\style.css', 'utf8');
  const dataJs = fs.readFileSync('E:\\111\\js\\data.js', 'utf8');
  const baziJs = fs.readFileSync('E:\\111\\js\\bazi.js', 'utf8');
  const tarotJs = fs.readFileSync('E:\\111\\js\\tarot.js', 'utf8');
  const appJs = fs.readFileSync('E:\\111\\js\\app.js', 'utf8');

  // Read the existing index.html which has the HTML structure
  let html = fs.readFileSync('E:\\111\\index.html', 'utf8');
  
  // Report sizes
  fs.writeFileSync('E:\\111\\build_log.txt', 
    'CSS: ' + css.length + '\n' +
    'data.js: ' + dataJs.length + '\n' +
    'bazi.js: ' + baziJs.length + '\n' +
    'tarot.js: ' + tarotJs.length + '\n' +
    'app.js: ' + appJs.length + '\n' +
    'HTML before: ' + html.length + '\n',
    'utf8');

  // Replace the JS placeholder
  html = html.replace('/*_JS_PLACEHOLDER_*/', 
    dataJs + '\n' + baziJs + '\n' + tarotJs + '\n' + appJs);

  fs.writeFileSync('E:\\111\\index.html', html, 'utf8');
  
  fs.appendFileSync('E:\\111\\build_log.txt', 
    'HTML after: ' + html.length + '\nBuild complete\n', 'utf8');
}

build();