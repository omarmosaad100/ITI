const linkedList = {
    data : [{val: null}],

    Enq : function (input) {

        if (this.data[0].val == null)
            this.data[0].val = input;
        
        else if (input < this.data[this.data.length - 1].val)
            throw new RangeError ("The value should be more than last inserted value}");
        
        else
            this.data.push({val: input});
    },

    Insert : function (input) {

        values = this.data.map(obj => obj.val)

        if (values.includes(input))
            throw new Error ("Value already inserted");

        else if (this.data[0].val == null)
            this.data[0].val = input;

        else if (input < this.data[0].val)
            this.data.unshift({val: input});

        else if (input > this.data[this.data.length - 1].val)
            this.data.push({val: input});
        
        else
            for (i = 0; i < this.data.length; i++)
                if (input > this.data[i].val && input < this.data[i + 1].val)
                    this.data.splice(i + 1, 0, {val: input}); 
    },

    popObj : function (){
        this.data.pop();
    },

    Remove : function (input){
        for (i = 0; i < this.data.length; i++)
            if (input == this.data[i].val)
                this.data.splice(i, 1);
    },

    Deq : function (){
        this.data.shift();
    },

    Display : function (){
        for (i = 0; i < this.data.length; i++)
                console.log(this.data[i])
    }

    
}

//linkedList.data[0].val
//linkedList.Insert()
//linkedList.data.map(obj => obj.val)
//linkedList.data.pop;
//linkedList.Display()
//linkedList.Deq()
//linkedList.Remove(2)
//linkedList.popObj()
//linkedList.Enq(2)