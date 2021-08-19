import { useState } from 'react';
import Modal from './components/Modal';
// import ControlledComponent from './components/ControlledComponent';
// import UncontrolledComponent from './components/UncontrolledComponent';
// import MyInput from './components/MyInput';
// import { createPortal } from 'react-dom';

const App = () => {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => setCount((prev) => prev + 1), 1000);
  // }, [count]);

  // const isOdd = count % 2;
  // const myInputRef = useRef();
  // createPortal(<ControlledComponent />, document.querySelector('.foo'));
  const [visible, setVisible] = useState(false);
  const open = () => {
    setVisible(true);
  };
  const close = () => {
    setVisible(false);
  };
  return (
    <>
      <button onClick={open}>모달 열기</button>
      {visible && (
        <Modal>
          <div
            style={{
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,.5)',
            }}
            onClick={close}
          >
            모달 내용!
          </div>
        </Modal>
      )}
    </>
  );
};

export default App;
// function click() {
//   console.log(myInputRef.current.value);
// }

/* <ControlledComponent />
<UncontrolledComponent />
<div>
  <MyInput ref={myInputRef} />
  <button onClick={click}>Click</button>
</div>
<div className="foo">{isOdd ? <div>{count}</div> : <h1>{count}</h1>}</div> */
