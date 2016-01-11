https://www.npmjs.com/package/body-parser 의 body-parer 를 미티어에서도 사용해보자.

### 설치 방법

meteor add ppillip:body-parser

### WebApp 에서 사용하기 (usage with WebApp)

```js
WebApp.connectHandlers
    .use(bodyParser.urlencoded())
    .use(bodyParser.json())
;
```

### Picker 패키지에서 사용하기 (usage with Picker Package)

```js
Picker.middleware( bodyParser.json() );
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );
```


