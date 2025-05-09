import React, { useState } from "react";


// Important in js if we want to give style we use camel caseing method 
export default function About() {
    // let Darkmode = {
    //     color : 'white',
    //     backgroundColor: 'black'
    // }
    // for btn
    const[btntext,setbtntext] = useState("Enable Dark Mode")

    const [Darkmode, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const toggleStyle = () => {
        if (Darkmode.color === 'white') {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white',
                // border: '1px solid black'
            })

            setbtntext('Enable Dark Mode')
        }

        else {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })

            setbtntext('Enable Light Mode')


        }

    }




    return (
        <div className="container" style={Darkmode}>

            <h1>About Us</h1>
            <div className="accordion my-3" id="accordionPanelsStayOpenExample" style={Darkmode}>
                <div className="accordion-item" style={Darkmode}>
                    <h2 className="accordion-header">
                        <button style={Darkmode} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={Darkmode}>
                    <h2 className="accordion-header">
                        <button style={Darkmode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={Darkmode}>
                    <h2 className="accordion-header">
                        <button style={Darkmode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">

                <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
            </div>
        </div>
    )
}