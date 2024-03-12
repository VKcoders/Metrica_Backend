import React from 'react';

import NormalText from "./NormalText";
import SelectionDegree from "./SelectionDegree";
import SelectionText from "./SelectionText";

const ContentSwitch = ({next, type, questionInfo, saveAnswer}) => {
  const componentKey = `${type}_${questionInfo.id}_${questionInfo.question_id}-${questionInfo.counter}`;

  const obj = {
    1: <NormalText next={next} action={saveAnswer} />,
    2: <SelectionDegree next={next} data={questionInfo.answer} action={saveAnswer} />,
    3: <SelectionText next={next} data={questionInfo.answer} action={saveAnswer} />,
  };

  // Nice solution for this situation
  return React.cloneElement(obj[type], { key: componentKey });
}

export default ContentSwitch;