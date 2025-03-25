import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

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
  return (
    <fieldset className="flex flex-col justify-center items-center gap-[10px] border border-slate-900/50 dark:border-slate-50/50 rounded-lg p-5">
      <TextField
        id="Titre"
        label="Titre"
        variant="outlined"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value.toLowerCase());
        }}
      />
      <TextField
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
    </fieldset>
  );
};

export default MetaForm;
