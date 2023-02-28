import { CoursePart } from "../App";
import Part from "./Part";
interface ContentProps {
  courseParts: CoursePart[];
}
const Content = (props: ContentProps): JSX.Element => {
  console.log("the props", props.courseParts);
  return (
    <div>
      <>
        <Part courseParts={props.courseParts} />
      </>
    </div>
  );
};

export default Content;
