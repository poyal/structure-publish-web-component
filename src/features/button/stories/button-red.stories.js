import {withActions} from '@storybook/addon-actions/decorator';
import {fn}          from '@storybook/test';

export default {
  title:     '@features/button/button-red',
  component: 'button-red',

  render: ({innerHTML}) => {
    const html = document.createElement('div');
    html.innerHTML =
`
    <button-red>${innerHTML}</button-red>
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
          summary: 'RED'
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
