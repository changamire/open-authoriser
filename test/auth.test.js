import { decodeToken } from '../src/auth.js';

describe('auth', () => {
  it('should successfully decode a token', () => {
    decodeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ii9yb290L3Jlcy9rZXlzL3NlY3JldDcua2V5In0.eyJpYXQiOjE1NzQ2ODYzNjcsInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNTc0NzcyNzY3fQ.GOknH9lTP5OVwD1twpARtqxiBuh_FzkEZup4ns_6QhY');
  });
});