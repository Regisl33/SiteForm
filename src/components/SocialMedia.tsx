import { TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import useMediaQuery from "@mui/material/useMediaQuery";

type propsType = {
  facebookUrl: string;
  setFacebookUrl: React.Dispatch<React.SetStateAction<string>>;
  instagramUrl: string;
  setInstagramUrl: React.Dispatch<React.SetStateAction<string>>;
  xUrl: string;
  setXUrl: React.Dispatch<React.SetStateAction<string>>;
  linkedInUrl: string;
  setLinkedInUrl: React.Dispatch<React.SetStateAction<string>>;
  gitHubUrl: string;
  setGitHubUrl: React.Dispatch<React.SetStateAction<string>>;
};

const SocialMedia = ({
  facebookUrl,
  setFacebookUrl,
  instagramUrl,
  setInstagramUrl,
  xUrl,
  setXUrl,
  linkedInUrl,
  setLinkedInUrl,
  gitHubUrl,
  setGitHubUrl,
}: propsType) => {
  const [facebookChecked, setFacebookChecked] = useState(false);
  const [instagramChecked, setInstagramChecked] = useState(false);
  const [xChecked, setXChecked] = useState(false);
  const [linkedInChecked, setLinkedInChecked] = useState(false);
  const [gitHubChecked, setGitHubChecked] = useState(false);

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
        Liens de vos Média Sociaux
      </Typography>
      <section className="grid border border-slate-900/50 dark:border-slate-50/50 shadow-xs shadow-slate-900 dark:shadow-slate-50  rounded-lg p-5 m-5">
        <div className="flex justify-center items-center gap-5 flex-col p-5 w-full">
          <div className="w-full grid grid-cols-2 items-center">
            <div className="w-full grid grid-cols-2 items-center">
              <label
                className="grid grid-cols-2 items-center gap-5 font-bold text-left"
                htmlFor="facebookCheck"
              >
                <span className="hidden md:grid">Facebook</span>
                <FacebookIcon fontSize="large" />
              </label>
              <div className="checkbox-wrapper-31">
                <input
                  id="facebookCheck"
                  type="checkbox"
                  checked={facebookChecked}
                  onClick={() => setFacebookChecked(!facebookChecked)}
                  onChange={() => console.log(facebookChecked)}
                />
                <svg viewBox="0 0 35.6 35.6">
                  <circle
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                  ></polyline>
                </svg>
              </div>
            </div>
            <TextField
              id="facebookUrl"
              label="Url de votre Page Facebook"
              variant="outlined"
              disabled={!facebookChecked}
              value={facebookUrl}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFacebookUrl(e.target.value);
              }}
            />
          </div>
          <div className="w-full grid grid-cols-2 items-center">
            <div className="w-full grid grid-cols-2 items-center">
              <label
                className="grid grid-cols-2 items-center gap-5 font-bold text-left"
                htmlFor="instagramCheck"
              >
                <span className="hidden md:grid">Instagram</span>
                <InstagramIcon />
              </label>
              <div className="checkbox-wrapper-31">
                <input
                  id="instagramCheck"
                  type="checkbox"
                  checked={instagramChecked}
                  onClick={() => setInstagramChecked(!instagramChecked)}
                  onChange={() => console.log(instagramChecked)}
                />
                <svg viewBox="0 0 35.6 35.6">
                  <circle
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                  ></polyline>
                </svg>
              </div>
            </div>
            <TextField
              id="instagramUrl"
              label="Url de votre Page Instagram"
              variant="outlined"
              disabled={!instagramChecked}
              value={instagramUrl}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setInstagramUrl(e.target.value);
              }}
            />
          </div>
          <div className="w-full grid grid-cols-2 items-center">
            <div className="w-full grid grid-cols-2 items-center">
              <label
                className="grid grid-cols-2 items-center gap-5 font-bold text-left"
                htmlFor="xCheck"
              >
                <span className="hidden md:grid">X</span>
                <XIcon />
              </label>
              <div className="checkbox-wrapper-31">
                <input
                  id="xCheck"
                  type="checkbox"
                  checked={xChecked}
                  onClick={() => setXChecked(!xChecked)}
                  onChange={() => console.log(xChecked)}
                />
                <svg viewBox="0 0 35.6 35.6">
                  <circle
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                  ></polyline>
                </svg>
              </div>
            </div>
            <TextField
              id="xUrl"
              label="Url de votre Page X"
              variant="outlined"
              disabled={!xChecked}
              value={xUrl}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setXUrl(e.target.value);
              }}
            />
          </div>
          <div className="w-full grid grid-cols-2 items-center">
            <div className="w-full grid grid-cols-2 items-center">
              <label
                className="grid grid-cols-2 items-center gap-5 font-bold text-left"
                htmlFor="linkedInCheck"
              >
                <span className="hidden md:grid">Linked In</span>
                <LinkedInIcon />
              </label>
              <div className="checkbox-wrapper-31">
                <input
                  id="linkedInCheck"
                  type="checkbox"
                  checked={linkedInChecked}
                  onClick={() => setLinkedInChecked(!linkedInChecked)}
                  onChange={() => console.log(linkedInChecked)}
                />
                <svg viewBox="0 0 35.6 35.6">
                  <circle
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                  ></polyline>
                </svg>
              </div>
            </div>
            <TextField
              id="linkedInUrl"
              label="Url de votre Page LinkedIn"
              variant="outlined"
              disabled={!linkedInChecked}
              value={linkedInUrl}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setLinkedInUrl(e.target.value);
              }}
            />
          </div>
          <div className="w-full grid grid-cols-2 items-center">
            <div className="w-full grid grid-cols-2 items-center">
              <label
                className="grid grid-cols-2 items-center gap-5 font-bold text-left"
                htmlFor="gitHubCheck"
              >
                <span className="hidden md:grid">Git Hub</span>
                <GitHubIcon />
              </label>
              <div className="checkbox-wrapper-31">
                <input
                  id="gitHubCheck"
                  type="checkbox"
                  checked={gitHubChecked}
                  onClick={() => setGitHubChecked(!gitHubChecked)}
                  onChange={() => console.log(gitHubChecked)}
                />
                <svg viewBox="0 0 35.6 35.6">
                  <circle
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                  ></polyline>
                </svg>
              </div>
            </div>
            <TextField
              id="gitHubUrl"
              label="Url de votre Page GitHub"
              variant="outlined"
              disabled={!gitHubChecked}
              value={gitHubUrl}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setGitHubUrl(e.target.value);
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
  return content;
};

export default SocialMedia;
