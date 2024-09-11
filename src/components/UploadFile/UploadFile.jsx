import { useState } from 'react';
import css from './UploadFile.module.css';
import clsx from 'clsx';
export const UploadFile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  return (
    <div className={clsx(css.form_file, { [css.upload_file]: selectedImage })}>
      {selectedImage && (
        <>
          <div className={css.upload_img_block}>
            <img src={selectedImage} alt="Uploaded Preview" width="551" />
          </div>
        </>
      )}
      <>
        <label htmlFor="input-file" className={css.label_upload}>
          <div className={css.file_info}>
            {!selectedImage && (
              <img
                src={`${import.meta.env.BASE_URL}/upload-file.png`}
                alt="upload-file"
                width="64"
                height="64"
                className={css.default_img}
              />
            )}
            <span className={css.upload_description}>
              {selectedImage ? `Upload another photo` : `Upload a photo`}
            </span>
          </div>
        </label>
        <input
          type="file"
          className={css.input_file}
          accept="image/*"
          onChange={handleImageChange}
          id="input-file"
          name="input-file"
        />
      </>

      {/* <span className={css.upload_description}>Upload another photo</span> */}
      {/* {!selectedImage && (
        <>
          <div className={css.file_info}>
            <img
              src={`${import.meta.env.BASE_URL}/upload-file.png`}
              alt="upload-file"
              width="64"
              height="64"
              className={css.default_img}
            />
            <span className={css.upload_description}>Upload a photo</span>
          </div>
        </>
      )} */}
    </div>
  );
};
