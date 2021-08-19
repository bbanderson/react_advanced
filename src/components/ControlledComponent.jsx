import React, { useEffect, useState } from 'react';

const ControlledComponent = React.memo(() => {
  const [value, setValue] = useState('');
  // useEffect(() => {
  //   console.log('componentDidMount', value);
  // }, []);
  // useEffect(() => {
  //   console.log('componentDidUpdate', value);
  // }, [value]);
  return (
    <>
      <h5>ControlledComponent</h5>
      <input value={value} onChange={change} />
      <button onClick={click}>전송</button>
    </>
  );
  function change(e) {
    const { value } = e.target;
    console.log(value);
    setValue(value);
  }
  function click(e) {
    console.log('서버 전송 :', value);
  }
});
export default ControlledComponent;
