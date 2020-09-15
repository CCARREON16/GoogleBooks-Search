import React from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm"
import Results from "../components/Results"

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            bookData: []
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(change) {
        change.preventDefault();
        this.setState({bookInput: change.target.value})
            }

            handleSearchClick(event) {
                event.preventDefault();
                API.searchBooks(this.state.bookInput)
                .then(
                    (response) => {
                        this.setState({bookData: response.data});
                        this.setState({bookInput: ""});
            }
        );
    }

    render() {
        return(
            <main>
                <SearchForm handleFormChange= {this.handleFormChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.bookData.length > 0 )?
                    <Results bookData= {this.state.bookData} path= {this.props.match.path} /> : null    
            }
            </main>
        );
    }
}

export default Search;