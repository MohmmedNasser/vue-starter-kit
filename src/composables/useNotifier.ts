import { useToast, TYPE, POSITION } from 'vue-toastification'

const toast = useToast()

//   timeout: 2000,
//   position: "bottom-right",
//   pauseOnHover: true,
//   closeOnClick: true,
//   draggable: true,
//   draggablePercent: 0.6,
//   showCloseButtonOnHover: false,
//   hideProgressBar: false,
//   closeButton: 'button',
//   icon: true,
//   rtl: false,

export function useNotifier() {
  return {
    success: (msg: string) => toast(msg, { type: TYPE.SUCCESS, position: POSITION.BOTTOM_RIGHT }),
    error: (msg: string) => toast(msg, { type: TYPE.ERROR, position: POSITION.TOP_RIGHT }),
    info: (msg: string) => toast(msg, { type: TYPE.INFO, position: POSITION.BOTTOM_RIGHT }),
    warning: (msg: string) => toast(msg, { type: TYPE.WARNING, position: POSITION.BOTTOM_RIGHT }),
  }
}
