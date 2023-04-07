import * as yup from "yup";

export const triggerSchemaValidation = yup.object().shape({
    name: yup.string().required("Enter a name"),
    type: yup.string().required("Select a trigger type"),
});

