import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ParamsType } from '@/types/globalTypes';

interface State {
  babies: ParamsType[];
}
interface Action {
  setBabies: (text: ParamsType[]) => void;
}

const useSignupStore = create<State & Action>()(
  devtools((set) => {
    return {
      // state
      babies: [],

      // actions
      setBabies: (text: string) => {
        set({ babies: text });
        console.log(text);
      },
    };
  }),
);

export default useSignupStore;
