# GitHubCodeBlock

GitHub-style Code Block Component

<a href="https://npmjs.org/package/github-code-block" title="View this project on NPM"><img src="https://badgen.net/npm/v/github-code-block" alt="NPM version" /></a>

### Install

```sh
npm install github-code-block
```

Or

```html
<!-- css -->
<link rel="stylesheet" href="https://unpkg.com/github-code-block/dist/style.css">
<!-- js -->
<script src="https://unpkg.com/github-code-block/dist/index.umd.js"></script>
```

### Use GitHubCodeBlock

```javascript
import GitHubCodeBlock from 'github-code-block'
import 'github-code-block/style'

function HelloWorldCodeBlock(props) {
    return (
        <GitHubCodeBlock code="echo 'hello world'" codeClassName="language-sh"/>
    )
}
```

### See Sample

- https://alchemy-works.github.io/GitHubCodeBlock/