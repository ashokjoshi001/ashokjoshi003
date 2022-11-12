import React, {useState} from 'react'


export default function Textform(props) {
    const handleUppClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleclearClick = () =>{
        // let newText = text.toLowerCase();
        setText("");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'dark' ? 'gray' : 'white', color:props.mode === 'dark' ? 'white' : '#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>  
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUppClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert to Lowercase</button>
            <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
            <button className='btn btn-primary mx-2' onClick={handleclearClick}>Clear</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy</button>
        </div>
        <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Your text Summary</h2>
            <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
            <p><b>{(text.split(" ").length) * 0.008}</b> Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}