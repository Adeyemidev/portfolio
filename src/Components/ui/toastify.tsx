// utils/toast.ts or components/Toast.ts
import { toast } from 'react-toastify';

interface ToastOptions {
  position?: 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  style?: React.CSSProperties;
}

class Toast {
  private defaultOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: {
      borderRadius: '8px',
      fontWeight: '500',
    }
  };

  private getToastStyle = (type: 'success' | 'error' | 'info' | 'warning') => {
    const styles = {
      success: { backgroundColor: '#059669', color: '#ffffff' },
      error: { backgroundColor: '#dc2626', color: '#ffffff' },
      info: { backgroundColor: '#0891b2', color: '#ffffff' },
      warning: { backgroundColor: '#d97706', color: '#ffffff' }
    };
    return styles[type];
  };

  success = (message: string, options?: ToastOptions) => {
    toast.success(message, {
      ...this.defaultOptions,
      ...options,
      style: {
        ...this.defaultOptions.style,
        ...this.getToastStyle('success'),
        ...options?.style
      }
    });
  };

  error = (message: string, options?: ToastOptions) => {
    toast.error(message, {
      ...this.defaultOptions,
      ...options,
      style: {
        ...this.defaultOptions.style,
        ...this.getToastStyle('error'),
        ...options?.style
      }
    });
  };

  info = (message: string, options?: ToastOptions) => {
    toast.info(message, {
      ...this.defaultOptions,
      ...options,
      style: {
        ...this.defaultOptions.style,
        ...this.getToastStyle('info'),
        ...options?.style
      }
    });
  };

  warning = (message: string, options?: ToastOptions) => {
    toast.warn(message, {
      ...this.defaultOptions,
      ...options,
      style: {
        ...this.defaultOptions.style,
        ...this.getToastStyle('warning'),
        ...options?.style
      }
    });
  };

  show = (type: 'success' | 'error', message: string, options?: ToastOptions) => {
    this[type](message, options);
  };
}

export const notify = new Toast();

export const showToast = {
  success: (message: string, options?: ToastOptions) => {
    const defaultOptions = {
      position: 'top-right' as const,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        borderRadius: '8px',
        fontWeight: '500',
        backgroundColor: '#059669',
        color: '#ffffff',
        ...options?.style
      }
    };
    
    toast.success(message, { ...defaultOptions, ...options });
  },

  error: (message: string, options?: ToastOptions) => {
    const defaultOptions = {
      position: 'top-right' as const,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        borderRadius: '8px',
        fontWeight: '500',
        backgroundColor: '#dc2626',
        color: '#ffffff',
        ...options?.style
      }
    };
    
    toast.error(message, { ...defaultOptions, ...options });
  },

  info: (message: string, options?: ToastOptions) => {
    const defaultOptions = {
      position: 'top-right' as const,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        borderRadius: '8px',
        fontWeight: '500',
        backgroundColor: '#0891b2',
        color: '#ffffff',
        ...options?.style
      }
    };
    
    toast.info(message, { ...defaultOptions, ...options });
  },

  warning: (message: string, options?: ToastOptions) => {
    const defaultOptions = {
      position: 'top-right' as const,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        borderRadius: '8px',
        fontWeight: '500',
        backgroundColor: '#d97706',
        color: '#ffffff',
        ...options?.style
      }
    };
    
    toast.warn(message, { ...defaultOptions, ...options });
  }
};

export const useToast = () => {
  return {
    success: showToast.success,
    error: showToast.error,
    info: showToast.info,
    warning: showToast.warning
  };
};