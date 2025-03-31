import { useEffect } from "react";

const Head = (props) => {
  useEffect(() => {
    document.title = props.title || "Default Title";
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description || "Default Description");
  }, [props]);
};

export default Head;
