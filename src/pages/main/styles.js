import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  alignItems: stretch;
  justifyContent: center;
  backgroundColor: #f5f5f5;
`;

const List = styled.FlatList`
  padding: 20px;
`

const RegistryCreatedAt = styled.Text`
  fontSize: 18px;
  textAlign: center;
  fontWeight: bold;
  color: #333;
`

const RegistryContainer = styled.View`
  backgroundColor: #fff;
  borderWidth: 1px;
  borderColor: #ddd;
  borderRadius: 5px;
  padding: 20px;
  marginBottom: 20px;
`

const RegistryButton = styled.TouchableOpacity`
  height: 42px;
  borderRadius: 5px;
  borderWidth: 2px;
  borderColor: #da552f;
  backgroundColor: transparent;
  justifyContent: center;
  alignItems: center;
  marginTop: 10px;
  paddingLeft: 10px;
  paddingRight: 10px;
`

const RegistryButtonText = styled.Text`
  fontSize: 16px;
  color: #da552f;
  fontWeight: bold;
`

export {
  Container,
  RegistryCreatedAt,
  RegistryButton,
  RegistryContainer,
  RegistryButtonText,
  List
};
