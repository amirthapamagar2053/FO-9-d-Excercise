import { CoursePart } from "../App";

interface PartProps {
  courseParts: CoursePart[];
}
const Part = (props: PartProps): JSX.Element => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };
  return (
    <>
      {props.courseParts.map((part, index) => {
        switch (part.kind) {
          case "basic":
            return (
              <>
                <p key={index}>
                  <strong>
                    {part.name} {part.exerciseCount}
                  </strong>
                </p>
                <p>{part.description}</p>
              </>
            );
          case "group":
            return (
              <>
                <p key={index}>
                  <strong>
                    {part.name} {part.exerciseCount}
                  </strong>
                </p>
                <p>{"project excercises" + part.groupProjectCount}</p>
              </>
            );

          case "background":
            return (
              <>
                <p key={index}>
                  <strong>
                    {part.name} {part.exerciseCount}
                  </strong>
                </p>
                <p>{part.description}</p>
                <p>{"submit to" + part.backroundMaterial}</p>
              </>
            );

          case "special":
            return (
              <>
                <p key={index}>
                  <strong>
                    {part.name} {part.exerciseCount}{" "}
                  </strong>
                </p>
                <p>{part.description}</p>
                <p>
                  {"required skills:" +
                    part.requirements.map((skills) => skills)}
                </p>
              </>
            );

          default:
            return assertNever(part);
        }
      })}
    </>
  );
};

export default Part;
