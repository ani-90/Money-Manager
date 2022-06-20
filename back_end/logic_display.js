function showmonth(str){
    if(str!==""){
        $.ajax({
            url:"/",
            method:"POST",
            contentType:"application/json",
            data:JSON.stringify({choice:str}),
            success:function(result){
                console.log(result.html)
                $("#txt-hint").html(result.html)
            }
        })
    }
}