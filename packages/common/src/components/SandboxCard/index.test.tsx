import * as React from 'react';
import * as Fixtures from './fixtures';
import { renderWithTheme } from '../../test/renderers';

describe('SandboxCard', () => {
  it('should render the counts', () => {
    const basic = renderWithTheme(<Fixtures.Basic />);
    const popular = renderWithTheme(<Fixtures.Popular />);

    expect(basic.find('[data-test=fork_count]').text()).toBe('100');
    expect(basic.find('[data-test=like_count]').text()).toBe('100');
    expect(basic.find('[data-test=view_count]').text()).toBe('100');

    expect(popular.find('[data-test=fork_count]').text()).toBe('1000.0M');
    expect(popular.find('[data-test=like_count]').text()).toBe('1000.0M');
    expect(popular.find('[data-test=view_count]').text()).toBe('1000.0M');
  });
});
