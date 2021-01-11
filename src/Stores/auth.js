import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import fetchApi from '../Utils/api-service';

const authStore = create(
  persist(
    (set, get) => ({
      token: null,
      setToken: (token) => set({ token }),
      onLogout: () => set({ token: null })
    }),
    {
      name: 'auth-storage',
      getStorage: () => AsyncStorage
    }
  )
);

export default authStore;
