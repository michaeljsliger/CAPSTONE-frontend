import React from 'react';

class StoreItem extends React.Component {

    render() {
        return (
            <div>
                <div>
                    {this.props.obj.name}
                </div>
                <div>
                    <img src={this.props.obj.imgs[0]} alt="Pic lost in Ether"/>
                </div>
                <div>
                    {this.props.obj.description}
                </div>
            </div>
        )
    }
}

export default StoreItem;

