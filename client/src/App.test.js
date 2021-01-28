import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<div>test</div>);
  const element = screen.getByText(/test/i);
  expect(element).toBeInTheDocument();
});
