import React, { memo, useEffect, useRef } from 'react';

const UncontrolledComponent = React.memo(() => {
  const inputRef = useRef();
  // useEffect(() => {
  //   console.log('componentDidMount', inputRef);
  // }, []);
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // }, [inputRef.current.value]);
  return (
    <>
      <h5>UncontrolledComponent</h5>
      <input ref={inputRef} />
      <button onClick={click}>전송</button>
    </>
  );

  function click() {
    console.log('서버 전송 :', inputRef.current.value);
  }
});
export default UncontrolledComponent;
