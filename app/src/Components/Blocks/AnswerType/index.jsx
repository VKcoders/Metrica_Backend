import NormalText from "./NormalText";
import SelectionDegree from "./SelectionDegree";
import SelectionText from "./SelectionText";

const ContentSwitch = ({type, questionInfo}) => {
  const obj = {
    1: <NormalText data={questionInfo} />,
    2: <SelectionDegree data={questionInfo} />,
    3: <SelectionText data={questionInfo} />,
  };
  
  return obj[type];
}

export default ContentSwitch;