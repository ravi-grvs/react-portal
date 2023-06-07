import {  Input, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";


interface Props{
    onChange:(value:string)=> void;
    placeHolder?: string
}
export const SearchInput = ({onChange, placeHolder}:Props) => {
    const [value, setValue] = React.useState("");

    useEffect(()=>{
        onChange(value);
    }, [value])

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <>
            <Stack spacing={3}>
                <Input
                 boxShadow={"sm"}
                    value={value}
                    onChange={handleChange}
                    focusBorderColor='green.300'
                    placeholder={placeHolder||"Search..."}
                    size="md"
                />
            </Stack>
        </>
    );
};
