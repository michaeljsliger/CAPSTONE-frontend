import React from 'react';

class StoreItem extends React.Component {

    render() {
        return (
            <div>
                <div>
                    {this.props.obj.name} | ${this.props.obj.price}
                </div>
                <div>
                    <img src={this.props.obj.image} alt="Pic lost in Ether" />
                </div>
                <div>
                    {this.props.obj.description}
                </div>
                <div>
                    Posted by {this.props.obj.userNickname}
                </div>
            </div>
        )
    }
}

export default StoreItem;

