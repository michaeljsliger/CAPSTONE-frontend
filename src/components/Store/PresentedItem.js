import React from 'react';
import API_SERVICES from '../../services/api-services';
import StoreContext from './StoreContext';
import NotFound from '../NotFound/NotFound';

class PresentedItem extends React.Component {


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
                    <div>
                <div>
                    {item.name} | ${item.price}
                </div>
                <div>
                    Posted by {item.userNickname}
                </div>

                <div>
                    <img src={item.image} alt="Pic lost in Ether"/>
                </div>
                <div>
                    {item.description}
                </div>
                <div>
                    <button onClick={() => API_SERVICES.deleteItemByID(this.props.match.params.id)}>Delete</button>
                </div>
            </div>

                )
                }}
            </StoreContext.Consumer>
        )
    }
}

export default PresentedItem;