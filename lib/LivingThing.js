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

  get prokaryote(eukaryote){
    if(this._trueNucleus){
      return false;
    }else{
      return true;
    }
  }

  set prokaryote(eukaryote){
    this._trueNucleus = !eukaryote;
  }


  get anaerobic(anaerobic){
    if(this._anaerobic){
      return true;
    } else{
      return false;
    }
  }

  set anaerobic(anaerobic){
    this._anaerobic = anaerobic;
  }

  get aerobic(aerobic){
    if(this._anaerobic){
      return false
    }else{
      return true;
    }
  }

  set aerobic(aerobic){
    this._anaerobic = !aerobic;
  }

  get asexual(asexual){
    if(this._asexual){
      return true;
    }else{
      return false
    }
  }

  set asexual(asexual){
    this._asexual = asexual;
  }

  get sexual(sexual){
    if(this._asexual){
      return false;
    }else{
      return true;
    }
  }

  set sexual(sexual){
    this._asexual = !sexual;
  }

  get mobile(mobile){
    if(this._mobile){
      return true;
    }else{
      return false;
    }
  }

  set mobile(mobile){
    this._mobile = mobile;
  }

  get immobile(immobile){
    if(this._mobile){
      return false;
    }else{
      return true;
    }
  }

  set immobile(immobile){
    this._mobile = !immobile;
  }



}