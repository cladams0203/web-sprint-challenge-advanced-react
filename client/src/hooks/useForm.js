// write your custom hook here to control your checkout form
import { useState } from "react";

export function useForm(initialState) {
  const [form, setForm] = useState(initialState);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return [form, handleChange];
}
