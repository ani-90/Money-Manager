
function remove(){

    const clsbtn=document.getElementById("inc").style.display="none";
    document.getElementById("f1").value='';
    document.getElementById("f2").value='';
    document.getElementById("f3").value='';
    document.getElementById("f4").value='';
    document.getElementById("f5").value='';
    document.getElementById("f6").value='';
    
    

}

function add_income(){
    document.getElementById("inc_exp").innerHTML="Income Tracker";
    const inc=document.getElementById("inc").style.display="block";

}
function add_expense(){
    document.getElementById("inc_exp").innerHTML="Expense Tracker";
    const inc=document.getElementById("inc").style.display="block";
    
}

function save()
{
    var f1=document.getElementById("f1").value;
    var f2=document.getElementById("f2").value;
    var f3=document.getElementById("f3").value;
    var f4=document.getElementById("f4").value;
    var f5=document.getElementById("f5").value;
    var f6=document.getElementById("f6").value;
    if (f1!=="" &&f2!=="" &&f3!=="" &&f4!=="" &&(f5!=="" || f6!=="") )
    {
        document.getElementById("inc").style.display="none";
        document.getElementById("data").style.display="block";
         document.getElementById("f1").value=null;
      document.getElementById("f2").value=null;
    document.getElementById("f3").value=null
     document.getElementById("f4").value=null
     document.getElementById("f5").value=null
     document.getElementById("f6").value=null
     document.getElementById("fk").value=null
     document.getElementById("fj").value=null

    }
    else{
        alert("Entire all the required fields!!")
        document.getElementById("inc").style.display="block";
    }
}

function message_confirm()
{
    document.getElementById("inc").style.display="none";   
    document.getElementById("data").style.display="none";
    prompt('Data has been added successfully')
}


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


function foo()
{
    var d=document.getElementById('f2').value
    var dt=new Date(d)
    var month=document.getElementById('fk')
    month.value=monthNames[dt.getMonth()]
    var year=document.getElementById('fj')
    year.value=dt.getUTCFullYear();

}
