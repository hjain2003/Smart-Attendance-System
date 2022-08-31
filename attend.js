
// const fs=require("fs");
// const csv=require('csvtojson');
// const {Parser}=require('json2csv');

// (async()=>{
//     const attend=await csv().fromFile("attend.csv");
//     console.log(attend);
// })

let arr=[
  {
    ROLLNO: "102103432",
    TIME: "0:13",
    DATE: "25/8/2022"
  },
  {
    ROLLNO: "102103422",
    TIME: "21:04",
    DATE: "25/8/2022"
  },
  {
    ROLLNO: "102103444",
    TIME: "21:04",
    DATE: "25/8/2022"
  },
  {
    ROLLNO: "102105008",
    TIME: "21:16",
    DATE: "26/8/2022"
  },
  {
    ROLLNO: "102103077",
    TIME: "21:33",
    DATE: "26-08-2022",
  },
  {
    ROLLNO: "102103432",
    TIME: "21:33",
    DATE: "27-08-2022"
  }
]


function displayinfo()
{
  let deletethis=document.getElementById('display');
  deletethis.remove();
  let value = document.getElementById('rollno').value; 
  var i = 0, count = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i].ROLLNO == value)
        {
            document.getElementById('displaycontainer').innerHTML+=arr[i].DATE+" ; ";
            count++;
            // document.writeln();
        }
    }
    if(count==0)
    {
      document.getElementById('displaycontainer').style.color="yellow";
      document.getElementById("displaycontainer").style.fontWeight = "900";
      document.getElementById('displaycontainer').innerHTML="No attendance record found!";
    }
    
}
function search() {
    let value = document.getElementById('rollno').value;

    var i = 0, count = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i].ROLLNO == value)
            count++;
    }
   
    let percent=Math.round((count/3)*100);
    
    document.querySelector('#displaycontainer').innerHTML=
    `<div id="display">

    <div id="totalworking">
    Total Working Days : <b>3</b>
    </div>
    
    <hr>
    <div id="totalattended">
    Total days attended : <b>${count}</b>
    </div>

    <hr>
    <div id="percent">
    <b>Percentage Attendance :<span id="colorit"> ${percent}%</span></b>
    </div>

    <button id="moreinfo" onclick="displayinfo()">More details</button>
    </div>`;

    if(percent<75)
        document.getElementById('colorit').style.color="red";
    
    else if(percent>=75)
        document.getElementById('colorit').style.color="green";
    
}

