import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: content;

  display: grid;
  grid-template-columns: 4fr 10fr;
  box-sizing: border-box;
  
  width: 823px;
  height: 636px;
  background: #60DD26;
  border: 1px solid #000000;
  border-radius: 10px;

  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
  color: #FFFFFF;
`
const DialogItems = styled.div`
  padding-left: 36px;
  border-right: 2px solid #FFFFFF;
  h2 {
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
`
const Item = styled.div`
  
`
const Messages = styled.div`

`
const MessageItem = styled.div`

`

export const Dialogs = () => {
    return (
        <Wrapper>
            <DialogItems>
                <h2>Messages</h2>
                <Item>
                    masha
                </Item>
                <Item>
                    Kostya
                </Item>
                <Item>
                    Sasha
                </Item>
                <Item>
                    Dasha
                </Item>
                <Item>
                    Andry
                </Item>
                <Item>
                    Hermione
                </Item>
            </DialogItems>
            <Messages>
                <MessageItem>Hello</MessageItem>
                <MessageItem>How are you?</MessageItem>
                <MessageItem>How are your mother?</MessageItem>
            </Messages>
        </Wrapper>
    );
};