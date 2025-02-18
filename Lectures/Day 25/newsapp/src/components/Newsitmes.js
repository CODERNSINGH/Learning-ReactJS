import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Newsitmes extends Component {
    static propTypes = {  }

    render() {
        let {title, description, imageurl} = this.props;

        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/" className="btn btn-sm btn-primary">Readmore</a>
                    </div>
                </div>
            </div>
        )
    }
}
