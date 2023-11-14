// App.js
import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader/ImageUploader';
import StyleSlider from './components/StyleSlider/StyleSlider';
import './App.css';

function App() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (imageData) => {
    // Process the image data
    setImage(imageData);
  };
  const handleStyleSelect = (style) => {
    // Now, do something with the selected style
    console.log(style); // Just an example action
  };

  const predefinedStyles = [
    { name: 'Style 1', image: '/workspace/fe_painting-by-number/img.png' },
    { name: 'Style 2', image: '/workspace/fe_painting-by-number/img.png' },
    // ... more styles
  ];

  
  return (
    <div className="App">
      <ImageUploader onImageUpload={handleImageUpload} />
      <StyleSlider styles={predefinedStyles} onStyleSelect={handleStyleSelect} />
      {/* Display the uploaded image */}
      {image && <img src={image} alt="Uploaded" />}
    </div>
  );
}

export default App;