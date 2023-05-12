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
      <Input type="input" color="whiteAlpha.900" />
      <FormHelperText message={message}>{message}</FormHelperText>
    </FormControl>
  );
}

export default FormTemplate;
