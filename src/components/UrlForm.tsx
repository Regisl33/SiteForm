import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  IconButton,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { ChangeEvent } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

type propsType = {
  urlKeyword: string;
  setUrlKeyword: React.Dispatch<React.SetStateAction<string>>;
  urlExtension: ".ca" | ".com";
  setUrlExtension: React.Dispatch<React.SetStateAction<".ca" | ".com">>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
};

const UrlForm = ({
  urlKeyword,
  setUrlKeyword,
  urlExtension,
  setUrlExtension,
  setErrorMessage,
}: propsType) => {
  const darkTheme = useMediaQuery("(prefers-color-scheme: dark)");
  const handleRadio = (value: string) => {
    if (value === ".ca" || value === ".com") {
      setUrlExtension(value);
    } else {
      setErrorMessage("Mauvais Paramètres pour l'extension de l'url");
    }
  };
  const radioContainer = (
    <fieldset className="flex justify-center items-center">
      <RadioGroup
        row
        aria-labelledby="Radio pour l'extension de l'url"
        name="urlExtensionRadio"
        value={urlExtension}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleRadio(e.target.value)
        }
      >
        <FormControlLabel
          value=".ca"
          control={
            <Radio
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 28,
                },
                padding: 2,
              }}
            />
          }
          label=".ca"
        />
        <FormControlLabel
          value=".com"
          control={
            <Radio
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 28,
                },
                padding: 2,
              }}
            />
          }
          label=".com"
        />
      </RadioGroup>
      <Tooltip
        title={
          <p className="p-3 tracking-wider text-sm">
            .ca est recommandé pour les sites canadiens, .com en revanche
            n'envoi aucune indication par rapport a la provenance du site
          </p>
        }
        arrow
      >
        <IconButton>
          <InfoIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    </fieldset>
  );

  const content = (
    <>
      <Typography
        sx={
          darkTheme
            ? {
                letterSpacing: "1px",
                textShadow: "1px 2px 4px rgb(255 255 255 / 19%)",
              }
            : {
                letterSpacing: "1px",
                textShadow: "1px 2px 4px rgb(0 0 0 / 50%);",
              }
        }
        variant="h6"
        component="h2"
      >
        Configuration de l'URL
      </Typography>
      <section className="flex flex-col md:flex-row justify-around items-center border border-slate-900/50 dark:border-slate-50/50 shadow-xs shadow-slate-900 dark:shadow-slate-50 rounded-lg p-5 m-5">
        <TextField
          sx={{ width: "320px" }}
          id="url-keywords"
          label="Mots-Clés Url"
          variant="outlined"
          helperText="Entrer les mots clé pour votre URL"
          value={urlKeyword}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setUrlKeyword(e.target.value.toLowerCase());
          }}
        />
        {radioContainer}
      </section>
    </>
  );
  return content;
};

export default UrlForm;
