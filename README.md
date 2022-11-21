# @shelf/is-valid-email-address

Compliant with [RFC 3696](https://www.rfc-editor.org/rfc/rfc3696#section-3)

## Install

```
$ yarn add @shelf/is-valid-email-address
```

## Usage

```js
const {isValidEmail} = import('@shelf/is-valid-email-address');

isValidEmail('email@example.com'); // true
isValidEmail('invalid"email@example.com'); // false
```

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT © [Shelf](https://shelf.io)
