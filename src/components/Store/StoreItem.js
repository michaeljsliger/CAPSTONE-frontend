import React from 'react';

class StoreItem extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    {this.props.obj.name}
                </div>
                <div>
                    {this.props.obj.description}
                </div>
            </div>

        )
    }
}

export default StoreItem;
