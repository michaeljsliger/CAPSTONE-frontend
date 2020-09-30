import React from 'react';
import STORE from './tempStore';
import StoreItem from './StoreItem';
import { Link } from 'react-router-dom';
import StoreContext from './StoreContext';
import './Store.css';


class Store extends React.Component {
    // LIST OF ITEMS
    render() {
        return (
            <StoreContext.Consumer>
                {(context) => {
                    const contentArr = context.items.map((el, index) => {
                        return <li key={index} className="store-list-item"><Link to={`/store/${el.id}`} ><StoreItem obj={el} /></Link></li>
                    })

          return (     
            < div className = "store-container" >
            <h2>Store</h2>
                <ul className="store-results">
                    {contentArr}
                </ul>
            </div>
            )}
}
            </StoreContext.Consumer >
        )
    }
}

export default Store;