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

<details>
<summary>Benchmark</summary>

```
test@somemail.com:
2 157 335 ops/s, ±3.85%    | 86.93% slower

Abc\@def@example.com:
1 555 215 ops/s, ±0.71%    | 90.57% slower

very."(),:;<>[]".VERY."very@\\ very".unusual@strange.example.com:
917 709 ops/s, ±0.20%      | slowest, 94.44% slower

much."more\ unusual"@example.com:
1 505 956 ops/s, ±0.20%    | 90.87% slower

@test.com:
1 762 869 ops/s, ±0.21%    | 89.32% slower

@@mail.com:
3 410 584 ops/s, ±0.18%    | 79.33% slower

test..test@sdf.com:
16 500 605 ops/s, ±0.21%   | fastest

mlewan.@att.net:
3 327 090 ops/s, ±0.20%    | 79.84% slower
```

</details>

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT © [Shelf](https://shelf.io)
