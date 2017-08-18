import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import bill from './images/bill.png'
import {NativeRouter, Route, Switch, Link} from 'react-router-native'
import About from './About'
import styles from './Styles'

const Home = () => {
  return (<View style={styles.container}>
    <Text style={styles.header}>OH HAI to the danger zone!</Text>
    <Link to="/about"><Text style={styles.header}>Go to About</Text></Link>
    <Image source={bill} style={styles.billMurray}/>
  </View>)
}

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </NativeRouter>
    );
  }
}
