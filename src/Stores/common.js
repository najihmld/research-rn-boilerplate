import create from 'zustand';

const commonStore = create((set, get) => ({
  additionalHandler: () => {},
  onAdditionalHandler: async () => {
    await get().additionalHandler();
  },
  setAdditionalHandler: (additionalHandler) => {
    set({ additionalHandler });
  },
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  message: null,
  setMessage: (message) => {
    set({ message });
  }
}));

export default commonStore;
