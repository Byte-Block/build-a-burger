import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={classes.Modal}
            style={{
            transform: props.show ? 'translate(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'}}
      >
        {props.children}
      </div>
    </Aux>
  );
}

//export default React.memo(modal); <= An alternative to using shouldComponentUpdate() in functional components
export default React.memo(modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children);