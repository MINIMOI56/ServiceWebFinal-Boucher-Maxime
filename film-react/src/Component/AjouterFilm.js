import React from 'react';

class AjouterFilm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titre: '',
            note: '',
            imageUrl: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const film = {
            titre: this.state.titre,
            note: this.state.note,
            imageUrl: this.state.imageUrl,
        };
        this.props.ajouterFilm(film);
        
        event.preventDefault();
        this.clearInput();
    }

    clearInput() {
        this.setState({
            titre: '',
            note: '',
            imageUrl: '',
        });
    }


    render(){

        return (
            <div className='formAjouterFilm'>
            
                <h2>Ajouter un Film</h2>

                <form onSubmit={this.handleSubmit}>

                    <table className='FilmTable'>
                        <tbody>
                            <tr>
                                <td><label>Titre :</label></td>
                                <td>
                                    <input
                                        type="text"
                                        id="titre"
                                        name="titre"
                                        value={this.state.titre}
                                        onChange={this.handleChange}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td><label>note :</label></td>
                                <td>
                                    <input
                                        type="text"
                                        id="note"
                                        name="note"
                                        value={this.state.note}
                                        onChange={this.handleChange}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td><label>imageUrl :</label></td>
                                <td>
                                    <input
                                        type="text"
                                        id="imageUrl"
                                        name="imageUrl"
                                        value={this.state.imageUrl}
                                        onChange={this.handleChange}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td></td>
                                <td style={{'textAlign':'right'}}>
                                    <input type="button" value="Cancel" onClick={this.clearInput}/>
                                    <input type="submit" value="Ajouter" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    
                </form>
            </div>
        );
    }
}

export default (AjouterFilm);