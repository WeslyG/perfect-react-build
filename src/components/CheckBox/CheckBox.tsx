import './CheckBox.css';

import React from 'react';

export interface CheckBoxProps {
  isChecked: boolean;
  onClick: () => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ isChecked = false, onClick }) => {
  return (
    <div onClick={onClick} className={isChecked ? 'checkBoxGreenBorder checkBoxRound' : 'checkBoxRound'}>
      <span className={isChecked ? 'showCheckBox checkmark' : 'hideCheckBox checkmark'}>
        <div className="checkmarkStem"></div>
        <div className="checkmarkKick"></div>
      </span>
    </div>
  );
};
