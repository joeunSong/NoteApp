import create from 'zustand';

export const listOrder_store = create((set) => ({
    listOrder : "",
    setListOrder : (select) => {
        set(() => ({ listOrder: select }));
    },
    removeListOrder : () => {
        set(() => ({ listOrder : ""}))
    }
}));

export const inputs_store = create((set) => ({
    title : "",
    setTitle : (select) => {
        set(() => ({ title: select}));
    },
    context : "",
    setContext : (select) => {
        set(() => ({ context: select}));
    },
    removeAllInputs : () => {
        set(() => ({ title: "", context: "" }));
    }
})) 