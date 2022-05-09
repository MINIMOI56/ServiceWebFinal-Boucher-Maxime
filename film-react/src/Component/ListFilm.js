import { Component } from "react";
import "../App.css";

class ListFilm extends Component {
  render() {
    return (
        <div>
            <div class="row test">
                {this.props.films.map((film) => (
                    <div style={{marginLeft: "51px", marginTop: "50px"}} class="column borderCard background">
                        <img class="borderUrl" src={film.imageUrl} alt={film.titre} width="250" height="325"></img>
                        <br></br>
                        <p class="text">Titre: {film.titre}</p>
                        <p class="text">Note: {film.note}</p>
                        <div className="supprimerFilm">
                            <button onClick={() => this.props.supprimerFilm(film.id)}>
                            <p>Supprimer</p>
                            </button>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    );
  }
}

export default ListFilm;
