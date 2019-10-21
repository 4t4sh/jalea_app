import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  border-color: #f9f9f9;
  border-bottom-width: 1px;
`;

export const Avatar = styled.View`
  width: 38px;
  height: 38px;
  margin-right: 15px;
  overflow: hidden;
  background-color: #eee;
  border-radius: 19px;
`;

export const Textcontainer = styled.View`
  display: flex;
  flex-direction: column;
`

export const TextName = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const TextEmail = styled.Text`
  font-size: 14px;
  font-weight: 200;
  color: #666;
`;
