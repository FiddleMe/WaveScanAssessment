import { Button } from '@mui/material';
// This is a functional component that renders a button with the label "Connect" for the use in ResultTable
// The button is styled with the Material UI library and accepts a "disabled" prop to disable it.
function ConnectButton({ disabled }) {
  return (
  // Render a <Button> element with the "primary" color, full width, and a "contained" variant.
  // The button is of type "submit" and can be disabled via the "disabled" prop.
  // When the button is disabled, its background color and text color will change via the "sx" prop.
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