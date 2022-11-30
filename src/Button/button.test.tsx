import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';

import Button from '.';

describe("testing Button component", () => {
  test("should render Button with 0", () => {
    render(<Button />);
    
    screen.debug();

    expect(screen.getByText(/[0]/)).toBeInTheDocument();
  })

  test("should render Button with 0", async () => {
    render(<Button />);
    
    const button = screen.getByText(/[0]/);
    
    userEvent.click(button);

    screen.debug();

    expect(await screen.findByText(/[1]/)).toBeInTheDocument();
  })
})