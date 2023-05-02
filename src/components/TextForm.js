import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("");
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    let countChar = 0,
        countCons = 0;

    // Function to count Vowels:

    const handleVoClick = () => {
        for (count = 0; count <= text.length; count++) {
            if (text.charAt(count).match(/[aeiouAEIOU]/)) {
                countChar++;
                setCount(countChar);
            }
        }
        props.showAlert(`No. of Vowels are: ${countChar}`, "success");

        // console.log("No. of Vowels are: " + countChar);
    };

    // Function to count Consonants:

    const handleCoClick = () => {
        for (count1 = 0; count1 <= text.length; count1++) {
            if (
                text
                    .charAt(count1)
                    .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
            ) {
                countCons++;
                setCount1(countCons);
            }
        }
        props.showAlert(`No. of Consonants are: ${countCons}`, "success");
    };


    const replacecasefunc = () => {
        let existing_text = prompt("Enter which word to replace : ");
        let replaced_text = prompt("Enter New Text");
        setText(text.replaceAll(existing_text, replaced_text))
        props.showAlert("Text has been replaced Successfully", "success");
    }
    const HandleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Text is Converted to Uppercase Successfully", "success");
    }

    const HandleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Text is Converted to Lowercase Successfully", "success");
    }
    const ClearText = () => {
        let newtext = "";
        setText(newtext);
        props.showAlert("Text is Cleared Successfully", "success");

    }
    const HandleSeClick = () => {
        let str = text.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        let newtext = str.join(' ');
        setText(newtext);
        props.showAlert("Text is Converted to SentenceCase Successfully", "success");

    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking", "success");

    }



    const HandleOnChange = (event) => {
        setText(event.target.value);
    }


    return (
        <>
            <div className="container" style={{color: props.mode==='dark'? 'white':'rgb(20, 0, 79)'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'? 'grey':'white', color: props.mode==='dark'? 'white':'#190060'}} onChange={HandleOnChange} id="MyBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={HandleSeClick}>Convert to SentenceCase</button>
                <button className="btn btn-primary mx-2" onClick={ClearText}>ClearText</button>
                <button onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
                <button className="btn btn-primary mx-2" onClick={replacecasefunc}>Find & Replace</button>
                <button className="btn btn-primary mx-1" onClick={handleVoClick}>Count no. of Vowels</button>
                <button className="btn btn-primary mx-1" onClick={handleCoClick}>Count no. of Consonants</button>
            </div>

            <div className="container my-2" style={{color: props.mode==='dark'? 'white':'rgb(20, 0, 79)'}}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h3>Text Preview</h3>
                <p>{text.length>0?text:"Enter Something to preview it here"}</p>
                <p>No. of Vowels: {count} </p>
                <p>No. of Consonants: {count1}</p>
            </div>
        </>
    )
}
