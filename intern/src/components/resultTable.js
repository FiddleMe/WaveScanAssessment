import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ConnectButton from './ConnectButton';
import "../styles/resultTable.css"
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@mui/system';
import { CloseButton } from './CloseButton';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
import { useNavigate  } from 'react-router-dom';

const MySwal = withReactContent(Swal);
const COLUMN_NAMES = ["Scanner name", "IP Address", "Scanner Speed", "Status"];
const BUTTON_LABELS = {AVAILABLE: "Connect", ENGAGED: "Engaged"};
const STATUS = {AVAILABLE: "Available", ENGAGED: "Engaged"};

function ResultTable() {
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();
// This is a function that displays a confirmation dialog asking the user if they want to return to the home page.
// The function uses the MySwal library to display the dialog and handle the user's response.
    function BackToHome(){
  // Display a dialog with the message "Would You Like To Return Home?".
  // The dialog includes a confirm button with a green color, and a deny button.
  // If the user confirms, the navigate function will be called to redirect to the home page.
        MySwal.fire({
            title: <p>Would You Like To Return Home?</p>,
            confirmButtonColor: '#228B22',
            showDenyButton: true,
           
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            }).then((result)=>{
                if(result.isConfirmed) {
                    navigate('/WaveScanAssessment');
                }
            })
    }
// This code maps over an array of data to create a table with rows and columns.
// For each element in the data array, the code extracts the scannerName, ipAddress, scannerSpeed, and isAvailable properties.
    const rows = data.map((elem) => {

        const { scannerName, ipAddress, scannerSpeed, isAvailable } = elem;
// The adjustedSpeed property is calculated by appending " m/s" to the scannerSpeed value.
        const adjustedSpeed = scannerSpeed + " m/s";
// If isAvailable is "false", the scanner is considered "engaged" and the button will be disabled.
// Otherwise, the scanner is considered "available" and the button will be enabled.
        if (isAvailable==="false"){
            var status = STATUS.ENGAGED;
            var buttonLabel = BUTTON_LABELS.ENGAGED;
            var disabled = true;
        }
        else{
            status = STATUS.AVAILABLE;   
            buttonLabel = BUTTON_LABELS.AVAILABLE;
            disabled = false;
        }
// The code then creates a row object with scannerName, ipAddress, adjustedSpeed, status, and button properties.
        return {
          scannerName,
          ipAddress,
          adjustedSpeed,
          status,
          button: <ConnectButton disabled={disabled} label={buttonLabel} />,
        };
      });
// The code then maps over the rows array to create table rows using the Tr and Td components.
// The button property is passed to the ConnectButton component, which creates a button with a label and a disabled state.
// Finally, the tableRows array is returned to render the table.
      const tableRows = rows.map((data) => {
        return (
          <Tr key={data.scannerName + data.ipAddress + data.adjustedSpeed}>
            <Td>{data.scannerName}</Td>
            <Td>{data.ipAddress}</Td>
            <Td>{data.adjustedSpeed}</Td>
            <Td>{data.status}</Td>
            <Td className="btn-cell">{data.button}</Td>
          </Tr>
        );
      });
//Finally, the codes returns a table enclosed within a container, that displays all the results
// A close button is also displayed at the corner of the screen.
      return (
        <div>
        <CloseButton style={{display: 'block'}} onClick={BackToHome}></CloseButton>
        <Container className="results">
          <Table className="resultTable">
            <Thead>
              <Tr>
                {COLUMN_NAMES.map((colName) => (
                  <Th key={colName}>{colName}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>{tableRows}</Tbody>
          </Table>
        </Container>
        </div>
      );
    }

export default ResultTable;
