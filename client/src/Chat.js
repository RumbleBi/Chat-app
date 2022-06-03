import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import * as S from "./Chat.styled";
import "./Chat.css";
function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <S.Position>
      <S.Wrapper>
        <S.Title>{room}</S.Title>
        <S.ChatBody>
          <ScrollToBottom className="ScrollToBottom">
            {messageList.map((messageContent) => {
              return (
                <>
                  {username === messageContent.author ? (
                    <S.WrapperMessageAuthor>
                      <div>
                        <S.MessageAuthor>
                          <p>{messageContent.message}</p>
                        </S.MessageAuthor>
                        <S.MessageInfoAuthor>
                          <p>{messageContent.time}</p>
                          <p>{messageContent.author}</p>
                        </S.MessageInfoAuthor>
                      </div>
                    </S.WrapperMessageAuthor>
                  ) : (
                    <S.WrapperMessageOther>
                      <div>
                        <S.MessageOther>
                          <p>{messageContent.message}</p>
                        </S.MessageOther>
                        <S.MessageInfoOther>
                          <p>{messageContent.time}</p>
                          <p>{messageContent.author}</p>
                        </S.MessageInfoOther>
                      </div>
                    </S.WrapperMessageOther>
                  )}
                </>
              );
            })}
          </ScrollToBottom>
        </S.ChatBody>
        <S.WrapperInput>
          <S.TextInput
            type="text"
            value={currentMessage}
            placeholder="채팅을 입력하세요."
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <S.SendBtn onClick={sendMessage}>{">"}</S.SendBtn>
        </S.WrapperInput>
      </S.Wrapper>
    </S.Position>
  );
}

export default Chat;
