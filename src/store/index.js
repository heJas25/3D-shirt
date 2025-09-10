//definition d elobject de base
import { proxy } from "valtio";

const state=proxy({
    intro:true ,// on est dans la home page
    color:'#EFBD48',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png'
});
export default state;