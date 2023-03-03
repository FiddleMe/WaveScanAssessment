import { Button } from '@mui/material';

function ConnectButton({ disabled }) {
  return (
    <Button
      color="primary"
      fullWidth
      variant="contained"
      type="submit"
      disabled={disabled}
    >
      Connect
    </Button>
  );
}

export default ConnectButton;