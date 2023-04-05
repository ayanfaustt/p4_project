import React, { useState } from 'react';
import styled from 'styled-components';

const ImageUploaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagePreview = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-top: 10px;
`;

interface ImageUploaderProps {
  onChange: (image: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onChange }) => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      onChange(e.target.files[0]);
    }
  };

  return (
    <ImageUploaderWrapper>
      <label htmlFor="image-upload">
        Choose an image
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
      {image && <ImagePreview src={URL.createObjectURL(image)} />}
    </ImageUploaderWrapper>
  );
};

export default ImageUploader;