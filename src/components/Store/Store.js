import React from 'react';
import STORE from './tempStore';
import StoreItem from './StoreItem';
import { Link } from 'react-router-dom';
import './Store.css';


class Store extends React.Component {
    // LIST OF ITEMS
    render() {
        const contentArr = STORE.map(el => {
            return <li className="store-list-item"><Link to={`/store/${el.id}`} ><StoreItem obj={el} /></Link></li>
        })
        
        return (
            <div className="store-container">
            <h2>Store</h2>
                <ul className="store-results">
                    {contentArr}
                </ul>
            </div>
        )
    }
}

export default Store;