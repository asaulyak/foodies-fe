import css from './UploadFile.module.css';
import clsx from 'clsx';
import { Icon } from '../Icon/Icon.jsx';
export const UploadFile = ({
  selectedImage,
  setSelectedImage,
  name,
  register = () => {},
  errors,
}) => {
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
            {!selectedImage && <Icon iconId="camera" width={64} height={64} />}
            <span className={css.upload_description}>
              {selectedImage ? `Upload another photo` : `Upload a photo`}
            </span>
          </div>
        </label>
        <input
          name={name}
          type="file"
          className={css.input_file}
          accept="image/*"
          id="input-file"
          {...register(name, {
            onChange: handleImageChange,
          })}
        />
      </>
      {errors && (
        <span className={clsx([css.file_error, 'error-form'])}>
          {errors.message}
        </span>
      )}
    </div>
  );
};
