import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AlbumList extends Component {
  //class level property
  state = { albums: [] }

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => res.json())
      .then(resJson => {
        this.setState({ albums: resJson })
      })
  }

  render() {
    return (
      <View>
        <Text>List</Text>
      </View>
    )
  }
}

export default AlbumList
