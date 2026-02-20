import React, { useState, useEffect } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const [darkMode, setDarkMode] = useState(false)
    const [copySuccess, setCopySuccess] = useState(false)

    // Sync document body with dark mode so the whole page (including padding areas) is themed
    useEffect(() => {
        if (darkMode) {
            document.body.setAttribute('data-theme', 'dark')
            document.body.style.backgroundColor = '#212529'
            document.body.style.color = '#e9ecef'
        } else {
            document.body.removeAttribute('data-theme')
            document.body.style.backgroundColor = ''
            document.body.style.color = ''
        }
        return () => {
            document.body.removeAttribute('data-theme')
            document.body.style.backgroundColor = ''
            document.body.style.color = ''
        }
    }, [darkMode])

    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
    const charCount = text.length
    const charCountNoSpaces = text.replace(/\s/g, '').length
    const sentenceCount = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length
    const paragraphCount = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length
    const readingTime = (wordCount / 200).toFixed(2) 
    const darkModeStyle = {
        backgroundColor: darkMode ? '#212529' : 'white',
        color: darkMode ? '#e9ecef' : 'black',
        minHeight: '100vh',
        padding: '1.25rem',
        transition: 'background-color 0.2s ease, color 0.2s ease'
    }

    const textAreaStyle = {
        backgroundColor: darkMode ? '#343a40' : 'white',
        color: darkMode ? '#e9ecef' : 'black',
        border: darkMode ? '1px solid #495057' : '1px solid #ced4da',
        transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease'
    }

   
    const handleUpClick = () => {
        setText(text.toUpperCase())
    }

    const handleLoClick = () => {
        setText(text.toLowerCase())
    }

    const handleClear = () => {
        setText('')
    }

    const handleRemoveExtraSpaces = () => {
        setText(text.split(/[ ]+/).join(' '))
    }

    const handleCopyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(text)
            setCopySuccess(true)
            setTimeout(() => setCopySuccess(false), 2000)
        } catch (err) {
            console.error('Failed to copy text:', err)
        }
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div style={darkModeStyle}>
            <div className="container my-3 px-2 px-md-3">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 page-title-row mb-3">
                    <h1 className="mb-0 page-title">TextUtils - Word Counter</h1>
                    <button
                        className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} flex-shrink-0`}
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>

                <div className="mb-3">
                    <label htmlFor="textBox" className="form-label">
                        <strong>Enter your text below to analyze</strong>
                    </label>
                    <textarea
                        className="form-control"
                        id="textBox"
                        rows="5"
                        value={text}
                        onChange={handleChange}
                        placeholder="Start typing or paste your text here..."
                        style={textAreaStyle}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <h5>Text Transformations:</h5>
                    <div className="d-flex flex-wrap gap-2 text-transform-buttons">
                        <button className="btn btn-success" onClick={handleUpClick} disabled={text.length === 0}>
                            UPPERCASE
                        </button>
                        <button className="btn btn-success" onClick={handleLoClick} disabled={text.length === 0}>
                            lowercase
                        </button>
                        
                        <button className="btn btn-warning" onClick={handleRemoveExtraSpaces} disabled={text.length === 0}>
                            Remove Extra Spaces
                        </button>
                        
                        <button className="btn btn-danger" onClick={handleClear} disabled={text.length === 0}>
                            Clear Text
                        </button>
                        <button
                            className={`btn ${copySuccess ? 'btn-success' : 'btn-outline-success'}`}
                            onClick={handleCopyToClipboard}
                            disabled={text.length === 0}
                        >
                            {copySuccess ? '✓ Copied!' : 'Copy to Clipboard'}
                        </button>
                    </div>
                </div>

                <div className="container my-4">
                    <h2>Text Summary</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card mb-3" style={{ backgroundColor: darkMode ? '#343a40' : '#f8f9fa', color: darkMode ? 'white' : 'black' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Word Count</h5>
                                    <p className="card-text display-6">{wordCount}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-3" style={{ backgroundColor: darkMode ? '#343a40' : '#f8f9fa', color: darkMode ? 'white' : 'black' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Character Count</h5>
                                    <p className="card-text display-6">{charCount}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-3" style={{ backgroundColor: darkMode ? '#343a40' : '#f8f9fa', color: darkMode ? 'white' : 'black' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Characters (No Spaces)</h5>
                                    <p className="card-text display-6">{charCountNoSpaces}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-3" style={{ backgroundColor: darkMode ? '#343a40' : '#f8f9fa', color: darkMode ? 'white' : 'black' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Sentences</h5>
                                    <p className="card-text display-6">{sentenceCount}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-3" style={{ backgroundColor: darkMode ? '#343a40' : '#f8f9fa', color: darkMode ? 'white' : 'black' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Paragraphs</h5>
                                    <p className="card-text display-6">{paragraphCount}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-3" style={{ backgroundColor: darkMode ? '#343a40' : '#f8f9fa', color: darkMode ? 'white' : 'black' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Reading Time</h5>
                                    <p className="card-text display-6">{readingTime} min</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-4">
                    <h2>Preview</h2>
                    <div className="card" style={{ backgroundColor: darkMode ? '#343a40' : '#f8f9fa', color: darkMode ? 'white' : 'black' }}>
                        <div className="card-body">
                            <p className="card-text">{text.length > 0 ? text : 'Nothing to preview. Enter some text above.'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}