import React from 'react'


export default function alert(props) {
    <>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>sucsess</strong> {props.alertmassage}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </>
}