import { TextField, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { ChangeEvent } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

type propsType = {
  titleH1: string;
  setTitleH1: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  copyright: boolean;
  setCopyright: React.Dispatch<React.SetStateAction<boolean>>;
};

const Body = ({
  titleH1,
  setTitleH1,
  text,
  setText,
  copyright,
  setCopyright,
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
        Titre et Affichage du Site
      </Typography>
      <section className="flex flex-col justify-center items-center gap-[10px] border border-slate-900/50 dark:border-slate-50/50 shadow-xs shadow-slate-900 dark:shadow-slate-50  rounded-lg p-5 m-5">
        <TextField
          sx={{ maxWidth: "400px", width: "90%" }}
          id="TitreH1"
          label="Titre"
          variant="outlined"
          value={titleH1}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTitleH1(e.target.value.toLowerCase());
          }}
        />
        <TextField
          sx={{ maxWidth: "400px", width: "90%" }}
          id="Texte"
          label="Texte"
          variant="outlined"
          multiline
          minRows={4}
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <div className="flex justify-center items-center  gap-3 mt-2">
          <label
            className="flex justify-center items-center gap-3 tracking-wider font-bold"
            htmlFor="copyright"
          >
            Copyright
            <CopyrightIcon />
          </label>
          <div className="checkbox-wrapper-31">
            <input
              id="copyright"
              type="checkbox"
              checked={copyright}
              onClick={() => setCopyright(!copyright)}
              onChange={() => console.log(copyright)}
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
      </section>
    </>
  );
  return content;
};

export default Body;
