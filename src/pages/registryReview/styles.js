import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #f5f5f5;
`;

const Image = styled.Image`
  flex: 1;
  height: 100%;
  width: 100%;
`

const RegistryDate = styled.Text`
  textAlign: center;
  fontSize: 22px;
  fontWeight: bold;
  marginTop: 30px;
  marginHorizontal: 20px;
`;

const RegistryButton = styled.TouchableOpacity`
  height: 42px;
  borderRadius: 5px;
  borderWidth: 2px;
  borderColor: #da552f;
  backgroundColor: transparent;
  justifyContent: center;
  alignItems: center;
  marginBottom: 30px;
  paddingLeft: 10px;
  paddingRight: 10px;
`

const RegistryButtonText = styled.Text`
  fontSize: 16px;
  color: #da552f;
  fontWeight: bold;
`

export { Container, Image, RegistryDate, RegistryButton, RegistryButtonText };
