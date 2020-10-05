import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component {
    render() {
        return (
            <div>
                <div>
                    404 NOT FOUND.
                </div>
                <Link to="/store"><button>Go Back</button></Link>
            </div>
        )
    }
}