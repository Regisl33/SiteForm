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
        <FormControlLabel value=".ca" control={<Radio />} label=".ca" />
        <FormControlLabel value=".com" control={<Radio />} label=".com" />
      </RadioGroup>
      <Tooltip title=".ca est recommandé pour les sites canadiens, .com en revanche n'envoi aucune indication par rapport a la provenance du site">
        <IconButton>
          <InfoIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    </fieldset>
  );

  const content = (
    <>
      <Typography variant="h4" component="h2">
        Configuration de l'URL
      </Typography>
      <section className="flex justify-center items-center gap-[5%] border border-slate-900/50 dark:border-slate-50/50 rounded-lg p-5 m-5">
        <TextField
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
