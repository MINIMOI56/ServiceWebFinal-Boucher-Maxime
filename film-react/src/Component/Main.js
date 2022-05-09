import React from "react";
import Axios from "axios";
import Header from "./Header";
import ListFilm from "./ListFilm";



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    Axios.get("http://localhost/ServiceWebFinal-Boucher-Maxime/Api/film")
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

  supprimerFilm(id) {
    Axios.delete("http://localhost/ServiceWebFinal-Boucher-Maxime/Api/delFilm/" + id)
    .then(res => { if (res.status === 200) {
      const vielleCitations = this.state.citations.filter(citation => citation.id !== id);
      this.setState({citations: vielleCitations})}})
      .catch(err => { console.log(err)})
  }
  

  render() {
    return (
      <div>
        <Header />
        <ListFilm supprimerFilm={this.supprimerFilm} films={this.state.films} />
      </div>
    );
  }
}
export default Main;
