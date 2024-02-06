import { Button, Typography, styled } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";

const Buttons = () => {
    const BlueButton = styled(Button)({
        backgroundColor: "skyblue",
              color: "#888",
              margin: 5,
              "&:hover": { backgroundColor: "lightblue" },
              "&:disabled": { backgroundColor: "gray", color: "white " },
      })
  return (
    <>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<SettingsIcon />}
        variant="contained"
        color="secondary"
        size="small"
      >
        settings
      </Button>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        color="success"
        size="small"
      >
        Add
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        h1. Heading
      </Typography>
      <BlueButton>my Blue Button</BlueButton>
      <BlueButton>my Another Button</BlueButton>
    </>
  );
};

export default Buttons;
