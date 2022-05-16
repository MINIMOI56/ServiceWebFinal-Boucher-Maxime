import React from "react";
import Axios from "axios";
import Header from "./Header";
import ListFilm from "./ListFilm";
import AjouterFilm from "./AjouterFilm";
import UpdateFilm from "./UpdateFilm";



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      film: {
        id: 0,
        titre: "",
        note: "",
        imageUrl: "",
      },
      showFormModifier: false,
    };

    this.updateFilm = this.updateFilm.bind(this);
    this.ajouterFilm = this.ajouterFilm.bind(this);
    this.supprimerFilm = this.supprimerFilm.bind(this);
  }

  componentDidMount() {
    Axios.get("https://thawing-meadow-99678.herokuapp.com/film")
      .then((response) => {
        this.setState({
          films: response.data,
        });
      }
      )
      .catch((error) => {
        console.log(error);
      }
      );
  }


  setUpdateFilm = (film) => {
    this.setState({ film: film, showFormModifier: true });
  }


  updateFilm(film) {
    Axios.put("https://thawing-meadow-99678.herokuapp.com/modFilm/" + film.id, {
      titre: film.titre,
      note: film.note,
      imageUrl: film.imageUrl
    })
      .then((response) => {
        if (response.status === 200) {
          const vieuxfilms = this.state.films.filter(f => f.id !== film.id);
          this.setState({ films: [...vieuxfilms, film] });
          this.setState({
            showFormModifier: false,
          });
        }
      }
      )
      .catch((error) => {
        console.log(error);
      }
      );
  }


  ajouterFilm(film) {
    Axios.post("https://thawing-meadow-99678.herokuapp.com/film", {
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
    Axios.delete("https://thawing-meadow-99678.herokuapp.com/delFilm/" + id)
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
        <div style={{ display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
          <UpdateFilm updateFilm={this.updateFilm} film={this.state.film} showFormModifier={this.state.showFormModifier} />
          <AjouterFilm ajouterFilm={this.ajouterFilm} />
        </div>
        <Header />
        <ListFilm supprimerFilm={this.supprimerFilm} setUpdateFilm={this.setUpdateFilm} films={this.state.films} showFormModifier={this.state.showFormModifier} />
      </div>
    );
  }
}
export default Main;
