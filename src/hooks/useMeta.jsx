import { useEffect } from "react";

const useMeta = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
    document.description = description;
  }, [title, description]);
};

export default useMeta;
