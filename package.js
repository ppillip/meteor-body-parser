Package.describe({
  name: 'ppillip:body-parser',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'npm body-parser를 미티어에서 사용하기 위한 패키지',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ppillip/meteor-body-parser.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

//0. npm 패키지를 쓸경우 선언 해준다. 이러면 미티어가 자동으로 npm 패키지 까지 설치 해준다.
Npm.depends({
  "body-parser": "1.14.2"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');

//1. 서버로 수정해줌
  api.addFiles('body-parser.js','server');

//2. body-parser.js 를 코딩한다
//3. 패키지 바깥쪽 코드 , 즉 사용자가 개입할 오브젝트를 선언한다
  api.export("bodyParser",'server'); //서버에서 config 가능하게 하자.

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ppillip:body-parser');
  api.addFiles('body-parser-tests.js');
});


/*
Package.describe({
  name: 'ppillip:body-parser',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('body-parser.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ppillip:body-parser');
  api.addFiles('body-parser-tests.js');
});
*/