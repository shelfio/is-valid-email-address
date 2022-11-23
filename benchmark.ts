import benny from 'benny';
import {isValidEmail} from './lib'; // change to lib

benny.suite(
  'isValidEmail',
  benny.add('test@somemail.com', () => {
    isValidEmail('test@somemail.com');
  }),

  benny.add('Abc\\@def@example.com', () => {
    isValidEmail('Abc\\@def@example.com');
  }),

  benny.add('very."(),:;<>[]".VERY."very@\\\\ very".unusual@strange.example.com', () => {
    isValidEmail('very."(),:;<>[]".VERY."very@\\\\ very".unusual@strange.example.com');
  }),

  benny.add('much."more\\ unusual"@example.com', () => {
    isValidEmail('much."more\\ unusual"@example.com');
  }),

  benny.add('@test.com', () => {
    isValidEmail('@test.com');
  }),

  benny.add('@@mail.com', () => {
    isValidEmail('@@mail.com');
  }),

  benny.add('test..test@sdf.com', () => {
    isValidEmail('test..test@sdf.com');
  }),

  benny.add('mlewan.@att.net', () => {
    isValidEmail('mlewan.@att.net');
  }),

  benny.cycle(),
  benny.complete()
);
