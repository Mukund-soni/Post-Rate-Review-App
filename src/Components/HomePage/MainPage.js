import React, { Component } from "react";
import AdvertisementOne from "./AdvertisementOne/AdvertisementOne";
import "./MainPage.css";
import { Link } from "react-router-dom";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    let arr = [
      {
        header: "Books",
        definition: [
          "https://images.pexels.com/photos/4581325/pexels-photo-4581325.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },

      {
        header: "Movies",
        definition: [
          "https://images.pexels.com/photos/8273631/pexels-photo-8273631.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        header: "Hotels & Restaurants",
        definition: [
          "https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        header: "Hospitals & Clinics",
        definition: [
          "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
    ];
    this.setState({ list: arr });
  }
  render() {
    return (
      <div className="mainpage">
        <div style={{ paddingTop: "260px", display: "flex", flexWrap: "wrap" }}>
          {this.state.list.map((value) => (
            <Link to="/display">
              <AdvertisementOne definition={value} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;
