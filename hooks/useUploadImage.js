import { useEffect, useState } from "react";
import { UPLOADIMAGE } from "../api";

const useUploadImage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImage = async (image, id, setProfileImage) => {
    setLoading(true);

    const uriArray = image.uri.split(".");
    const fileExtension = uriArray[uriArray.length - 1];
    const fileTypeExtended = `${image.type}/${fileExtension}`;
    const formData = new FormData();
    formData.append("profileImage", {
      uri: image.uri,
      name: "profileImage",
      type: fileTypeExtended,
    });
    formData.append("id", id);
    fetch(UPLOADIMAGE, {
      method: "post",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        console.log(json);
        setProfileImage(image.uri);
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "useUpload");
        setError(err);
        setLoading(false);
      });
  };

  return { uploadImage, data, error, loading };
};

export default useUploadImage;
