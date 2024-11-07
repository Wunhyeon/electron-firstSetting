import { ElectronAPI } from '@electron-toolkit/preload'
import { HANDLE_HELLO } from '@shared/constants'
import { GET_HELLO } from '@shared/types'

declare global {
  interface Window {
    electron: ElectronAPI
    context: {
      [HANDLE_HELLO]: GET_HELLO
    }
  }
}
