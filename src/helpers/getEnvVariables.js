
export const getEnvVariables = () => {
    return {
      YOUR_SERVICE_ID: import.meta.env.VITE_YOUR_SERVICE_ID,
      YOUR_TEMPLATE_ID: import.meta.env.VITE_YOUR_TEMPLATE_ID,
      YOUR_USER_ID: import.meta.env.VITE_YOUR_USER_ID,
    };
  };