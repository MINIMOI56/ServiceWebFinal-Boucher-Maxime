import React from 'react';
import Api from '../utils/Api';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiUser: {
                id: 0,
                nom: '',
                prenom: '',
                da: '',
            }
        }
    }

    componentDidMount() {
      Api({
            method: 'get',
            url: '/user',
          })
          .then((response) => {
            const apiUser = response.data;
            this.setState({ apiUser }); 
          });
    }

    render() {
        return (
            <header className="App-header">
                <h1>Bonjour {this.state.apiUser.prenom} {this.state.apiUser.nom}</h1>
            </header>
        );
    }
}

export default Header;