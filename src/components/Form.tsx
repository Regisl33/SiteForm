import { useState } from "react";
import UrlForm from "./UrlForm";
import MetaForm from "./MetaForm";
import OpenGraph from "./OpenGraph";
import SocialMedia from "./SocialMedia";

const Form = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [urlKeyword, setUrlKeyword] = useState("");
  const [urlExtension, setUrlExtension] = useState<".ca" | ".com">(".ca");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ogTitle, setOgTitle] = useState("");
  const [ogType, setOgType] = useState("");
  const [ogUrl, setOgUrl] = useState("");
  const [ogLocale, setOgLocale] = useState("");
  const [ogDescription, setOgDescription] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [xUrl, setXUrl] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [gitHubUrl, setGitHubUrl] = useState("");

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
        ogType={ogType}
        setOgType={setOgType}
        ogUrl={ogUrl}
        setOgUrl={setOgUrl}
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
    </form>
  );
};

export default Form;
