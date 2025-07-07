import type React from "react";
import {
  FloatingLabel,
  Form,
  FormControl,
  Stack,
} from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import {$SearchButton} from "./Button.Styled"

interface Props{
  city: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

export function _SearchForm({city, onChange, onSubmit}: Props) {

  return (
    <>
      <Form className=" ms-5 me-5" onSubmit={onSubmit}>
        <Stack direction="horizontal" gap={2} className=" justify-content-end">
          <FloatingLabel
            className="w-100"
            controlId="floatingInput"
            label="Procurar cidade"
          >
            <FormControl
              className=""
              value={city}
              onChange={onChange}
              type="text"
              placeholder="Procurar cidade"
            />
          </FloatingLabel>

          <$SearchButton type="submit">
            <IoIosSearch color="#ffffff" size={25} />
          </$SearchButton>
        </Stack>
      </Form>
    </>
  );
}
