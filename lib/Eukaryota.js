import LivingThing from './LivingThing.js';

export default class Eukaryota extends LivingThing{
  constructor(name, uniCellular, asexual, mobile, heterotroph){
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph(){
    if(this._heterotroph){
      return true;
    }else{
      return false;
    }
  }

  set heterotroph(heterotroph){
    this._heterotroph = heterotroph;
  }

  get autotroph(){
    if(this._heterotroph){
      return false;
    }else{
      return true;
    }
  }

  set autotroph(heterotroph){
    this._heterotroph = !heterotroph;
  }

}
