// import "./App.css";
import * as S from "./App.styled";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username === "" || room === "") {
      alert("닉네임 또는 채팅방 이름은 공백이 불가능합니다.");
      return;
    }
    socket.emit("join_room", room);
    setShowChat(true);
  };

  return (
    <S.Position>
      <S.Wrapper>
        {!showChat ? (
          <S.InputWrapper>
            <S.Title>오픈채팅방</S.Title>
            <S.InfoInput
              type="text"
              placeholder="닉네임을 설정해 주세요."
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <S.InfoInput
              type="text"
              placeholder="채팅방 이름을 설정해 주세요."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <S.JoinRoom onClick={joinRoom}>방 입장하기</S.JoinRoom>
          </S.InputWrapper>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
      </S.Wrapper>
    </S.Position>
  );
}

export default App;
