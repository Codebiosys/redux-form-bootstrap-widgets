import React from 'react';
import { HelpBlock } from 'react-bootstrap';

import validationMessage from 'utils';

describe('The validation message', () => {
  it('returns undefined if the item is not touched', () => {
    const { validationState, errorMessage } = validationMessage({});
    expect(validationState).toEqual(undefined);
    expect(errorMessage).toEqual(undefined);
  });

  it('returns success if the item is dirty, and there are no errors or warnings', () => {
    const { validationState, errorMessage } = validationMessage(
      { dirty: true,
        error: undefined,
        warning: undefined,
      });
    expect(validationState).toEqual('success');
    expect(errorMessage).toEqual(undefined);
  });

  it('returns error with an error message if the item is touched, and there is an error', () => {
    const { validationState, errorMessage } = validationMessage(
      { touched: true,
        error: 'An error Occured',
        warning: undefined,
      });
    expect(validationState).toEqual('error');
    expect(errorMessage).toEqual(<HelpBlock>An error Occured</HelpBlock>);
  });

  it('returns warning with an warning message if the item is touched, and there is a warning', () => {
    const { validationState, errorMessage } = validationMessage(
      { touched: true,
        warning: 'An warning Occured',
        error: undefined,
      });
    expect(validationState).toEqual('warning');
    expect(errorMessage).toEqual(<HelpBlock>An warning Occured</HelpBlock>);
  });

  it('will prioritize errors over warnings', () => {
    const { validationState, errorMessage } = validationMessage(
      { touched: true,
        warning: 'An warning Occured',
        error: 'An error Occured',
      });
    expect(validationState).toEqual('error');
    expect(errorMessage).toEqual(<HelpBlock>An error Occured</HelpBlock>);
  });
});
