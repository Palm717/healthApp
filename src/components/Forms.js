import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

function FormTemplate({ formVal, message }) {
  return (
    <FormControl>
      <FormLabel formVal={formVal}>{formVal}</FormLabel>
      <Input type="input" />
      <FormHelperText message={message}>{message}</FormHelperText>
    </FormControl>
  );
}

export default FormTemplate;
