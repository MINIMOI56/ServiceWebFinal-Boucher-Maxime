import React from "react";
import Axios from "axios";
import Header from "./Header";
import ListFilm from "./ListFilm";
import AjouterFilm from "./AjouterFilm";



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };

    this.ajouterFilm = this.ajouterFilm.bind(this);
    this.supprimerFilm = this.supprimerFilm.bind(this);
  }

  componentDidMount() {
    Axios.get("http://localhost/ServiceWebFinal-Boucher-Maxime/Api/film")
      .then((response) => {
        this.setState({
          films: response.data,
        });
        console.log(this.state.films);
      }
      )
      .catch((error) => {
        console.log(error);
      }
      );
  }

  ajouterFilm(film) {
    Axios.post("http://localhost/ServiceWebFinal-Boucher-Maxime/Api/film", {
      titre: film.titre,
      note: film.note,
      imageUrl: film.imageUrl,
    })
      .then((resultat) => {
        film.id = resultat.data.id;
        const vieuxfilms = [...this.state.films, film];
        this.setState({ films: vieuxfilms });
      })
      .catch((error) => {
        console.log(error);
      }
      );
  }


  supprimerFilm(id) {
    Axios.delete("http://localhost/ServiceWebFinal-Boucher-Maxime/Api/delFilm/" + id)
      .then(res => {
        if (res.status === 200) {
          const vieuxfilms = this.state.films.filter(film => film.id !== id);
          this.setState({ films: vieuxfilms })
        }
      })
      .catch(err => { console.log(err) })
  }


  render() {
    return (
      <div>
        <AjouterFilm ajouterFilm={this.ajouterFilm} />
        <Header />
        <ListFilm supprimerFilm={this.supprimerFilm} films={this.state.films} />
      </div>
    );
  }
}
export default Main;
