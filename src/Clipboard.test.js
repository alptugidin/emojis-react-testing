import React from "react"
import {createEvent, fireEvent, render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App";

test("Clipboard functionalty",  () => {
	render(<App/>)

	const listItem = screen.getAllByTestId("list-item")
	const input = screen.getByTestId("input-test")


	fireEvent.click(listItem[0])

	// fireEvent.input(input, {target:{value: "100" }})

	fireEvent.paste(input, {target:{value: listItem[0].textContent}})

	expect(input.value).toEqual(listItem[0].textContent)


})
