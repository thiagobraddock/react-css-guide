### CSS INLINE

```js
const style = {color: 'orange', backgroundColor: 'blue'}
<h1 style={style}>
```

### CSS EXTERNO

```js
import './App.css';
```

### CSS MODULES

✅ Evitar usar hífen nos nomes das classes

```js
import styles from './App.module.css';
<h1 className={styles.titulo}>Teste</h1>
<p className={styles['App-link']}></p>
```

## Usar multiplas classes

- Usando array

```js
<div className={[styles.class1, styles.class2].join(' ')}>
```

- Usando template literals

```js
<div className={`${styles.class1} ${styles.class2}`}>
```

### CSS STYLED COMPONENTS
