var Configry = require('../src/configry.js');

describe("configry", function() {
  var config = new Configry(
    {
      a:12,
      b:2
    }
    ,['b']
  );

  it("should initialize with default values", function() {
    expect(config.get('a')).toBe(12);
    expect(config.get('b')).toBe(2);
  });

  it("should set nested values",function(){
    config.set("x.b.c.c",123);
    config.set("x.b.c.d",1234);
    config.set("x.b.c.d.d",1235);
  	config.set("x.b.c.d.e",1236);
    expect(config.get("x.b.c.c")).toBe(123);
    expect(config.get("x.b.c.d")).toEqual({d: 1235, e: 1236});
    expect(config.get("x.b.c.d.d")).toBe(1235);
  	expect(config.get("x.b.c.d.e")).toBe(1236);
  });

  it("should persist values after clearing localStorage",function(){
  	config.clearLS();
  	expect(config.get("b")).toBe(2);
  });

  it("should add persistent keys", function(){
  	config.set("c",3,true);
  	config.clearLS();
  	expect(config.get("c")).toBe(3);
  });

});
