# test-app

## Project setup

```
npm install
npm install sass-loader -D(if needed)
npm install node-sass -D(if needed)
```

## firebase.js

```javascript
import { initializeApp } from 'firebase/app';

const firebaseConfig = {"YOUR API KEY HERE"};

export const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
