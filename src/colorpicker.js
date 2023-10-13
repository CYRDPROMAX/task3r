import React, { useState } from 'react';
import './colorpicker.css';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setIsColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setIsColorListVisible(false);
  };

  return (
    <div className="color-picker-container">
      <div className="color-picker-box">
        <div className="colors-row">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color"
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelection(color)}
            ></div>
          ))}
        </div>
        <button onClick={toggleColorList}>
          {selectedColor ? `Selected Color: ${selectedColor}` : 'Pick a color'}
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
