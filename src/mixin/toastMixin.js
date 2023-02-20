import IconSuccess from '@/assets/img/toast/icon-success@2x.png';
import IconPending from '@/assets/img/toast/icon-pending@2x.png';
import IconError from '@/assets/img/toast/icon-error@2x.png';
import config from '@/config';

export default {

  methods: {
    showToast(msg, type, { tx } = {}) {
      const h = this.$createElement;

      let inner = null;

      const iconMap = {
        success: IconSuccess,
        error: IconError,
        pending: IconPending,
      };

      const progressBar = h(
        'div',
        { class: ['progress'] },
        [
          inner = h(
            'div',
            { class: ['progress-inner'] },
          ),
        ],
      );

      setTimeout(() => {
        if (inner && inner.elm) {
          inner.elm.classList.add('fill');
        }
      }, 100);

      const vNodesMsg = [
        h(
          'div',
          { class: ['toast-content'] },
          [
            h('img', {
              class: 'toast-icon',
              attrs: {
                src: iconMap[type],
              },
            }),
            h('div',
              { class: 'text-wrapper' },
              [
                h('span', { class: 'toast-text' }, msg),
                tx ? h('a', {
                  class: 'toast-link',
                  attrs: { href: `${config.browser}/tx/${tx}`, target: '_blank' },
                }, 'View the transaction') : null,
              ]),
          ],
        ),
        progressBar,
      ];

      __g_root__.$bvToast.toast(vNodesMsg, {
        noCloseButton: true,
        autoHideDelay: 3000,
        variant: type,
      });
    },

    showSuccess(msg, options) {
      this.showToast(msg, 'success', options);
    },

    showPending(msg, options) {
      this.showToast(msg, 'pending', options);
    },
    showError(msg, options) {
      this.showToast(msg, 'error', options);
    },
  },
};
