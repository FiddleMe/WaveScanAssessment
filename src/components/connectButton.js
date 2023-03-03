import { Button } from '@mui/material';

function ConnectButton({ disabled }) {
  return (
    <Button
      color="primary"
      fullWidth
      variant="contained"
      type="submit"
      disabled={disabled}
      sx={{
        "&.Mui-disabled": {
          background: "grey",
          color: "white"
        }
      }}
    >
      Connect
    </Button>
  );
}

export default ConnectButton;