import { getDownloadURL, getStorage, ref } from "@firebase/storage";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface ImageProps {
  imagePath: string;
  altText: string;
}

const ImageFile = ({ imagePath, altText }: ImageProps) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);

    getDownloadURL(imageRef)
      .then(url => setImageUrl(url))
      .catch(err => {
        console.error("Error", err);
      });
  }, [imagePath]);

  if (!imageUrl) {
    return <LoadingSpinner />;
  }

  return (
    <Image src={imageUrl} alt={altText} width={450} height={250} priority />
  );
};

export default ImageFile;
