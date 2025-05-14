 var day=document.getElementById('day');
    day.innerHTML='<option value="">Day</option>';
    for(var i=1;i<=31;i++)
    {
        day.innerHTML+='<option value="'+i+'">'+i+'</option>';
    }
    var month=document.getElementById('month');
    month.innerHTML='<option value="">Month</option>';
    for(var i=1;i<=12;i++)
    {
        month.innerHTML+='<option value="'+i+'">'+i+'</option>';
    }
    var year=document.getElementById('year');
    year.innerHTML='<option value="">Year</option>';
    var curryear=new Date().getFullYear();
    for(var i=2000;i<=curryear;i++)
    {
        year.innerHTML+='<option value="'+i+'">'+i+'</option>';
    }