import { useState } from 'react';
import css from './UploadFile.module.css';
// import clsx from 'clsx';
export const UploadFile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  return (
    <>
      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Uploaded Preview" width="551" />
          <input
            type="file"
            className={css.input_file}
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      )}
      {!selectedImage && (
        <div>
          <input
            type="file"
            className={css.input_file}
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      )}
    </>
  );
};
