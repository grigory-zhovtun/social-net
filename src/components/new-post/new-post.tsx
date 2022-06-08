import React from 'react';
import s from './new-post.module.css';
import styled from "styled-components";

const Input = styled.input`
  width: 440px;
  height: 126px;
  background: #DAF247;
  border: 1px solid #000000;
  border-radius: 10px;
  text-align: center;
`
const Button = styled.button`
  margin-top: 29px;
  width: 131px;
  height: 35px;
  background: #DAF247;
  border: 1px solid #000000;
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #000000;
`

export const NewPost = () => {
    return (
        <div className={s.NewPostsWrapper}>
            <Input type={"text"} />
            <Button>send post</Button>
        </div>
    );
};
