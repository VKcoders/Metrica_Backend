import NormalText from "./NormalText";
import SelectionDegree from "./SelectionDegree";
import SelectionText from "./SelectionText";

const ContentSwitch = ({next, type, questionInfo, saveAnswer}) => {
  const obj = {
    1: <NormalText next={next} action={saveAnswer} />,
    2: <SelectionDegree next={next} data={questionInfo} action={saveAnswer} />,
    3: <SelectionText next={next} data={questionInfo.answer} action={saveAnswer} />,
  };
  
  return obj[type];
}

export default ContentSwitch;