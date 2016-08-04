import React from 'react';
class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.props.getAlbums(this.state.searchTerm);
        }
    }

    handleInputChange(event) {
        this.setState({
            searchTerm: event.target.value,
        });
    }

    render() {
        return (<input
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            />);
    }
}

SearchBar.propTypes = {
    getAlbums: React.PropTypes.func.isRequired,
};

export default SearchBar;
