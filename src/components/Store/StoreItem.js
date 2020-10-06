import React from 'react';

class StoreItem extends React.Component {

    render() {
        return (
            <div className="store-list-item-nested">
                <div className="store-list-item-header">
                    <h2>
                        <div>
                            {this.props.obj.name}
                        </div>
                        <div>
                        ${this.props.obj.price}
                        </div>
                    </h2>
                </div>
                <div className="store-list-item-image">
                    <img src={this.props.obj.image} alt="Pic lost in Ether" />
                </div>
                <div className="store-list-item-desc">
                    <p>
                        {this.props.obj.description}
                    </p>
                </div>
                <div className="store-list-item-footer">
                    Posted by {this.props.obj.userNickname}
                </div>
            </div>
        )
    }
}

export default StoreItem;

