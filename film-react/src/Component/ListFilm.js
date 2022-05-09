import { Component } from "react";
import "../App.css";

class ListFilm extends Component {
  render() {
    return (
        <div>
            <div className=" test">
                {this.props.films.map((film) => (
                    <div key={film.id} style={{marginLeft: "51px", marginTop: "50px"}} className="column borderCard background">
                        <img className="borderUrl" src={film.imageUrl} alt={film.titre} width="250" height="325"></img>
                        <br></br>
                        <p className="text">Titre: {film.titre}</p>
                        <p className="text">Note: {film.note}</p>
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
