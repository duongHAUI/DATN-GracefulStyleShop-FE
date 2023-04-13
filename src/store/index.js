import {reactive} from 'vue'

/**
 * các biến global
 * Author : NVDuong (10/1/2023)
 */
const state = reactive({
  /**
   * Mảng chứa các toast message
   * Author : NVDuong (10/1/2023)
   */
  toastMessage: [],

  accountLogin : false,
  /**
   * Biến to nhỏ Sidebar
   * Author : NVDuong (10/1/2023)
   */
  toggleSidebar : true,
  /**
   * Hàm hiển thị toast message
   * Author : NVDuong (10/1/2023)
   */
  addToastMessage: function (me, msg) {
    me.$state.toastMessage.unshift(msg);
    if (this.timeout) clearTimeout(this.timeout);
    setTimeout(() => {
     me.$state.toastMessage.splice(me.$state.toastMessage.length-1, 1);
     clearTimeout();
   }, 4000);
  },
});

export default {
  state
};
