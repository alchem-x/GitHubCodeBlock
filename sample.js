await loadJs('https://unpkg.com/react@17.0.2/umd/react.production.min.js')
await loadJs('https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js')
await loadJs('https://unpkg.com/github-code-block/dist/index.umd.js')
await loadCss('https://unpkg.com/github-code-block/dist/style.css')

function App(props) {
    const [code, setCode] = React.useState('echo "hello world"')

    React.useEffect(() => {
        const codeInputRef = document.querySelector('#code-input')
        codeInputRef.value = code
        codeInputRef.addEventListener('input', (ev) => {
            setCode(ev.target.value)
        })
    }, [])

    return React.createElement('div', null, React.createElement(GitHubCodeBlock, { code, }))
}

ReactDOM.render(React.createElement(App), document.querySelector('#code-block'))
