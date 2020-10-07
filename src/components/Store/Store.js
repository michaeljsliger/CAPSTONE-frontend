import React from 'react';
import StoreItem from './StoreItem';
import { Link } from 'react-router-dom';
import StoreContext from './StoreContext';
import Footer from '../Footer/Footer';
import './Store.css';
import NotFound from '../NotFound/NotFound';


class Store extends React.Component {
    // LIST OF ITEMS
    render() {
        return (
            <StoreContext.Consumer>
                {(context) => {
                    const contentArr = context.items.map((el, index) => {
                        return <li key={index} className="store-list-item"><Link to={`/store/${el.id}`} className="list-item-link"><StoreItem obj={el} /></Link></li>
                    }) ||  [];

                    
                    return (
                        < div className="store-container" >
                            <h2>Store</h2>
                            <ul className="store-results">
                                {contentArr}
                            </ul>
                            <div className="store-list-add-box">
                                <div className="add-item-button">
                                    <Link to="/store/add-item"><button>Add your own item!</button></Link>
                                </div>
                            </div>
                            <div>
                                <Footer />
                            </div>
                        </div>
                    )
                }
                }
            </StoreContext.Consumer >
        )
    }
}

export default Store;