export default class LivingThing {
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name(){
    return this._name;
  }

  set name(name){
    this._name = name;
  }


  get uniCellular(){
    if(this._uniCellular){
      return true;
    }else{
      return false;
    }
  }


  set uniCellular(uniCellular){
    this._uniCellular = uniCellular
  }

  get multiCellular(uniCellular){
    if(this._uniCellular){
      return false;
    }else{
      return true;
    }
  }

  set multiCellular(multiCellular){
    this._uniCellular = !multiCellular;
  }


  get eukaryote(){
    if(this._trueNucleus){
      return true;
    }else{
      return false;
    }
  }

  set eukaryote(eukaryote){
    this._trueNucleus = eukaryote;
  }

}