import { useState } from "react";
import UrlForm from "./UrlForm";
import MetaForm from "./MetaForm";
import OpenGraph from "./OpenGraph";

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
    </form>
  );
};

export default Form;
