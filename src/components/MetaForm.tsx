import { TextField, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageBtn from "./ImageBtn";

type propsType = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
};

const MetaForm = ({
  title,
  setTitle,
  description,
  setDescription,
}: propsType) => {
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
        Titre et Description du site
      </Typography>
      <section className="flex flex-col justify-center items-center gap-[10px] border border-slate-900/50 dark:border-slate-50/50 shadow-xs shadow-slate-900 dark:shadow-slate-50 rounded-lg p-5 m-5">
        <TextField
          sx={{ maxWidth: "400px", width: "90%" }}
          id="Titre"
          label="Titre"
          variant="outlined"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value.toLowerCase());
          }}
        />
        <TextField
          sx={{ maxWidth: "400px", width: "90%" }}
          id="Description"
          label="Description"
          variant="outlined"
          multiline
          minRows={4}
          value={description}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setDescription(e.target.value);
          }}
        />
        <ImageBtn />
      </section>
    </>
  );
};

export default MetaForm;
