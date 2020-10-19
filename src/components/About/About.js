import React from 'react';
import './about.css';

class About extends React.Component {

    render() {
        return (
            <div className="about-container">
            <h2>About</h2>
            <p>
                This is a framework for loading a basic UI regarding a potential store.
                </p>
                <br />
                <p>
                Currently, all items are merely satire, but allow users the option to add, view, and delete items. 
                </p>
                <p>
                Users also may view who posted the item, and get access to their basic, example contact info so that they may inquire about actually purchasing the item.
                </p>
                <br />
                <p>
                So, give it a whirl, log in as one of the test users, and see the Satire Store items.
            </p>
        </div>
        );
    }
}

export default About;