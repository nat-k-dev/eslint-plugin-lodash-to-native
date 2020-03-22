# eslint-plugin-lodash-to-native

Плагин для ESLint. Для проверки и отладки плагина использовался сайт [https://astexplorer.net/](https://astexplorer.net/) (кнопка Transform -> ESLint v4).

## Установка плагина для использования в каком-либо проекте

Создать новый проект в VS Code, создать в нем файл с кодом, где используется _.map(collection, callback);

Инициализировать npm. Установить  [ESLint](http://eslint.org) и lodash:

```
$ npm init
$ npm i eslint --save-dev
$ npm i lodash --save-dev
```

Установить плагин `eslint-plugin-lodash-to-native`:

```
$ npm install -S https://github.com/appalse/eslint-plugin-lodash-to-native.git
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-lodash-to-native` globally.

## Использование

В файле .eslintrc.js добавить:
```
  "plugins": [
      "lodash-to-native"
  ],
  "rules": {
      "lodash-to-native/map": "warn"
  },
```

Далее можно писать код и он будет подсвечиваться через ESLint. Например, можно ввести:
```
_.map([1, 2, 3], console.log);
```
Если нажать Quick Fix, то будет произведена замена.


## Установка и тестирование текущего репозитория
```
npm install
npm test
```
