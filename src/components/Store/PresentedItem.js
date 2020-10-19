import React from 'react';
import { Link } from 'react-router-dom';
import API_SERVICES from '../../services/api-services';
import StoreContext from './StoreContext';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

class PresentedItem extends React.Component {
    state = {
        error: null,
        contact_clicked: false,
    }

    handleDeleteClick = async (event, id) => {
        event.preventDefault();

        const results = await API_SERVICES.deleteItemByID(id);

        if (results.status == 401) {
            this.setState({ error: 'Only the user who posted this item may delete it' })
        } else {
            this.setState({ error: '' })
        }
    }

    handleContactClick = () => {
        this.setState({contact_clicked: !this.state.contact_clicked})
    }

    render() {
        return (
            <StoreContext.Consumer>
                {(context) => {
                    const item = context.items.find(el => {
                        return el.id == this.props.match.params.id
                    });
                    if (!item) {
                        return (
                            <NotFound />
                        )
                    }

                    return (
                        <div className="store-list-item-nested">
                            <div className="go-back-button">
                                <Link to="/store">
                                    <button>Go Back</button>
                                </Link>
                            </div>
                            <div className="store-list-item-header">
                                <h2>
                                    <div>
                                        {item.name}
                                    </div>
                                    <div>
                                        ${item.price}
                                    </div>                                </h2>
                            </div>
                            <div className="store-list-item-image">
                                <img src={item.image} alt="Pic lost in Ether" />
                            </div>
                            <div className="store-list-item-desc">
                                <p>
                                    {item.description}
                                </p>
                            </div>
                            <div>
                                Posted by {item.userNickname}
                            </div>
                            {this.state.error && <div className="error">{this.state.error}</div>}
                            <div className="delete-button-container">
                                <button onClick={(event) => this.handleDeleteClick(event, this.props.match.params.id)}>Delete</button>
                            </div>
                            <div className="footer-container">
                                <button onClick={() => this.handleContactClick()}>
                                    Contact
                                </button>
                                <div>
                                    {this.state.contact_clicked && <div>
                                        <h5>{item.userNickname}</h5>
                                        <h6>#: 303-303-3030</h6>
                                    <h6>email: {item.userNickname}@gmail.com</h6>
                                        </div>}
                                </div>
                            </div>
                        </div>


                    )
                }}
            </StoreContext.Consumer>
        )
    }
}

export default PresentedItem;