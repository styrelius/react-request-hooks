# React Request Hooks

## 🛠 WORK IN PROGRESS 🛠

### React Hooks for fetching and mutating data.

A simple library that provides React hooks for making requests and accessing a bunch of useful states for the request made.

## 🗺 Roadmap

- [x] query hook to instantly make a GET request to a given url
- [x] query hook to make a GET request to a given url when an execution function is called
- [x] mutation hook to make a POST/PUT/DELETE request to a given url when an execution function is called
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
      {isLoading && <SomeCoolLoader />}
      // and so on
    </>
  );
}
```

#### useQueryLater:

```javascript
import { useQueryLater } from 'react-request-hooks';

function QueryWhenISaySo() {
  const [{ isLoading, isSuccessful, hasError, data }, executeQuery] = useQueryLater(
    'https://some-cool-url',
  );

  return (
    <>
      <button onClick={executeQuery}>Fetch data!</button>
      {isLoading && <SomeCoolLoader />}
      // and so on
    </>
  );
}
```

#### useMutation:

```javascript
import { useMutation } from 'react-request-hooks';

function MutateWhenISaySo() {
const [{ isLoading, isSuccessful, hasError, data }, executeMutation] = useMutation({
  method: 'POST';
  url:'https://some-cool-url',
  data: {
    firstName: 'Cool',
    lastName: 'McCool'
  }; //'data' is optional
  headers: {
    {'X-Requested-With': 'XMLHttpRequest'}
  }, //'headers' is optional
  urlParams: {
    someParam: 'Param'
  } //'urlParams' is optional
});

  return (
    <>
      <button onClick={executeMutation}>Create new item in database!</button>
      {isLoading && <SomeCoolLoader />}
      // and so on
    </>
  );
}
```

---
