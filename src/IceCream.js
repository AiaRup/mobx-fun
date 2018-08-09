import { observable } from "mobx";

class IceCream {
  id;
  @observable flavor;
  @observable color;
  @observable comments = [];

  constructor(flavor, color) {
    IceCream.numInstances = (IceCream.numInstances || 0) + 1;
    this.flavor = flavor;
    this.color = color;
    this.id = IceCream.numInstances;
  }
}

export default IceCream;