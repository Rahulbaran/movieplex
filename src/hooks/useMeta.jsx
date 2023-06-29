import { useEffect } from "react";

const useMeta = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
    document
      .querySelector("meta[name=description]")
      .setAttribute("content", description);
  }, [title, description]);
};

export default useMeta;
