import { TextField, Typography } from "@mui/material";

import { ChangeEvent } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import UrlRadio from "./UrlRadio";

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
          sx={{ maxWidth: "320px", width: "95%" }}
          id="url-keywords"
          label="Mots-Clés Url"
          variant="outlined"
          helperText="Entrer les mots clé pour votre URL"
          value={urlKeyword}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setUrlKeyword(e.target.value.toLowerCase());
          }}
        />
        <UrlRadio
          urlExtension={urlExtension}
          setUrlExtension={setUrlExtension}
          setErrorMessage={setErrorMessage}
        />
      </section>
    </>
  );
  return content;
};

export default UrlForm;
