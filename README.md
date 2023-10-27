# test-app

## Project setup

```
npm install
npm install sass-loader -D(if needed)
npm install node-sass -D(if needed)
npm install -S @fawmi/vue-google-maps (if needed)
```

## src/firebase.js

```javascript
import { initializeApp } from 'firebase/app';

const firebaseConfig = {"YOUR API KEY HERE"};

export const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
```

## src/googlemapkey.js

```javascript
export const mapkey = "YOUR API KEY HERE";
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
