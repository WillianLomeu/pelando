import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import ListVideo from './components/videos';
import NewVideoInput from './components/NewVideoInput';
import logo from './assets/pelando.png';
import { getInfoVideo } from './services/youtubeVideosService';

const api = {
  "youtubeApiUrl": "https://developers.google.com/youtube/v3",
  "youtubeApiKey": "AIzaSyCcMcVxDwsJmhm9HMCBrHwT-7bJRezdc5s",
  "options": {
    "part": "snippet",
    "key": "youtubeApiKey",
    "maxResults": "4"
  }
}

class App extends Component {
  state = {
    search: [],
    videos: '',
    list: [],
    playlist: [],
    isClosed: '',
  };

  componentDidMount = () => {
    const playlist = localStorage.getItem('playlist');
    if (playlist) {
      console.log('tem lista');
    } else {
      console.log('nao tem lista');
    }
  }

  handleChange = event => {
    this.setState({ videos: event.target.value });
  }

  handleSubmit = event => {

    event.preventDefault();

    const video = this.state.videos;

    axios.get(`https://www.googleapis.com/youtube/v3/search?id=${video}&key=` + api.youtubeApiKey + `&part=snippet&maxResults=4`)
      .then((res) => {
        const video = res.data.items[0].id.videoId;
        const list = res.data.items;
        this.setState({ list });
        this.setState({ search: video });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    console.log(this.state.search);

    return (
      <div className="page">
        <div className="page-navbar">
          <div className="page-navbar-title">
            <img alt="logo Pelando" src={logo} />
          </div>
        </div>
        <div className="page-body">
          <div className="page-body-search">
            <div className="new-video">
              <form onSubmit={this.handleSubmit}>
                <input
                  className="Todo-input"
                  placeholder="Digite o nome do vídeo"
                  onChange={this.handleChange}
                />
                <button type="submit">
                  Adicionar
            </button>
              </form>
            </div>
            <hr className="hr"/>
              <div className="new-video">
                <form onSubmit={this.handleSubmit}>
                  <input
                    className="Todo-input"
                    placeholder="Palavra-chave"
                    onChange={this.handleChange}
                  />
                  <button className="btn-filtrar" type="submit">
                    Filtrar
            </button>
                </form>
              </div>
              <div className="modal isClosed">
                <div className="container-videos">
                  {this.state.list.map((items, i) => (
                  <ListVideo
                    key={i}
                    video={items.id.videoId}
                  />
                ))}
                </div>
                
              </div>
          </div>
            <div className="Array-preview">
              <pre>
                {JSON.stringify(this.search, null, 4)}
              </pre>
            </div>
          </div>
        </div>
    );
  }
}


export default App;
