import React, { useEffect, useState } from "react";
import { getSocket } from "../../services/socket";
import { ChatContainer, NameBackground, NameInputWrapper, WhiteTextField, MessagesContainer, NewMessageContainer } from "./styled";
import { Button } from "@material-ui/core";
import storage from '../../services/storage';
import { isClient } from "../../config";

export const Chat = () => {
    const [name, setName] = useState(storage.getItem('name'));
    const [open, setOpen] = useState(true);
    const [inputName, setInputName] = useState();

    let socket;
    const startChat = () => {
      socket = getSocket();
      socket.on('getMessage', (message) => {
          console.log(message);
      })
    }

    const send = () => {
      socket.emit('sendMessage', '!!!');
    }

    const handleKeyPress = (e: any) => {
      if (e.key === 'Enter'){
        setName(inputName);
        startChat();
        storage.setItem('name', inputName);
      }
    }

    const clearName = () => {
      setName(null)
      storage.removeItem('name');
    }

    return (
      <div>
        { isClient && <ChatContainer>
          <div style={{ textAlign: "center" }} onClick={() => setOpen(!open)}>
            Чат
          </div>

          { open &&
            <>
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
            </>
          }
        </ChatContainer>
      }
      </div>
    )
}