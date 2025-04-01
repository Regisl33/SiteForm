import { styled, Typography, Button } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

const ImageBtn = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <div className="flex flex-col gap-2">
      <Typography sx={{ letterSpacing: 1, fontWeight: "bold" }} variant="body1">
        Téléverser votre logo
      </Typography>
      <Button
        component="label"
        role={undefined}
        variant="outlined"
        tabIndex={-1}
        startIcon={<CloudUpload />}
      >
        Upload files
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => console.log(event.target.files)}
          multiple
        />
      </Button>
    </div>
  );
};

export default ImageBtn;
