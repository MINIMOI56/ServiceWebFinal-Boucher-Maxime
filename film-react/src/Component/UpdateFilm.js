import { ThirtyFpsSelect } from '@mui/icons-material';
import React from 'react';

class UpdateFilm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.film.id,
            titre: this.props.film.titre,
            note: this.props.film.note,
            imageUrl: this.props.film.imageUrl,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    componentDidUpdate() {
        if (this.props.film != null && this.props.film.id != this.state.id) {
            this.setState({
                id: this.props.film.id,
                titre: this.props.film.titre,
                note: this.props.film.note,
                imageUrl: this.props.film.imageUrl,
            });
        }

        if (!this.props.showFormModifier){
            this.disableForm();
        }else{
            this.enableForm();
        }
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
            id: this.state.id,
            titre: this.state.titre,
            note: this.state.note,
            imageUrl: this.state.imageUrl,
        };
        this.props.updateFilm(film);

        event.preventDefault();
        this.clearInput();
    }

    clearInput() {
        this.setState({
            id: '',
            titre: '',
            note: '',
            imageUrl: '',
        });
    }


    disableForm() {
        document.getElementById('formUpdateFilm').style.display = 'none';
        document.getElementById('formAjouterFilm').style.display = 'block';
    }


    enableForm() {
        document.getElementById('formUpdateFilm').style.display = 'block';
        document.getElementById('formAjouterFilm').style.display = 'none';
    }

    render() {

        return (
            <div id='formUpdateFilm' className='formUpdateFilm'>

                <h2>Updater le film sélectionné</h2>

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
                                <td style={{ 'textAlign': 'right' }}>
                                    <input id='buttonCancel' type="button" value="Cancel" onClick={this.clearInput} />
                                    <input id='buttonModifier' type="submit" value="Modifier" />
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </form>
            </div>
        );
    }
}

export default (UpdateFilm);