import { DropdownGroup, InputGroup } from "./fieldTypes";

type FieldTypes = "dropdown" | "text";

interface FieldProps {
  fieldType?: FieldTypes;
  required?: boolean;
  name: string;
}

type FieldComponent = React.FC<FieldProps>;

const Field: FieldComponent = props => {
  const { fieldType } = props;
  switch (fieldType) {
    case "dropdown":
      return <DropdownGroup {...props} />;
    case "text":
      return <InputGroup {...props} />;
    default:
      return <InputGroup {...props} />;
  }
};

export default Field;
