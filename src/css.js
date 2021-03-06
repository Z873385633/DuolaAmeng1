const string = `
 *{box-sizing: border-box;}
 *{margin: 0;padding: 0;}
 *::before,*::after{box-sizing: border-box;}
 .skin{position: relative;
     background:rgb(254, 219, 0);min-height: 50vh;}
@media(min-width:500px){
  .nose{
      top:200px;
  }
}
 .nose{
     border: 14px solid black;
     border-color: black transparent transparent transparent;
     border-bottom: none;
     position: relative;
     width: 0px;
     height: 0px;
     left: 50%;
     top:130px;
     margin-left:-12px;
     border-radius:50% 50% 0 0;
     z-index: 5;
 }
 @keyframes wave{
     0%{
         transform:rotate(0deg);
     }
     33%{
         transform:rotate(6deg);
     }
     66%{
         transform: rotate(-6deg);
     }
     100%{
         transform: rotate(0);
     }
 }
 .nose:hover{
     transform-origin: 50% 100%;
     animation: wave 220ms infinite linear;
 }
 @media(min-width:500px){
    .eye{
        top:160px;
    }
 }
 .eye{
     border: 3px solid black;
     background: rgb(46, 46, 46);
     position:absolute;
     width: 64px;
     height: 64px;
     left: 50%;
     top: 90px;
     margin-left: -32px;
     border-radius: 50%;  
 }
 .eye::before{
     content: '';
     border:3px solid black;
     display: block;
     width: 30px;
     height: 30px;
     position: relative;
     left: 7px;
     top: -1.5px;
     border-radius: 50%;
     background: #fff;
 }
 .eye.left{
     transform: translateX(120px);
 }
 .eye.right{
     transform: translateX(-120px);
 }
 @media(min-width:500px){
    top:240px;
 }
 .mouth{
     position: absolute;
     width: 200px;
     height: 200px;
     left: 50%;
     margin-left: -100px;
     top: 170px;
     z-index: 1;
 }
 .lip{
     border:3px solid black;
     width: 96px ;
     height: 30px;
     border-right-color: transparent;
     position: relative;
     top: -32px;
 }
 .lip::before{
     content: '';
     position: absolute;
     display: block;
     width: 8px;
     height: 30px;
     bottom: 0;
     background: rgb(254, 219, 0);
 }
 .lip.left::before{
     right: -5px;
 }
 .lip.right::before{
     left: -5px;
 }
 .lip.left{
     position: absolute;
     transform: rotate(-25deg) translateX(-52px);
     border-radius: 0 0 0 60px;
     left:50%;
     margin-left:-50px;
     background: rgb(254, 219, 0);
     border-top-color:rgb(254, 219, 0);
  }
  .lip.left>.H1{
      border: 4px solid red;
      position:relative;
      top: -4px;
      right: -1.5px;
      z-index: 1;
      border-color: rgb(254, 219, 0);
  }
 .lip.right{
     position: absolute;
     transform: rotate(25deg) translateX(52px);
     border-radius: 0 0 50px 0;
     right:50%;
     margin-right: -50px;
     background: rgb(254, 219, 0);
     border-top-color:rgb(254, 219, 0);
 }
 .down{
     position: absolute;
     /* border: 2px solid red; */
     width: 200px;
     height: 160px;
     left: 50%;
     top: -2px;
     margin-left:-100px;
     overflow:hidden
 }
 .down>.yuan1{
     border:3px solid black;
     position: absolute;
     width: 150px;
     height: 1000px;
     bottom: 0;
     left: 0;
     margin-left:22px;
     border-radius: 75px/300px;
     background: rgb(155, 1, 9);
     z-index: -1;
     overflow: hidden;
 }
 .down>.yuan1>.yuan2{
     position: absolute;
     bottom: -75px;
     left: 50%;
     margin-left:-100px;
     width:200px;
     height:200px;
     border-radius: 100px;
     background: rgb(255, 72, 95);
 }
 @media(min-width:500px){
    .face{
        width:200px;
        height:200px;
        top:260px;
    }
 }
 .face{
     border:3px solid black;
     width: 60px;
     height: 60px;
     position: absolute;
     border-radius: 50%;
     left: 50%;
     margin-left:-50px;
     top: 190px;
     background: rgb(254, 0, 0);
     z-index:2;
 }
 .face.left{
     transform: translateX(-133px);
 }
 .face.right{
     transform: translateX(172px);
 }
`
export default string;