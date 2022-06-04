import React from "react"
import {fireEvent, render, screen,} from "@testing-library/react"
import "@testing-library/jest-dom"
import "@testing-library/dom"
import userEvent from "@testing-library/user-event";

import App from "./App";


test("Input functionalty", () => {
	render(<App/>)
	const input = screen.getByTestId("input-test")
	fireEvent.input(input, {target: {value: "Joy"}})
	expect(screen.getAllByTestId("list-item")[0].textContent).toBe("Joy")

})