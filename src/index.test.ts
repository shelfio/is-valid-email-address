import {isValidEmail} from './index';

describe('isValidEmail', () => {
  it('should validate email', () => {
    expect(isValidEmail('test@somemail.com')).toBeTruthy();
    expect(isValidEmail('test+@somemail.com')).toBeTruthy();
    expect(isValidEmail('test.test@somemail.com')).toBeTruthy();
    expect(isValidEmail('abc@xyz.co')).toBeTruthy();
    expect(isValidEmail('asdihjasfkljbna121dqsa@shelf.io')).toBeTruthy();
    expect(isValidEmail('mlewan@att.net')).toBeTruthy();
    expect(isValidEmail('gfody@me.com')).toBeTruthy();
    expect(isValidEmail('multiplx@optonline.net')).toBeTruthy();
    expect(isValidEmail('Abc\\@def@example.com')).toBeTruthy();
    expect(isValidEmail('Fred\\ Bloggs@example.com')).toBeTruthy();
    expect(isValidEmail('Joe.\\\\Blow@example.com')).toBeTruthy();
    expect(isValidEmail('"Abc@def"@example.com')).toBeTruthy();
    expect(isValidEmail('"Fred Bloggs"@example.com')).toBeTruthy();
    expect(
      isValidEmail('very."(),:;<>[]".VERY."very@\\\\ very".unusual@strange.example.com')
    ).toBeTruthy();
    expect(isValidEmail('much."more\\ unusual"@example.com')).toBeTruthy();

    expect(isValidEmail('@test.com')).toBeFalsy();
    expect(isValidEmail('@@mail.com')).toBeFalsy();
    expect(isValidEmail('test@@mail.com')).toBeFalsy();
    expect(isValidEmail('test@m@ail.com')).toBeFalsy();
    expect(isValidEmail('test@.com')).toBeFalsy();
    expect(isValidEmail('test@com')).toBeFalsy();
    expect(isValidEmail('test@com..com')).toBeFalsy();
    expect(isValidEmail('test@com.')).toBeFalsy();
    expect(isValidEmail('test..test@com.')).toBeFalsy();
    expect(isValidEmail('test..test@sdf.com')).toBeFalsy();
    expect(isValidEmail('mlewan.@att.net')).toBeFalsy();
    expect(isValidEmail('mlew@an@att.net')).toBeFalsy();
  });
});
