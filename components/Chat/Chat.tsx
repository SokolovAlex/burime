import React, { useEffect, useState } from "react";
import { socket } from "../../services/socket";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Chat = () =>{
  const [ name, setName] = useState();
  const [ inputName, setInputName] = useState();

  const send = () => {
    socket.emit('sendMessage', '!!!');
  }

  const confirm = () => {
    setName(inputName)
  }

  const clearName = () => {
    setName(null)
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

        { name ?
            (<div>
              <div>Ваше имя:{name}</div>
              <Button onClick={() => clearName()}>другое имя</Button>
              </div>)
            :
            (
              <div>
                <div>Придумайте себе имя для чата</div>
                <TextField
                  label="имя"
                  type="text"
                  margin="normal"
                  onChange={(e) => setInputName(e.target.value)}
                />
                <Button onClick={() => confirm()}>ok</Button>
              </div>
            )
        }
      </div>
    )
}