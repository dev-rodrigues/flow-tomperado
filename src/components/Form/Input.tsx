import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps
} from "@chakra-ui/react";

import {FieldError} from 'react-hook-form';
import {forwardRef, ForwardRefRenderFunction} from "react";

interface InputProps extends ChakraInputProps {
    pk: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
                                                                               pk,
                                                                               error = undefined,
                                                                               label,
                                                                               ...rest
                                                                           }: InputProps, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel color="black" htmlFor={pk}>{label}</FormLabel>}
            <ChakraInput
                id={pk}
                name={pk}
                color="black"
                size="lg"
                ref={ref}
                {...rest}
            />
            {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase);