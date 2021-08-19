import React from 'react';
export default React.forwardRef(function MyInput(props, ref) {
  return (
    <div>
      <p>My Input</p>
      <input ref={ref} />
    </div>
  );
});
