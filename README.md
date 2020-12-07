# LOG IN PAGE

## Description
Log in page built in React with SCSS modules. Users information fetch from a mock API using Promises, the state has been managed in Redux.

On the first render, a spinner will be rendered while fetching the users information from a mock API. Once the fetch has been success, the log in page will be rendered. If you know the credentials of a user that is already registered, enter the details on the input fields and click LOG IN button. If the credentials as OK a welcome page will be rendered welcoming the user by its name, in case the information summited is incorrect, the input will turn red and an error message will be rendered.

In case you are not registered, click on REGISTER button and a register form will be rendered. Enter your information in each input field and click REGISTER button. The page will redirect you to the first page where you will be able to enter you credentials and see the welcome page welcoming you by your name.

Did you forget your password? click on FORGOTTEN PASSWORD and enter your email. If the email is an existing user email, a message will render render 'CHECK YOUR EMAIL A NEW PASSWORD HAS BEEN SENT' in case the email is not an existing users email address, a message will render saying 'SORRY THI EMAIL DOES NOT EXISTS, PLEASE REGISTER' and a register button will render.

Click on REGISTER button to be redirected to register form, enter yor credential to register yourslef, click on REGISTER and you are ready to log in.

## Technologies
HTML, SCSS(modules, @keyframes), JavaScript, React, Redux, Babel, Webpack, Eslint, Stylelint

## Demo
