import React, {useState} from "react";


export default function TextForm(props) {
    const [text, setText] = useState('Enter text Here 2'); // text is var and value is enter your text here and we will use settext to update that reaseon is text = "dkfjldkj" now allowed in react
    // setText("Hi how are You")
    // text = "New text" //cannot be use worong way
    // setText('New text') // correct way



    const handleupclick = () =>{
        console.log("Uppercase was clicked with text : " + text)
        let newtext = text.toUpperCase();
        setText(newtext)

        // setText("You have clicked on handleUpClick")

    }
    const handlelowerclick = () =>{
        console.log("Lower was clicked with text : " + text)
        let newtext = text.toLowerCase();
        setText(newtext)

        // setText("You have clicked on handleLowerClick")

    }
    const handleOnChange = (event) =>{
        console.log("Value is updated")
        setText(event.target.value) // so on change is important otherwise you'll not able to write so we have to use on change
    }
    return ( 

        <>

        <div className="container">
            <h1>{props.heading}</h1>
           
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="5"></textarea> {/* value = text is state variable whenever use change vlaue == text but now onchange will run */}

                </div>
                
                
                <button type="submit" className="btn btn-primary mx-2" onClick={handleupclick}>Convert To Uppercase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handlelowerclick}>Convert To Lowercase</button>
            
        </div>
        <div className="container my-3">
            <h1>Your text Summary</h1>
            {/* <p>33ee words and 324234 characters</p> */}
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p> Average time to Read {text.split(" ").length * 0.33} Seconds</p>
            <h2>Preview :- </h2>
            <p className="my-2">{text}</p>
        </div>
        </>
    );
}