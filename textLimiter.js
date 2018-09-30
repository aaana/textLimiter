var flag = true;
$('.textLimiter').on('compositionstart',function(){
    console.log("composition--start");
    flag = false;
})
$('.textLimiter').on('compositionend',function(){
    console.log("composition--end"+$(this).val().length);
    flag = true;

})
$('.textLimiter').blur(function(){
    console.log("input");
    var _this = this;
    setTimeout(function(){
        $(_this).next().text("");
    },0)
})
$('.textLimiter').on('input',function(){
    console.log("input");
    var _this = this;
    setTimeout(function(){
        if(flag){
            $(_this).next().text("还可以输入" + ($(_this).attr('maxlength') - $(_this).val().length) + "个字");
            console.log($(_this).val());
        }
    },0)
})