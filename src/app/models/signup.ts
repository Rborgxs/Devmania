export type SignupStep =
  | 'welcome'
  | 'email'
  | 'verification'
  | 'password'
  | 'master'
  | 'confirmation';

export interface SignupData {
  authProvider: 'google' | 'github' | null;
  email: string;
  verificationCode: string;
  password: string;
  masterId: string | null;
  name: string;
  username: string;
}