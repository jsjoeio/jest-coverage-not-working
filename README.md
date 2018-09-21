This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Jest Coverage Report Error
To reproduce error,
  1. run `yarn test`
  2. look at coverage report for 'function.js'. Uncovered Line #s 3

#### Expected
In our file, line 3 reads:
```javascript
throw new TypeError('capitalize() only accepts strings.');
```

Now if we look at our unit test, we expect our function to throw that same error.

### Actual
It says that line 3 is not covered in `function.js`. I don't understand why it says it's not covered. What am I doing wrong?
