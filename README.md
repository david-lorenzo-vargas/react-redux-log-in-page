# LOG IN PAGE

## Description
Log in page built in React with SCSS modules. Users information fetch from a mock API using Promises, the state has been managed in Redux.

On the first render, a spinner will be rendered while fetching the users information from a mock API. Once the fetch has been success, the log in page will be rendered. If you know the credentials of a user that is already registered, enter the details on the input fields and click LOG IN button. If the credentials as OK a welcome page will be rendered welcoming the user by its name, in case the information summited is incorrect, the input will turn red and an error message will be rendered.

In case you are not registered, click on REGISTER button and a register form will be rendered. Enter your information in each input field and click REGISTER button. The page will redirect you to the first page where you will be able to enter you credentials and see the welcome page welcoming you by your name.

Did you forget your password? click on FORGOTTEN PASSWORD and enter your email. If the email is an existing user email, a message will render render 'CHECK YOUR EMAIL A NEW PASSWORD HAS BEEN SENT' in case the email is not an existing users email address, a message will render saying 'SORRY THIS EMAIL DOES NOT EXIST, PLEASE REGISTER' and a register button will render.

Click on REGISTER button to be redirected to register form, enter yor credential to register yourslef, click on REGISTER and you are ready to log in.

Try to log yourself with one of the following existing users:
1. **Username:** David Lorenzo **Email:** david-lorenzo@email.com **Password:** 123David
2. **Username:** John Doe **Email:** john-doe@mail.com **Password:** 123JohnDoe
3. **Username:** Arthur Smith **Email:** arthur.smith-email@email.com **Password:** thisisnotasecurepassword
4. **Username:** Mike Mikerson **Email:** mickey_m@myemail.com **Password:** mickeyMouse1972
5. **Username:** Donald Duke **Email:** d.duke@mail.com **Password:** 123456789D
6. **Username:** Tom Thanks **Email:** tom_thanks_you@email.com **Password:** Tom1Thanks2!

## Technologies
HTML, SCSS(modules, @keyframes), JavaScript, React, Redux, Babel, Webpack, Eslint, Stylelint

## Demo

Existing user Login in
![login1](https://user-images.githubusercontent.com/72414745/101411421-3dc43d00-38e1-11eb-84f6-e8d9c24b23d2.gif)

Entering wrong your credentials
![login2](https://user-images.githubusercontent.com/72414745/101411423-3ef56a00-38e1-11eb-894a-376aca4ed365.gif)

Existing user forgotten password
![login3](https://user-images.githubusercontent.com/72414745/101411424-3ef56a00-38e1-11eb-89bb-9bea7d504976.gif)

New user registration
![login4](https://user-images.githubusercontent.com/72414745/101411426-3f8e0080-38e1-11eb-89b0-4f6e3c9dee30.gif)

Non existing user needs to register because forgotten password suggests the user doing so 
![login5](https://user-images.githubusercontent.com/72414745/101411429-40269700-38e1-11eb-89ba-e7005e85bd43.gif)
