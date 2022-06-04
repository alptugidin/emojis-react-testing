import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "./Header"

it("should be rendered", () => {
  render(<Header/>)
  const textInHeader = screen.getByText("Emoji Search")
  expect(textInHeader).toBeInTheDocument()
})