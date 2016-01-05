/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React,{AppRegistry,StyleSheet,Text,ScrollView} from 'react-native';
import Panel from './components/Panel';

var Panels = React.createClass({
  render: function() {
    return (
      <ScrollView style={styles.container}>
        <Panel title="A Panel with short content text">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Panel>
        <Panel title="A Panel with long content text">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </Panel>
        <Panel title="Another Panel">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</Text>
        </Panel>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex            : 1,
    backgroundColor : '#f4f7f9',
    paddingTop      : 30
  },
  
});

AppRegistry.registerComponent('Panels', () => Panels);
