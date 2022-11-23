import {isValidEmail} from './index';

describe('isValidEmail', () => {
  it.each([
    'test@somemail.com',
    'test+@somemail.com',
    'test.test@somemail.com',
    'abc@xyz.co',
    'asdihjasfkljbna121dqsa@shelf.io',
    'mlewan@att.net',
    'gfody@me.com',
    'multiplx@optonline.net',
    'Abc\\@def@example.com',
    'Fred\\ Bloggs@example.com',
    'Joe.\\\\Blow@example.com',
    '"Abc@def"@example.com',
    '"Fred Bloggs"@example.com',
    'very."(),:;<>[]".VERY."very@\\\\ very".unusual@strange.example.com',
    'much."more\\ unusual"@example.com',
  ])('should return true', url => {
    expect(isValidEmail(url)).toBe(true);
  });

  it.each([
    '@test.com',
    '@@mail.com',
    'test@@mail.com',
    'test@m@ail.com',
    'test@.com',
    'test@com',
    'test@com..com',
    'test@com.',
    'test..test@com.',
    'test..test@sdf.com',
    'mlewan.@att.net',
    'mlew@an@att.net',
  ])('should return false', url => {
    expect(isValidEmail(url)).toBe(false);
  });
});
