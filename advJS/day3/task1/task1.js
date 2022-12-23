var customObj = function(start, end, step) {

    var arr = [];

    var fillArr = function () {

        arr[0] = start;

        for (i = 1; i < end/step; i ++)
            arr[i] = start + step;
    }();


      Object.defineProperty(customObj, 'popObj', {
        value: function (){
            this.arr.pop();
        },

        writable: false,
        enumerable: false,
        configurable: false
      });

      Object.defineProperty(customObj, 'Deq', {
        value: function (){
            this.arr.shift();
        },

        writable: false,
        enumerable: false,
        configurable: false
      });


      Object.defineProperty(customObj, 'append', {
        value: function (val){
            if (this.arr[0] == null)
            this.arr[0] = input;
        
            else if (input < this.arr[this.arr.length - 1])
                throw new RangeError ("The value should be more than last inserted value}");
            
            else
                this.arr.push(val);
        },

        writable: false,
        enumerable: false,
        configurable: false
      });

      
      Object.defineProperty(customObj, 'prepend', {
        value: function (val){
            if (this.arr[0].val == null)
            this.arr[0].val = input;
        
            else if (input > this.arr[0])
                throw new RangeError ("The value should be less than the least value}");
            
            else
                this.arr.unshift(val);
        },

        writable: false,
        enumerable: false,
        configurable: false
      });
    

      Object.defineProperty(customObj.prototype, 'arr', {
        get: function() {
          return this.arr;
        },
        enumerable: true,
        configurable: false
      });

    }
  
  
  customObj(0, 8, 2);

  console.log(customObj.arr);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  