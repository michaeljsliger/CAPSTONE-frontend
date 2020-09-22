import React from 'react';
import tempStore from './tempStore';
import STORE from './StoreItem';

class Store extends React.Component {
    // LIST OF ITEMS
    render() {
        const contentArr = STORE.map(el => {
            return <StoreItem obj={el} />
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