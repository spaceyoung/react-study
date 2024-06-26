import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 32px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    font-size: 18px;
    color: #868e96;
  }
  .tasks-left {
    margin-top: 40px;
    font-size: 16px;
    font-weight: bold;
    color: #20c997;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">남은 할 일 {undoneTasks.length}개</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
