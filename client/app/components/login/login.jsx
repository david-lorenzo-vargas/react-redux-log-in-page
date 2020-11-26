import React from 'react';
import Input from '../input';
import Button from '../button';

const Login = () => (
  <>
    <Input placeHolder="user name" type="text" />
    <Input placeHolder="email" type="text" />
    <Input placeHolder="password" type="password" />
    <Button theme="blue" text="Log In" />
  </>
);

export default Login;
