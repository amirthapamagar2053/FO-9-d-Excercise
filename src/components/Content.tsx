interface CourseStructure {
  name: string;
  exerciseCount: number;
}
interface ContentProps {
  courseParts: CourseStructure[];
}
const Content = (props: ContentProps): JSX.Element => {
  console.log("the props", props.courseParts);
  return (
    <div>
      <>
        {props.courseParts.map((coursePart, index) => {
          return (
            <p key={index}>
              {coursePart.name} {coursePart.exerciseCount}
            </p>
          );
        })}
      </>
    </div>
  );
};

export default Content;
