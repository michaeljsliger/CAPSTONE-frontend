import React from 'react';
import './footer.css';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer-container">
                <a href="/contact"><button>
                    Contact
                    </button>
                </a>
            </div>
        )
    }
}

export default Footer;