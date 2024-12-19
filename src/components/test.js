import BookingForm from "./BookingForm";
import { render, screen } from "@testing-library/react";

test('rendering form heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText('RESERVE A TABLE')
    expect(headingElement).toBeInTheDocument()
})