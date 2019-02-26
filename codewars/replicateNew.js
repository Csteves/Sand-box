function nouveau(Constructor) {
    const args = Array.prototype.slice.call(arguments);
    args.splice(0,1);
    return Reflect.construct(Constructor,args);
  }