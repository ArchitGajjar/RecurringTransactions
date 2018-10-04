/**
 * @file
 * @module lib/error
 */

 // ASD (Application Sharing Document).

const ERRORS = new Map;
const ERROR1 = 'ERR-01';
const ERROR2 = 'ERR-02';
const ERROR3 = 'ERR-03';
const ERROR4 = 'ERR-04';

ERRORS.set(ERROR1, {
  code: 'ASD-001',
  details: 'Input Error : Organization name is not allowed to be an empty'
});

ERRORS.set(ERROR2, {
  code: 'ASD-002',
  details: 'Input Error : Organization description is not allowed to be an empty'
});

ERRORS.set(ERROR3, {
  code: 'ASD-003',
  details: 'Data Error : Invalid input attribute found'
});

ERRORS.set(ERROR4, {
  code: 'ASD-004',
  details: 'Connection Error : MongoDB is unable to connect'
});

module.exports = {
  ERRORS: ERRORS,
  ERROR1: ERROR1,
  ERROR2: ERROR2,
  ERROR3: ERROR3,
  ERROR4: ERROR4,
}