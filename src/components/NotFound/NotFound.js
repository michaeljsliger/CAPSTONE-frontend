import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h3>
                        404 NOT FOUND
                        </h3>
                    <div>
                        <p>Either the item does not exist, or the application is not connected to the server</p>
                    </div>
                </div>
                <div>
                    <Link to="/store"><button>Go Back</button></Link>
                </div>
                <div>
                    <Link to="/store/add-item"><button>Add an Item</button></Link>
                </div>

            </div>
        )
    }
}