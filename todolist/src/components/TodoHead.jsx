import React from 'react';
import styled from 'styled-components';

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
  return (
    <TodoHeadBlock>
      <h1>2024년 6월 9일</h1>
      <div className="day">일요일</div>
      <div className="tasks-left">남은 할 일 3개</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
