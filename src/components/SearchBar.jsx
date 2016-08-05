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
        return (
            <div style={SearchBar.styles.div}>
                <h3>Search for an Artist</h3>
                <input
                    style={SearchBar.styles.input}
                    onChange={this.handleInputChange}
                    onKeyPress={this.handleKeyPress} />
            </div>
        );
    }
}

SearchBar.styles = {
    div: {
        margin: 30,
        textAlign: 'center',
    },
    input: {
        width: '60%',
    },
};

SearchBar.propTypes = {
    getAlbums: React.PropTypes.func.isRequired,
};

export default SearchBar;
