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
    // user_id: ???

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
                })
            }).then(() => {
                window.location.href = "/store"
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e, this.state)}>
                    <div>

                        <label htmlFor="item_name">Item Name:</label>
                        <input type="text"
                            name="item_name" id="item_name" required
                            onChange={(event) => this.handleNameChange(event.target.value)}
                        />
                        <label htmlFor="item_price">Item Price:</label>
                        <input type="number"
                            name="item_price" id="item_price" required
                            onChange={(event) => this.handlePriceChange(event.target.value)}
                        />
                        <label htmlFor="item_image_link">Link to an image:</label>
                        <input type="text"
                            name="item_image_link" id="item_image_link"
                            onChange={(event) => this.handleImageLinkChange(event.target.value)}
                        />
                        <label htmlFor="item_description">Item Description</label>;
                    <input type="text"
                            name="item_description" id="item_description"
                            onChange={(event) => this.handleDescChange(event.target.value)}
                        />
                    </div>
                    <button type="submit">Submit Item</button>
                </form>
                <div>
                    <h3>Your submission:</h3>
                    <div>
                        Name: {this.state.name}
                    </div>
                    <div>
                        Price: {this.state.price}
                    </div>
                    <div>
                        Link: {this.state.image_link}
                    </div>
                    <div>
                        Description: {this.state.description}
                    </div>
                </div>
            </div>
        )
    }
}

export default AddItemForm;
