import {withActions} from '@storybook/addon-actions/decorator';
import {fn}          from '@storybook/test';

export default {
  title:     '@widgets/album/album-search',
  component: 'album-search',

  render: (args) => {
    const html = document.createElement('div');
    html.innerHTML =
      `
    <album-search></album-search>
`;

    html.querySelector('album-search').addEventListener('@apply', (event) => {
      args['@apply'](event);
    });

    return html;
  },

  args: {
    '@apply': fn(),
  },

  argTypes: {
    '@apply': {
      description: '검색 이벤트',

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
      handles: ['@apply'],
    },
  },

  decorators: [withActions],

  tags: ['autodocs'],
};

export const DEFAULT = {};
