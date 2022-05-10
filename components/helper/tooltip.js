
import {useEffect,useState,useRef} from 'react'
import {Overlay,Tooltip,Button,} from 'react-bootstrap'

function Example({icon,children}) {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return (
      <>
        <Button ref={target} onClick={() => setShow(!show)}>
          {icon}
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              {children}
            </Tooltip>
          )}
        </Overlay>
      </>
    );
  }
  
  export default Example