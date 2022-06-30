import styled from "@emotion/styled";

export const Position = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 500px;
  background-color: #2f2f2f;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  color: #ffd400;
  font-size: 36px;
  border: 1px solid #ffd400;
`;

export const ChatBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* position: relative; */
  background-color: gray;
`;
export const WrapperMessageAuthor = styled.div`
  display: flex;
  justify-content: flex-end;
  height: auto;
  padding: 10px;
`;
export const MessageAuthor = styled.div`
  width: auto;
  padding: 5px;
  height: auto;
  min-height: 30px;
  max-width: 120px;
  background-color: red;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-word;
`;
export const MessageInfoAuthor = styled.div`
  display: flex;
  width: auto;
  height: auto;
  color: white;
  p {
    padding-right: 10px;
  }
`;
export const WrapperMessageOther = styled.div`
  display: flex;
  height: auto;
  padding: 10px;
  justify-content: flex-start;
`;
export const MessageOther = styled.div`
  width: auto;
  height: auto;
  min-height: 40px;
  max-width: 120px;
  background-color: green;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-word;
`;
export const MessageInfoOther = styled.div`
  display: flex;
  width: auto;
  height: auto;
  color: white;
  p {
    padding-right: 10px;
  }
`;
export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
`;
export const TextInput = styled.input`
  width: 500px;
  height: 90%;
  border: 1px solid black;
  padding-left: 10px;
  font-size: 18px;
`;
export const SendBtn = styled.button`
  width: 10%;
  height: 50px;
  border: 1px solid black;
  cursor: pointer;
  :hover {
    background-color: #ffd400;
  }
`;
