import React, { useState } from 'react'
import styles from './style.module.css'
import ClipboardCopyButton from './ClipboardCopyButton'
import clipboardCopy from './clipboardCopy'

export default function GitHubCodeBlock(props) {

    const [buttonVisible, setButtonVisible] = useState(false)

    function onMouseEnter() {
        setButtonVisible(true)
    }

    function onMouseLeave() {
        setButtonVisible(false)
    }

    const code = props.code || ''
    const codeClassName = props.codeClassName || ''

    return (
        <div className={styles.container} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <pre>
                <code className={codeClassName}>{props?.code || ''}</code>
            <ClipboardCopyButton className={buttonVisible ? '' : 'hidden'} onClick={() => clipboardCopy(code)}/>
            </pre>
        </div>
    )
}