# basic-auth

## Links:

[Heroku link](https://bz-basic-auth.herokuapp.com/) <br>

#### MongoDB URI

MONGODB_URI=mongodb+srv://bahazghayar:0000@cluster0.vfuh2.mongodb.net/auth?retryWrites=true&w=majority <br>

[GitHub action link](https://github.com/bahazghayar/basic-auth/actions) <br>

[Pull request link](https://github.com/bahazghayar/basic-auth/pull/1) <br>

### For working on the same project:

1. clone the repo
2. install the dependencies `npm i express dotenv cors mongoose morgan jest base-64 bcrypt `
3. change the package.json file to
                        "scripts": {
                        "start": "node index.js",
                        "watch": "nodemon",
                        "test-watch": "jest --watchAll",
                        "test": "jest",
                        "lint": "eslint '\*_/_.js'"
                        }

# UML

![api-server](assets/basic-auth.png)


    
    