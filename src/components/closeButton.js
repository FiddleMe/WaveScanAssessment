import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import '../styles/closeButton.css'
function CloseButton(props) {
  return (
    <div className="close" style={props.style}>
      <FontAwesomeIcon icon={faClose} onClick={props.onClick}/>
      
    </div>
  );
}
export { CloseButton };