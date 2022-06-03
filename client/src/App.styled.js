import styled from "@emotion/styled";

export const Position = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 500px;
  background-color: #2f2f2f;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Title = styled.div`
  font-size: 42px;
  font-weight: bold;
  color: #ffd400;
`;
export const InfoInput = styled.input`
  width: 200px;
  height: 40px;
  font-size: 16px;
  color: #ffd400;
`;
export const JoinRoom = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: #ffd400;
  }
`;
