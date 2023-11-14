// ImageUploader.js
import React from 'react';
import './ImageUploader.css';
import { FaCloudUploadAlt } from 'react-icons/fa';

const ImageUploader = ({ onImageUpload }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (onImageUpload && typeof onImageUpload === 'function') {
          onImageUpload(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-uploader">
      <label htmlFor="fileInput" className="upload-area">
        <FaCloudUploadAlt className="upload-icon" />
        <p>Click or drag an image here to upload.</p>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          id="fileInput"
          className="file-input"
        />
      </label>
    </div>
  );
};

export default ImageUploader;
