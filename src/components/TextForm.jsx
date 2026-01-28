import React, { useState, useEffect } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const [darkMode, setDarkMode] = useState(false)
    const [copySuccess, setCopySuccess] = useState(false)

  
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
    const charCount = text.length
    const charCountNoSpaces = text.replace(/\s/g, '').length
    const sentenceCount = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length
    const paragraphCount = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length
    const readingTime = (wordCount / 200).toFixed(2) 
    const darkModeStyle = {
        backgroundColor: darkMode ? '#212529' : 'white',
        color: darkMode ? 'white' : 'black',
        minHeight: '100vh',
        padding: '20px'
    }

    const textAreaStyle = {
        backgroundColor: darkMode ? '#343a40' : 'white',
        color: darkMode ? 'white' : 'black',
        border: darkMode ? '1px solid #495057' : '1px solid #ced4da'
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

    const handleCapitalize = () => {
        const words = text.split(' ')
        const capitalized = words.map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' ')
        setText(capitalized)
    }

    const handleTitleCase = () => {
        const words = text.toLowerCase().split(' ')
        const titleCase = words.map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')
        setText(titleCase)
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

    const handleReverseText = () => {
        setText(text.split('').reverse().join(''))
    }

    const handleRemoveNumbers = () => {
        setText(text.replace(/\d/g, ''))
    }

    const handleRemoveSpecialChars = () => {
        setText(text.replace(/[^a-zA-Z0-9\s]/g, ''))
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div style={darkModeStyle}>
            <div className="container my-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1 className="mb-0">TextUtils - Word Counter</h1>
                    <button
                        className={`btn ${darkMode ? 'btn-light' : 'btn-dark'}`}
                        onClick={toggleDarkMode}
                    >
                        {darkMode ?  'Light Mode' :  'Dark Mode'}
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
                    <div className="d-flex flex-wrap gap-2">
                        <button className="btn btn-success" onClick={handleUpClick} disabled={text.length === 0}>
                            UPPERCASE
                        </button>
                        <button className="btn btn-success" onClick={handleLoClick} disabled={text.length === 0}>
                            lowercase
                        </button>
                        <button className="btn btn-primary" onClick={handleCapitalize} disabled={text.length === 0}>
                            Capitalize
                        </button>
                        <button className="btn btn-primary" onClick={handleTitleCase} disabled={text.length === 0}>
                            Title Case
                        </button>
                        <button className="btn btn-warning" onClick={handleRemoveExtraSpaces} disabled={text.length === 0}>
                            Remove Extra Spaces
                        </button>
                        <button className="btn btn-info" onClick={handleReverseText} disabled={text.length === 0}>
                            Reverse Text
                        </button>
                        <button className="btn btn-secondary" onClick={handleRemoveNumbers} disabled={text.length === 0}>
                            Remove Numbers
                        </button>
                        <button className="btn btn-secondary" onClick={handleRemoveSpecialChars} disabled={text.length === 0}>
                            Remove Special Characters
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