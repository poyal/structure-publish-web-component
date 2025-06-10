import {withActions} from '@storybook/addon-actions/decorator';

export default {
  title:     '@widgets/sample/recursive-test',
  component: 'recursive-test',

  render: ({step}) => {
    const html = document.createElement('div');
    html.innerHTML =
      `
    <recursive-test step="${step}"></recursive-test>
`;

    return html;
  },

  args: {
    step: 0,
  },

  argTypes: {
    step: {
      control:     'number',
      description: '반복 초기수',

      table: {
        category: 'PROPS',

        type: {
          summary: 'number'
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
