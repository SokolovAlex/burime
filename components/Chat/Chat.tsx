import React, { useEffect, useState } from "react";
import { socket } from "../../services/socket";
import { ChatContainer, NameBackground, NameInputWrapper, WhiteTextField, MessagesContainer, NewMessageContainer } from "./styled";
import { Button } from "@material-ui/core";
import storage from '../../services/storage';

export const Chat = () => {
  const [ name, setName] = useState(storage.getItem('name'));
  const [ inputName, setInputName] = useState();

  const send = () => {
    socket.emit('sendMessage', '!!!');
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter'){
      setName(inputName);
      storage.setItem('name', inputName);
    }
  }

  const clearName = () => {
    setName(null)
    storage.removeItem('name');
  }

  useEffect( () => {
      socket.on('getMessage', (message) => {
          console.log(message);
      })
  }, []);
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          Чат
        </div>

        <ChatContainer>
        { name ?
            (<>
                <MessagesContainer></MessagesContainer>
                <NewMessageContainer>
                  <Button variant="contained" color="primary">Отправить</Button>
                  <Button variant="contained" onClick={() => clearName()}>Новое имя</Button>
                </NewMessageContainer>
              </>)
            :
            (
              <NameBackground>
                <NameInputWrapper>
                  <WhiteTextField
                    label="Имя для чата"
                    variant="outlined"
                    type="text"
                    margin="normal"
                    onKeyPress={(e) => handleKeyPress(e)}
                    onChange={(e) => setInputName(e.target.value)}
                  />
                </NameInputWrapper>
              </NameBackground>
            )
        }
        </ChatContainer>
      </div>
    )
}