import { create } from 'zustand';

const useImage = create((set) => ({
	img: null,
	showAllInfo: false,
	setImg: (newImg) => set({ img: newImg }),
	showModal: () => set({ showAllInfo:true }),
	hideModal: () => set({ showAllInfo:false })
}));

export default useImage;