import React from 'react';
import API_SERVICES from '../../services/api-services';
import './addItemForm.css';

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

        if (!this.state.image_link.split(':')[0].includes('https')) {
            alert('Image must be a correctly formatted link')
            return undefined 
        }

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
                <h2>Add an Item</h2>
                <form onSubmit={(e) => this.handleSubmit(e, this.state)}>
                    <div>
                        <div className="input-container">
                            <label htmlFor="item_name">Item Name:</label>
                            <input type="text"
                                name="item_name" id="item_name" required
                                placeholder="name"
                                onChange={(event) => this.handleNameChange(event.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="item_price">Item Price:</label>
                            <input type="number"
                                name="item_price" id="item_price" required
                                placeholder={9}
                                onChange={(event) => this.handlePriceChange(event.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="item_image_link">Link to an image:</label>
                            <input type="text"
                                name="item_image_link" id="item_image_link"
                                placeholder="https://----.jpg"
                                onChange={(event) => this.handleImageLinkChange(event.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="item_description">Item Description</label>
                            <input type="text"
                                name="item_description" id="item_description"
                                placeholder="lorem ipsum"
                                onChange={(event) => this.handleDescChange(event.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit">Submit Item</button>
                </form>
                <div>
                    <h3>Your submission:</h3>
                    <div>
                        <p>
                            Name:
                        </p>
                        <p>
                            {this.state.name}
                        </p>
                    </div>
                    <div>
                        <p>
                            Price:
                        </p>
                        <p>
                            {this.state.price}
                        </p>
                    </div>
                    <div>
                        <p>
                            Link:
                            </p>
                        <p>
                            {this.state.image_link}
                        </p>
                    </div>
                    <div>
                        <p>
                            Description:
                        </p>
                        <p>
                            {this.state.description}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddItemForm;
