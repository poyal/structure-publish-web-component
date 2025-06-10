import {withActions} from '@storybook/addon-actions/decorator';
import {fn}          from '@storybook/test';

export default {
  title:     '@features/button/button-blue',
  component: 'button-blue',

  render: ({innerHTML}) => {
    const html = document.createElement('div');
    html.innerHTML =
      `
    <button-blue>${innerHTML}</button-blue>
`;

    return html;
  },

  args: {
    innerHTML: 'DEFAULT',
    '@click':  fn(),
  },

  argTypes: {
    innerHTML: {
      control:     'text',
      description: '버튼 내부 HTML',

      table: {
        defaultValue: {
          summary: 'BLUE'
        },

        category: 'SLOTS',

        type: {
          summary: 'HTML'
        },
      },
    },

    '@click': {
      description: '버튼 클릭 이벤트',

      table: {
        category: 'EVENTS',

        type: {
          summary: 'event'
        },
      },
    },
  },

  parameters: {
    actions: {
      handles: ['@click'],
    },
  },

  decorators: [withActions],

  tags: ['autodocs'],
};

export const DEFAULT = {};
