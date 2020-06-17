# React Request Hooks

## 🛠 WORK IN PROGRESS 🛠

### React Hooks for fetching and mutating data.

A simple library that provides React hooks for making requests and accessing a bunch of useful states for the request made.

## 🗺 Roadmap

- [x] query hook to instantly make a GET request to a given url
- [x] query hook to make a GET request to a given url when an execution function is called
- [ ] mutation hook to make a POST/PUT/DELETE request to a given url when an execution function is called
- [ ] tests
- [ ] publish to npm
- [ ] caching data?
- [ ] pagination?
- [ ] other fun stuff :)

---

## Examples

#### useQuery:

```javascript
import { useQuery } from 'react-request-hooks';

function InstantQuery() {
  const { isLoading, isSuccessful, hasError, data } = useQuery('https://some-cool-url');

  return (
    <>
      {isLoading && <SomeCoolLoader>}
      // and so on
    </>
  );
}
```

#### useQueryLater:

```javascript
import { useQueryLater } from 'react-request-hooks';

function QueryLater() {
  const [{ isLoading, isSuccessful, hasError, data }, executeQuery] = useQueryLater('https://some-cool-url');

  const handleClick = () => {
    executeQuery();
  };

  return (
    <>
      <button onClick={handleClick}>
        Fetch data!
      </button>
      {isLoading && <SomeCoolLoader>}
      // and so on
    </>
  );
}
```

---

---

Made with support and encouragement from [Lo Axhamre](https://github.com/axhamre).
