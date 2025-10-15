import { classNames } from 'shared/lib/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClasses')).toBe('someClasses');
  });

  test('with additional param', () => {
    const expected = 'someClasses class1 class2';
    expect(classNames('someClasses', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods param', () => {
    const expected = 'someClasses class1 class2 hovered scrollable';
    expect(
      classNames('someClasses', { hovered: true, scrollable: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClasses class1 class2 scrollable';
    expect(
      classNames('someClasses', { hovered: false, scrollable: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClasses class1 class2 scrollable';
    expect(
      classNames('someClasses', { hovered: undefined, scrollable: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });
});
