const string = `
 *{box-sizing: border-box;}
 *{margin: 0;padding: 0;}
 *::before,*::after{box-sizing: border-box;}
 .skin{position: relative;
     background:rgb(1, 159, 232);min-height: 50vh;
     z-index:-2;
    }
 .nose{
     border: 8px solid black;
     position: relative;
     width: 80px;
     height: 80px;
     left: 50%;
     top:110px;
     margin-left:-40px;
     border-radius:50%;
     background:red;
     z-index: 5;
 }
 @media(min-width:500px){
    .nose{
        top:190px;
    }
 }
 .nose::before{
     content:'';
     border:1px solid red;
     width:30px;
     height:30px;
     border-radius:50%;
     background:rgb(255,255,255);
     position:absolute;
     margin-left:8px;
     top:2px;
     z-index:5;
 }

 @media(min-width:500px){
    .eye{
        top:160px;
    }
 }
 .eye{
     border: 8px solid black;
     background: rgb(255, 255, 255);
     position:absolute;
     width: 150px;
     height: 150px;
     border-radius:50%;
     left:50%;
     margin-left:-75px;
     margin-top:-60px;
 }
 .yuan3{
     position:absolute;
     width:25px;
     height:40px;
     left:30px;
     margin-left:-25px;
     bottom:52px;
     border-radius:50%;
     background:black;
 }
 .yuan4{
    position:absolute;
    width:25px;
    height:40px;
    right:5px;
    margin-left:-25px;
    bottom:52px;
    border-radius:50%;
    background:black;
 }
 .yuan3::before{
    content: '';
    border:1px solid black;
    display: block;
    width: 12px;
    height: 16px;
    position: absolute;
    border-radius:50%;
    left:8px;
    margin-left:-6px;
    bottom:14px;
    background: white;
}
.yuan4::before{
    content: '';
    border:1px solid black;
    display: block;
    width: 12px;
    height: 16px;
    position: absolute;
    border-radius:50%;
    left:8px;
    margin-left:-6px;
    bottom:14px;
    background: white;
}
 .eye.left{
    transform:translateX(75px);
 }
 .eye.right{
     transform:translateX(-75px);
 }
 .up{
     position: absolute;
     width:8px;
     height:80px;
     left:50%;
     margin-left:-4px;
     bottom:70px;
     background:black;
 }
 .Lian{
    display:block;
    position:absolute;
    width:1000px;
    height:1000px;
    left:50%;
    margin-left:-500px;
    margin-top:10px;
    border-radius:50%;
    background:white;
    z-index:-1;
 }
 @media(min-width:500px){
    .Lian{
        top:160px;
    }
 }
 .down1{
     position:absolute;
     border:8px solid black;
     border-color:transparent black black black;
     width:160px;
     height:80px;
     border-radius:50%;
     top:28px;
 }
.down1>.Hideen1{
    content:'';
    position:relative;
    width:15px;
    height:32px;
    left:7px;
    margin-left:-7px;
    background:white;
    z-index:2;
}
.down2{
    position:absolute;
    border:8px solid black;
    border-color:transparent black black black;
    width:160px;
    height:80px;
    border-radius:50%;
    transform:translateX(-152px);
    top:28px;
    z-index:1;
}
.down2>.Hideen2{
   content:'';
   position:relative;
   width:15px;
   height:32px;
   left:100%;
   margin-left:-15px;
   background:white;
   z-index:2;
}
.x1{
    width:80px;
    height:8px;
    left:50px;
    margin-left:-40px;
    border-radius:6px;
    position:absolute;
    transform:rotate(30deg);
    bottom:170px;
    background:black;
}
.x2{
    width:80px;
    height:8px;
    left:50px;
    margin-left:-40px;
    border-radius:6px;
    position:absolute;
    transform:rotate(20deg);
    bottom:145px;
    background:black;
}
.x3{
    width:70px;
    height:8px;
    left:60px;
    margin-left:-40px;
    border-radius:6px;
    position:absolute;
    transform:rotate(10deg);
    bottom:115px;
    background:black;
}
.x4{
    width:80px;
    height:8px;
    right:15px;
    margin-left:-40px;
    border-radius:6px;
    position:absolute;
    transform:rotate(-30deg);
    bottom:170px;
    background:black;
}
.x5{
    width:80px;
    height:8px;
    right:10px;
    margin-left:-40px;
    border-radius:6px;
    position:absolute;
    transform:rotate(-20deg);
    bottom:145px;
    background:black;
}
.x6{
    width:70px;
    height:8px;
    right:10px;
    margin-left:-40px;
    border-radius:6px;
    position:absolute;
    transform:rotate(-10deg);
    bottom:115px;
    background:black;
}
@media(min-width:500px){
    .x1{
        left:50%;
        margin-left:-180px;
    }
    .x2{
        left:50%;
        margin-left:-180px;
    }
    .x3{
        left:50%;
        margin-left:-180px;
    }
    .x4{
        left:50%;
        margin-left:100px;
    }
    .x5{
        left:50%;
        margin-left:100px;
    }
    .x6{
        left:50%;
        margin-left:100px;
    }
 }
`
export default string;