import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import EmojiResultsRow from "./EmojiResultRow";
import App from "./App";


test("list should be rendered", () => {
	render(<App/>)
	const el = screen.getAllByTestId("list-test")
	expect(el.length > 0).toEqual(true)

})

