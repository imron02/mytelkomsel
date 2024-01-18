import {create} from 'zustand';

interface LoginState {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
}

export const useAuthStore = create<LoginState>()(set => ({
  phoneNumber: '',
  setPhoneNumber: (phoneNumber: string) => set({phoneNumber}),
}));
