# React Request Hooks

## 🛠 WORK IN PROGRESS 🛠

### React Hooks for fetching and mutating data with axios.

In short the ambition is to create a more simple alternative to libs like React Query. This will provide React hooks to perform queries or mutations with `axios`. The returned value is an object with useful states (`isLoading`, `isSuccessful`, `hasError` and `data`). In those cases where you don't want to make the request right after first render a function to trigger a request is also returned, as the second item in an array, where the state object is the first item.

### 🗺 Roadmap

- [ ] query hook to instantly make a GET request to a given url
- [ ] query hook to make a GET request to a given url when an execution function is called
- [ ] mutation hook to make a POST/PUT/DELETE request to a given url when an execution function is called
- [ ] tests
- [ ] publish to npm
- [ ] caching data?
- [ ] pagination?
- [ ] other fun stuff :)

---

Made with support and encouragement from [Lo Axhamre](https://github.com/axhamre).
