import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #f5f5f5;
`;

const List = styled.FlatList`
  padding: 20px;
`

const RegistryCreatedAt = styled.Text`
  fontSize: 18;
  fontWeight: bold;
  color: #333;
`

export { Container, List, RegistryCreatedAt };
