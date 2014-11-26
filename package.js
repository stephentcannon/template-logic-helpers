Package.describe({
  name: 'steeve:template-logic-helpers',
  summary: 'a package of template logic helpers',
  version: '0.0.1',
  git: 'https://github.com/stephentcannon/template-logic-helpers.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('steeve:template-logic-helpers.js');
});


