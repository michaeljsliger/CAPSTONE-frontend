import React from 'react';
import STORE from './tempStore';
import StoreContext from './StoreContext';


class PresentedItem extends React.Component {


    render() {
        console.log(this.props.match.params.id);
        return (
            <StoreContext.Consumer>
                {(context) => {
                    const item = context.items.find(el => {
                        return el.id === this.props.match.params.id
                    }) || {};
                    console.log(context.items);
                    console.log(item);
                return (
                    <div>
                <div>
                    {item.name}
                </div>
                <div>
                    {/* <img src={item.imgs[0]} alt="Pic lost in Ether"/> */}
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