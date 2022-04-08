import React, { createElement as h, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import GitHubCodeBlock from './lib/GitHubCodeBlock.jsx'

function App(props) {
    const [code, setCode] = useState('echo "hello world"')

    useEffect(() => {
        const codeInputRef = document.querySelector('#code-input')
        codeInputRef.value = code
        codeInputRef.addEventListener('input', (ev) => {
            setCode(ev.target.value)
        })
    }, [])

    return h('div', null, h(GitHubCodeBlock, { code, codeClassName: 'language-sh' }))
}

createRoot(document.querySelector('#code-block')).render(h(App))
