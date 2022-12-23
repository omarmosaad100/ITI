var customObj = function(start, end, step) {

    var arr = [];

    var fillArr = function () {

        for (var i = start; i < end; i+=step)
            arr.push(i);
    };

    fillArr();


      Object.defineProperty(this, 'popObj', {
        value: function (){
            arr.pop();
        },

        writable: false,
        enumerable: false,
        configurable: false
      });

      Object.defineProperty(customObj, 'Deq', {
        value: function (){
            arr.shift();
        },

        writable: false,
        enumerable: false,
        configurable: false
      });


      Object.defineProperty(customObj, 'append', {
        value: function (val){
            if (arr[0] == null)
            arr[0] = input;
        
            else if (input < arr[arr.length - 1])
                throw new RangeError ("The value should be more than last inserted value}");
            
            else
                arr.push(val);
        },

        writable: false,
        enumerable: false,
        configurable: false
      });

      
      Object.defineProperty(customObj, 'prepend', {
        value: function (val){
            if (arr[0].val == null)
            arr[0].val = input;
        
            else if (input > arr[0])
                throw new RangeError ("The value should be less than the least value}");
            
            else
                arr.unshift(val);
        },

        writable: false,
        enumerable: false,
        configurable: false
      });
    



      Object.defineProperty(this, 'getArr', {
        value : function () {
          return arr;
        },
        enumerable: true,
        configurable: false
      });

    }
  
  
  var newX = new customObj(0, 8, 2);

  console.log(newX.getArr());
  
  
  newX.popObj();
  
  console.log(newX.getArr());
  
  
  
  
  
  
  
  
  
  
  
  
  
  