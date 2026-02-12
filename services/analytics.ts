export const pushEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined') return;
  // Ensure dataLayer exists
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.dataLayer.push({ event: eventName, ...params });
};

export const pageView = (path: string, title?: string) => {
  pushEvent('virtual_page_view', { page_path: path, page_title: title || document.title });
};
