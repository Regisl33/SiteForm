import {
  TextField,
  Typography,
  Tooltip,
  IconButton,
  Button,
  styled,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { CloudUpload } from "@mui/icons-material";
import { ChangeEvent } from "react";

type propsType = {
  ogTitle: string;
  setOgTitle: React.Dispatch<React.SetStateAction<string>>;
  ogType: string;
  setOgType: React.Dispatch<React.SetStateAction<string>>;
  ogUrl: string;
  setOgUrl: React.Dispatch<React.SetStateAction<string>>;
  ogLocale: string;
  setOgLocale: React.Dispatch<React.SetStateAction<string>>;
  ogDescription: string;
  setOgDescription: React.Dispatch<React.SetStateAction<string>>;
};

const OpenGraph = ({
  ogTitle,
  setOgTitle,
  ogType,
  setOgType,
  ogUrl,
  setOgUrl,
  ogLocale,
  setOgLocale,
  ogDescription,
  setOgDescription,
}: propsType) => {
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
    <>
      <Typography variant="h4" component="h2">
        Open Graph{" "}
        <Tooltip title="Plus d'info...">
          <IconButton>
            <InfoIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Typography>
      <section className="flex flex-col justify-center items-center gap-[10px] border border-slate-900/50 dark:border-slate-50/50 rounded-lg p-5 m-5">
        <div className="m-4 flex gap-5">
          <TextField
            id="ogTitre"
            label="Titre"
            variant="outlined"
            value={ogTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setOgTitle(e.target.value.toLowerCase());
            }}
          />
          <TextField
            id="type"
            label="Type de contenu"
            variant="outlined"
            value={ogType}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setOgType(e.target.value.toLowerCase());
            }}
          />
          <TextField
            id="url"
            label="Url"
            variant="outlined"
            value={ogUrl}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setOgUrl(e.target.value.toLowerCase().trim());
            }}
          />
        </div>
        <div className="m-4 flex justify-center items-center gap-5">
          <TextField
            id="locale"
            label="Langue-Pays"
            variant="outlined"
            helperText="Ex: fr-Ca, en-Ca"
            value={ogLocale}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setOgLocale(e.target.value);
            }}
          />
          <Typography variant="body1">Téléverser votre logo</Typography>
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
        <TextField
          id="og-descripton"
          label="Descripton"
          variant="outlined"
          multiline
          minRows={4}
          value={ogDescription}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setOgDescription(e.target.value);
          }}
        />
      </section>
    </>
  );
};

export default OpenGraph;
