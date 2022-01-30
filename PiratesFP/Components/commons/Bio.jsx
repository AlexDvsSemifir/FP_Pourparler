import React, { Component } from "react";
import { View, Text, ImageStore } from "react-native";

class Bio extends Component {
  
   // Constructor
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      bio: {},
      carac: {}
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:8080/players/1", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          id: json.id,
          bio: json.bio,
          carac: json.carac
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {     
     let id = this.state.id
     let bio = this.state.bio
     let carac = this.state.carac
    return (
      <View>
        <Text>{id}</Text>
        <Text>{bio.firstName}</Text>
        <Text>STR : {carac.str}</Text>
        <Text>
        </Text>
      </View>
    );
  }
}
export default Bio;
