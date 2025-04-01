import { useState } from "react";
import UrlForm from "./UrlForm";
import MetaForm from "./MetaForm";
import OpenGraph from "./OpenGraph";
import SocialMedia from "./SocialMedia";
import Body from "./Body";
import { Button } from "@mui/material";

const Form = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [urlKeyword, setUrlKeyword] = useState("");
  const [urlExtension, setUrlExtension] = useState<".ca" | ".com">(".ca");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ogTitle, setOgTitle] = useState("");
  const [ogLocale, setOgLocale] = useState("");
  const [ogDescription, setOgDescription] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [xUrl, setXUrl] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [gitHubUrl, setGitHubUrl] = useState("");
  const [titleH1, setTitleH1] = useState("");
  const [text, setText] = useState("");
  const [copyright, setCopyright] = useState(false);

  return (
    <form>
      <UrlForm
        urlKeyword={urlKeyword}
        setUrlKeyword={setUrlKeyword}
        urlExtension={urlExtension}
        setUrlExtension={setUrlExtension}
        setErrorMessage={setErrorMessage}
      />
      <MetaForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />
      <OpenGraph
        ogTitle={ogTitle}
        setOgTitle={setOgTitle}
        ogLocale={ogLocale}
        setOgLocale={setOgLocale}
        ogDescription={ogDescription}
        setOgDescription={setOgDescription}
      />
      <SocialMedia
        facebookUrl={facebookUrl}
        setFacebookUrl={setFacebookUrl}
        instagramUrl={instagramUrl}
        setInstagramUrl={setInstagramUrl}
        xUrl={xUrl}
        setXUrl={setXUrl}
        linkedInUrl={linkedInUrl}
        setLinkedInUrl={setLinkedInUrl}
        gitHubUrl={gitHubUrl}
        setGitHubUrl={setGitHubUrl}
      />
      <Body
        titleH1={titleH1}
        setTitleH1={setTitleH1}
        text={text}
        setText={setText}
        copyright={copyright}
        setCopyright={setCopyright}
      />
      <p>{errorMessage}</p>
      <Button variant="contained" size="large" type="submit">
        Soumettre
      </Button>
    </form>
  );
};

export default Form;
