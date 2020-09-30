import React from 'react';
import StoreContext from './StoreContext';


class PresentedItem extends React.Component {


    render() {
        return (
            <StoreContext.Consumer>
                {(context) => {
                const item = context.items.find(el => {
                        return el.id == this.props.match.params.id
                    }) || {};
                return (
                    <div>
                <div>
                    {item.name} | ${item.price}
                </div>
                <div>
                    <img src={item.image} alt="Pic lost in Ether"/>
                </div>
                <div>
                    {item.description}
                </div>
            </div>

                )
                }}
            </StoreContext.Consumer>
        )
    }
}

export default PresentedItem;