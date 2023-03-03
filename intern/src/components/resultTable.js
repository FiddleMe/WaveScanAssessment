import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ConnectButton from './connectButton';
import "../styles/resultTable.css"
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@mui/system';

const COLUMN_NAMES = ["Scanner name", "IP Address", "Scanner Speed", "Status"];
const BUTTON_LABELS = {AVAILABLE: "Connect", ENGAGED: "Engaged"};
const STATUS = {AVAILABLE: "Available", ENGAGED: "Engaged"};
    
function BasicExample() {
    const location = useLocation();
    const data = location.state;
    const rows = data.map((elem) => {
        const { scannerName, ipAddress, scannerSpeed, isAvailable } = elem;
        const adjustedSpeed = scannerSpeed + " m/s";
        const status = isAvailable ? STATUS.AVAILABLE : STATUS.ENGAGED;
        const disabled = !isAvailable;
        const buttonLabel = isAvailable ? BUTTON_LABELS.AVAILABLE : BUTTON_LABELS.ENGAGED;
        return {
          scannerName,
          ipAddress,
          adjustedSpeed,
          status,
          button: <ConnectButton disabled={disabled} label={buttonLabel} />,
        };
      });
    
      const tableRows = rows.map((data) => {
        return (
          <Tr key={data.scannerName + data.ipAddress}>
            <Td>{data.scannerName}</Td>
            <Td>{data.ipAddress}</Td>
            <Td>{data.adjustedSpeed}</Td>
            <Td>{data.status}</Td>
            <Td className="btn-cell">{data.button}</Td>
          </Tr>
        );
      });
      return (
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
      );
    }

export default BasicExample;
