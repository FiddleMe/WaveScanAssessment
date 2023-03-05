import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import '../styles/closeButton.css'
// This is a functional component that renders a close button with an optional style and onClick handler.
function CloseButton(props) {
  return (
     // Render a <div> element with the class "close" and the specified style.
    // Inside the <div>, render a <FontAwesomeIcon> element with the "faClose" icon,
    // and attach an onClick event handler to call the function passed via the "props" object.
    <div className="close" style={props.style}>
      <FontAwesomeIcon icon={faClose} onClick={props.onClick}/>
    </div>
  );
}
export { CloseButton };