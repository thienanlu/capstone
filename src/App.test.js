import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './assets/BookingForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('booking function', ()  => {
  render( <BookingForm />)
  const title = screen.getByText('RESERVE A TABLE')
  expect(title).toBeInTheDocument()
})
