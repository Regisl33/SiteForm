import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import useMediaQuery from "@mui/material/useMediaQuery";

type propsType = {
  showInfo: boolean;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
};

const OpenGraphInfo = ({ showInfo, setShowInfo }: propsType) => {
  const darkTheme = useMediaQuery("(prefers-color-scheme: dark)");
  const content = showInfo ? (
    <Box
      component="section"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: darkTheme ? "#000" : "#fff",
        border: darkTheme ? "1px solid #fff" : "1px solid #000",
        borderRadius: 5,
        zIndex: 1000,
        height: 400,
        width: "75%",
      }}
    >
      <div className="relative w-full h-full p-5">
        <Tooltip
          sx={{
            position: "absolute",
            top: "3%",
            right: "3%",
          }}
          title="Close"
          arrow
          onClick={() => {
            setShowInfo(false);
          }}
        >
          <IconButton>
            <HighlightOffIcon />
          </IconButton>
        </Tooltip>

        <Typography variant="h5" component="h2">
          Voici un exemple d'Open Graph
        </Typography>
        <img src="" alt="" />
      </div>
    </Box>
  ) : (
    <></>
  );
  return content;
};

export default OpenGraphInfo;
