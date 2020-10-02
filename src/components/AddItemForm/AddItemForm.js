import React from 'react';
import API_SERVICES from '../../services/api-services';

class AddItemForm extends React.Component {
    // must be logged in, will handle that in routing
    // price, image link, description, name
    state = {
        name: "",
        price: 0,
        description: "",
        image_link: "",
    }

    handleNameChange = (value) => {
        this.setState({ name: value })
    }
    handlePriceChange = (value) => {
        this.setState({ price: value })
    }
    handleImageLinkChange = (value) => {
        this.setState({ image_link: value })
    }
    handleDescChange = (value) => {
        this.setState({ description: value })
    }
    handleSubmit = (event, state) => {
        event.preventDefault();

        return API_SERVICES.submitPostToAPI(state)
            .then(json => {
                this.setState({
                    name: '',
                    price: 0,
                    description: '',
                    image_link: ''
                })})
            
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e, this.state)}>
                    <input type="text"
                        name="item_name" id="item_name" required
                        onChange={(event) => this.handleNameChange(event.target.value)}
                    />
                    <input type="number" 
                    name="item_price" id="item_price" required
                        onChange={(event) => this.handlePriceChange(event.target.value)}
                    />
                    <input type="text" 
                        name="item_image_link" id="item_image_link" 
                        onChange={(event) => this.handleImageLinkChange(event.target.value)}
                    />
                    <input type="text" 
                        name="item_description" id="item_description" 
                        onChange={(event) => this.handleDescChange(event.target.value)}
                    />
                    <button type="submit">Submit Item</button>
                </form>

                {this.state.name} | 
                {this.state.price} | 
                {this.state.image_link} |
                {this.state.description}
            </div>
        )
    }
}

export default AddItemForm;
