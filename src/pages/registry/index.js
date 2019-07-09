import React from 'react'

import { Text } from 'react-native'

const Registry = ({ navigation }) => (
  <Text>{navigation.state.params.registry.createdAt}</Text>
);

Registry.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.registry.createdAt
});

export default Registry;
