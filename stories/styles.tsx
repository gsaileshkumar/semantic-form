import React from "react";

const StoryWrapper: React.FC = ({ children }) => {
  return <div style={{ width: 500, margin: "0 auto" }}>{children}</div>;
};

interface Values {
  values: object;
}
export const ValuesComponent: React.FC<Values> = ({ values }) => {
  return (
    <div style={{ backgroundColor: "#dddddd", padding: "1rem" }}>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
};

export default StoryWrapper;
