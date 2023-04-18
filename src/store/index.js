import { reactive } from "vue";

/**
 * các biến global
 */
const state = reactive({
  /**
   * Mảng chứa các toast message
   */
  toastMessage: [],

  accountLogin: false,
  isLoadding: false,
  /**
   * Hàm hiển thị toast message
   */
  addToastMessage: function (me, msg) {
    me.$state.toastMessage.unshift(msg);
    if (this.timeout) clearTimeout(this.timeout);
    setTimeout(() => {
      me.$state.toastMessage.splice(me.$state.toastMessage.length - 1, 1);
      clearTimeout();
    }, 4000);
  },
  isMask() {
    this.isLoadding = true;
  },
  unMask() {
    this.isLoadding = false;
  },
});

export default {
  state,
};
