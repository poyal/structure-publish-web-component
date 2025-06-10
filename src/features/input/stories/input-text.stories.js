import {withActions} from '@storybook/addon-actions/decorator';
import {fn}          from '@storybook/test';

export default {
  title:     '@features/input/input-text',
  component: 'input-text',

  render: (args) => {
    const html = document.createElement('div');
    html.innerHTML =
      `
    <input-text></input-text>
`;

    html.querySelector('input-text').addEventListener('@input', (event) => {
      args['@input'](event);
    });

    html.querySelector('input-text').addEventListener('@change', (event) => {
      args['@change'](event);
    });

    return html;
  },

  args: {
    '@input':  fn(),
    '@change': fn(),
  },

  argTypes: {
    '@input': {
      description: '인풋 데이터 변경 이벤트',

      table: {
        category: 'EVENTS',

        type: {
          summary: 'event'
        },
      },
    },

    '@change': {
      description: '인풋 데이터 변경 이후 이벤트',

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
      handles: ['@input', '@change'],
    },
  },

  decorators: [withActions],

  tags: ['autodocs'],
};

export const DEFAULT = {};
