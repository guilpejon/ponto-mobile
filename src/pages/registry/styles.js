import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #f5f5f5;
`;

const RegistryImage = styled.Image`
  flex: 1;
  height: 100%;
  width: 100%;
`

const DeleteButton = styled.TouchableOpacity`
  height: 42px;
  borderRadius: 5px;
  borderWidth: 2px;
  borderColor: #da552f;
  backgroundColor: transparent;
  justifyContent: center;
  alignItems: center;
  marginBottom: 75px;
  paddingLeft: 10px;
  paddingRight: 10px;
`

const DeleteButtonText = styled.Text`
  fontSize: 16px;
  color: #da552f;
  fontWeight: bold;
`

export {
  Container,
  RegistryImage,
  DeleteButton,
  DeleteButtonText
};
