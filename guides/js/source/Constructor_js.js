var Constructor_js = (function (){
    function Constructor_func(arg) {
        if(!(this instanceof Constructor_func)) {
            return new Constructor_func(arg);
        }

        this.name = "constructor_func";
        this.arg = arg;
    }
    Constructor_func.prototype.func = function (){
        console.log(this);
    };

    return {
        test: function (){
            //new
            var cf1 = new Constructor_func("cf1");
            cf1.func();

            //not new
            var cf2 = Constructor_func("cf2");    //use this instanceof Constructor_func check the type
            cf2.func();
        }
    }
})();