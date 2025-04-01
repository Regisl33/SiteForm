import { TextField, Typography, Tooltip, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { ChangeEvent, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import OpenGraphInfo from "./OpenGraphInfo";
import ImageBtn from "./ImageBtn";

type propsType = {
  ogTitle: string;
  setOgTitle: React.Dispatch<React.SetStateAction<string>>;
  ogLocale: string;
  setOgLocale: React.Dispatch<React.SetStateAction<string>>;
  ogDescription: string;
  setOgDescription: React.Dispatch<React.SetStateAction<string>>;
};

const OpenGraph = ({
  ogTitle,
  setOgTitle,
  ogLocale,
  setOgLocale,
  ogDescription,
  setOgDescription,
}: propsType) => {
  const [sameLogo, setSameLogo] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const darkTheme = useMediaQuery("(prefers-color-scheme: dark)");

  return (
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
        Open Graph{" "}
        <Tooltip
          title={<p className="p-3 tracking-wider text-sm">Plus d'info...</p>}
          arrow
          onClick={() => setShowInfo(true)}
        >
          <IconButton>
            <InfoIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Typography>
      <section className="flex flex-col justify-center items-center gap-[10px] border border-slate-900/50 dark:border-slate-50/50 shadow-xs shadow-slate-900 dark:shadow-slate-50 rounded-lg p-5 m-5 relative">
        <OpenGraphInfo showInfo={showInfo} setShowInfo={setShowInfo} />
        <TextField
          sx={{ maxWidth: "400px", width: "90%" }}
          id="ogTitre"
          label="Titre"
          variant="outlined"
          value={ogTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setOgTitle(e.target.value.toLowerCase());
          }}
        />
        <TextField
          sx={{ maxWidth: "400px", width: "90%" }}
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
          <label htmlFor="logoCheck" className="tracking-wide font-bold">
            Utiliser le Logo du site
          </label>
          <div id="logoCheck" className="checkbox-wrapper-31">
            <input
              id="instagramCheck"
              type="checkbox"
              checked={sameLogo}
              onClick={() => setSameLogo(!sameLogo)}
              onChange={() => console.log(sameLogo)}
            />
            <svg viewBox="0 0 35.6 35.6">
              <circle
                className="background"
                cx="17.8"
                cy="17.8"
                r="17.8"
              ></circle>
              <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
              <polyline
                className="check"
                points="11.78 18.12 15.55 22.23 25.17 12.87"
              ></polyline>
            </svg>
          </div>
        </div>
        {!sameLogo && <ImageBtn />}
      </section>
    </>
  );
};

export default OpenGraph;
