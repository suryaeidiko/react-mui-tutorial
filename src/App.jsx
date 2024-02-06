import { useState } from "react";
import Add from "./mainComponents/Add";
import Feed from "./mainComponents/Feed";
import NavBar from "./mainComponents/NavBar";
import RightBar from "./mainComponents/RightBar";
import SlideBar from "./mainComponents/SlideBar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";

function App() {

  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette : {
      mode : mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* <Buttons /> */}
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <SlideBar mode ={mode} setMode = {setMode}/>
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
