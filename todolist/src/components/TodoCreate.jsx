import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 50%;

  font-size: 60px;
  color: white;
  background: #38d9a9;
  position: absolute;
  left: 50%;
  bottom: 0px;
  z-index: 5;

  cursor: pointer;
  transform: translate(-50%, 50%);

  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      transform: translate(-50%, 50%) rotate(45deg);
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const InsertForm = styled.form`
  padding: 32px 32px 72px;
  border-top: 1px solid #e9ecef;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background: #f8f9fa;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-size: 18px;
  outline: none;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
