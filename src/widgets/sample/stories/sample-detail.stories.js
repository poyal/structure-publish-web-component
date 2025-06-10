export default {
  title:     '@widgets/sample/sample-detail',
  component: 'sample-detail',

  render: () => {
    const html = document.createElement('div');
    html.innerHTML =
      `
    <sample-detail></sample-detail>
`;

    return html;
  },

  tags: ['autodocs'],
};

export const DEFAULT = {};
