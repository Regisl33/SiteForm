import { useState } from "react";
import UrlForm from "./UrlForm";
import MetaForm from "./metaForm";

const Form = () => {
  const [urlKeyword, setUrlKeyword] = useState("");
  const [urlExtension, setUrlExtension] = useState<".ca" | ".com">(".ca");
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
    </form>
  );
};

export default Form;
