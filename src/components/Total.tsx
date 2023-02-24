interface TotalCountStructure {
  name: string;
  exerciseCount: number;
}

interface TotalProps {
  courseParts: TotalCountStructure[];
}
const Total = (props: TotalProps): JSX.Element => {
  return (
    <div>
      {
        <p>
          Number of exercises{" "}
          {props.courseParts.reduce(
            (carry, part) => carry + part.exerciseCount,
            0
          )}
        </p>
      }
    </div>
  );
};

export default Total;
