import React from 'react';
import './home.css';

class Home extends React.Component {

    render() {
        return (
            <div className="home-container">

                <h2>Home</h2>
                <p>Sell your products here!</p>
                <br />
                <p>This is a fullstack application built by Michael Sliger</p>
                <p>The frontend is built in React, the server is built in Node.js, and the database used is Postgres</p>
                <br />
                <p>The concept is straightforward, but highly applicable.</p>
                <p>
                    It is meant to display
                an understanding of frontend/backend communication, </p>
                <p>
                    and displaying the information retrieved
                    from the database in a clean, practical way.
            </p>
                <br />
                <p>
                    Authenticated users can add, delete, and view individual items.
                </p>
                <p>
                    There is a list of already registered users on the login page, to use and to test with.
                </p>


            </div>
        );
    }
}

export default Home;