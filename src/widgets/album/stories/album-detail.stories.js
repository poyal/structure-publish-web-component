export default {
  title:     '@widgets/album/album-detail',
  component: 'album-detail',

  render: (args) => {
    const html = document.createElement('div');
    html.innerHTML =
      `
    <album-detail props1="${args.props1}"
                  props2="${args.props2}"
                  long-name-props="${args['long-name-props']}">
        ${args.innerHTML}
    </album-detail>
`;

    return html;
  },

  args: {
    props1:            'props1',
    props2:            'props2',
    'long-name-props': 'long-name-props',

    innerHTML: `<h1>오늘 날씨는 15도입니다.</h1>
        <p>기온이 많이 올라갔지만 따뜻하게 입는 것 잊지 마세요!</p>`,
  },

  argTypes: {
    props1: {
      control:     'text',
      description: 'SAMPLE PROPS1',

      table: {
        category: 'PROPS',

        type: {
          summary: 'string'
        },
      },
    },

    props2: {
      control:     'text',
      description: 'SAMPLE PROPS2',

      table: {
        category: 'PROPS',

        type: {
          summary: 'string'
        },
      },
    },

    'long-name-props': {
      control:     'text',
      description: 'SAMPLE PROPS3',

      table: {
        category: 'PROPS',

        type: {
          summary: 'string'
        },
      },
    },

    innerHTML: {
      control:     'text',
      description: '버튼 내부 HTML',

      table: {
        category: 'SLOTS',

        type: {
          summary: 'HTML'
        },
      },
    },
  },

  tags: ['autodocs'],
};

export const DEFAULT = {};
