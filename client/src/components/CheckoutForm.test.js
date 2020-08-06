import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText, debug } = render(<CheckoutForm />);
  const h2 = getByText(/checkout form/i);
  expect(h2).toBeInTheDocument();
  // debug();
});

test("form shows success message on submit with form details", async () => {
  const { getByLabelText, getByText, getByTestId, debug } = render(
    <CheckoutForm />
  );
  // Testing first name field
  const firstName = getByLabelText(/first name/i);
  await userEvent.type(firstName, "Chris");
  expect(firstName).toHaveValue("Chris");
  // Testing last name field
  const lastName = getByLabelText(/last name/i);
  await userEvent.type(lastName, "Adams");
  expect(lastName).toHaveValue("Adams");
  // Testing address field
  const address = getByLabelText(/address/i);
  await userEvent.type(address, "123 test way");
  expect(address).toHaveValue("123 test way");
  // Testing city field
  const city = getByLabelText(/city/i);
  await userEvent.type(city, "Tampa");
  expect(city).toHaveValue("Tampa");
  // Testing state field
  const state = getByLabelText(/state/i);
  await userEvent.type(state, "Florida");
  expect(state).toHaveValue("Florida");
  // Testing zip field
  const zip = getByLabelText(/zip/i);
  await userEvent.type(zip, "12345");
  expect(zip).toHaveValue("12345");
  // Button for submitting the form
  const btn = getByText("Checkout");
  expect(btn).toBeInTheDocument();
  await userEvent.click(btn);
  //  Checking success message
  const success = getByTestId("successMessage");
  expect(success).toBeInTheDocument();
  // debug();
});

test("form with fire event", async () => {
  const { getByLabelText, getByText, getByTestId, debug } = render(
    <CheckoutForm />
  );
  // Testing first name field
  const firstName = getByLabelText(/first name/i);
  await fireEvent.change(firstName, { target: { value: "Chris" } });
  expect(firstName).toHaveValue("Chris");
  // Testing last name field
  const lastName = getByLabelText(/last name/i);
  await fireEvent.change(lastName, { target: { value: "Adams" } });
  expect(lastName).toHaveValue("Adams");
  // Testing address field
  const address = getByLabelText(/address/i);
  await fireEvent.change(address, { target: { value: "123 test way" } });
  expect(address).toHaveValue("123 test way");
  // Testing city field
  const city = getByLabelText(/city/i);
  await fireEvent.change(city, { target: { value: "Tampa" } });
  expect(city).toHaveValue("Tampa");
  // Testing state field
  const state = getByLabelText(/state/i);
  await fireEvent.change(state, { target: { value: "Florida" } });
  expect(state).toHaveValue("Florida");
  // Testing zip field
  const zip = getByLabelText(/zip/i);
  await fireEvent.change(zip, { target: { value: "12345" } });
  expect(zip).toHaveValue("12345");
  // Button for submitting the form
  const btn = getByText("Checkout");
  expect(btn).toBeInTheDocument();
  await fireEvent.click(btn);
  //  Checking success message
  const success = getByTestId("successMessage");
  expect(success).toBeInTheDocument();
  // debug();
});
