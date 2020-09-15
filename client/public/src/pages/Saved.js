import React from "react";
import API from "../utils/API";
import Results from "../components/Results"

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: []
        }
    }

    componentWillMount() {
        API.getBooks().then(
            (response) => {
                this.setState({savedBooks: response.data});
            }
        ) .catch(
            (err) => {
                console.log("Saved Books error", err);
            }
        );
    }

    render() {
        return(
            <main>
                <Results saveBooks={this.state.savedBooks} path={this.props.match.path} />
            </main>
        );
    }
}

export default Saved;