import styled from 'styled-components';
import { withStyles } from "@material-ui/styles";
import { TextField } from '@material-ui/core';

export const WhiteTextField = withStyles({
  root: {
    '& label': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& input': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'silver',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 300px;
  right: 0;
  height: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid silver;
  border-radius: 4px;
`;

export const NameBackground = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const NameInputWrapper = styled.div`
  width: 50%;
  margin: auto;
`;

export const MessagesContainer = styled.div`
  flex: 1 1 auto;
`;

export const NewMessageContainer = styled.div`
  border-top: 1px solid silver;
  flex: 0 0 40px;
`;
