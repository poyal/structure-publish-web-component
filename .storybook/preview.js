import {withActions}                          from '@storybook/addon-actions/decorator';
import {INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';

import '/src/main';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },

      layout:  'fullscreen',
      actions: {
        handles: ['click'],
      },
    },

    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      }
    },

    decorators: [withActions],
  },
};

export default preview;
