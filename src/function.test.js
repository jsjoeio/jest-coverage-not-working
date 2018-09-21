import capitalize from './function'

describe('capitalize', () => {
  it('should capitalize a string', () => {
    const string = 'negative';
    const actual = capitalize(string);
    const expected = 'Negative';
    expect(actual).toEqual(expected);
  });

  it('should throw an error if type is not a string', () => {
    const error = () => {
      throw new TypeError(
        'capitalize() only accepts strings.'
      );
    };
    expect(() => {
      capitalize(2).toThrowError(error);
    });
    expect(() => {
      capitalize(false).toThrowError(error);
    });
    expect(() => {
      capitalize(undefined).toThrowError(error);
    });
    expect(() => {
      capitalize(null).toThrowError(error);
    });
    expect(() => {
      capitalize().toThrowError(error);
    });
    expect(() => {
      capitalize(['hello']).toThrowError(error);
    });
    expect(() => {
      capitalize({ sentiment: 'positive' }).toThrowError(
        error
      );
    });
    const mockFunction = jest.fn();
    expect(() => {
      capitalize(mockFunction).toThrowError(error);
    });
  });
});
