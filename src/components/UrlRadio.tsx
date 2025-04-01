import { ChangeEvent } from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Tooltip,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

type propsType = {
  urlExtension: ".ca" | ".com";
  setUrlExtension: React.Dispatch<React.SetStateAction<".ca" | ".com">>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
};

const UrlRadio = ({
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
  return radioContainer;
};

export default UrlRadio;
