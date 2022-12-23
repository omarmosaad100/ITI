var customObj = {

  description : "This function generates getters and setters",
  getSetGen : function () {
  
    props = Object.keys(this);
    
    for (index in props)
    {
        this["get" + props[index]] = (function (index) {

            return this[props[index]];

        }).bind(this, index)


        this["set" + props[index]] = ((function (index) {
        
          return function(val){
            this[props[index]] = val;
          }

        })(index)
        );
    }
  }

}


var employee = {
  name : "joey",
  age : 24,
  school : "CS"
}


customObj.getSetGen.apply(employee);


console.log(employee.getage());


employee.setage(20);

console.log(employee.getage());





















