import { create } from "zustand";

const useStore = create((set, get) => ({
  pass: "",
 
  generar: () => {

    const caracter = '123456789' + "abcdefghijklmnopqrstuvwxyz" + '+ "-_@/+{.,#&%$' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = "";
    const length = 20;

    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() *caracter.length);
      result+= caracter[random];
    }
    set({ pass: result });
    
  },


  copiar: async () =>{
    
    
    const {pass} = get()

    try{
        await navigator.clipboard.writeText(pass)
        alert('COPIADO CON EXITO')
    } catch (err){
        alert ('ERROR AL COPIAR')
    }   

   }
}));

export default useStore;
