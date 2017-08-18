import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import styles from './Styles'
import {Redirect} from 'react-router-native'

export default class About extends Component{
  constructor(props){
    super(props)
    this.state = {
      redirect: false
    }
    this.handleClicky = this.handleClicky.bind(this)
  }
  handleClicky(){
    this.setState({
      redirect: true
    })
  }
  render(){
    if (this.state.redirect === true){
      return <Redirect to="/" />
    }
    return (<View style={styles.container}>
      <Text style={styles.header}>
      Oh Hai. This is About
      </Text>

      <TouchableHighlight onPress={this.handleClicky} style={styles.button}>
        <Text style={styles.header}>
        Visit Homepage
        </Text>
      </TouchableHighlight>

      </View>)
  }
}
