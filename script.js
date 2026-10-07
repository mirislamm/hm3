let num = Number(prompt('сколько вам лет'))
switch(true){
    case(num < 18):
        alert("вам нельзя")
        break;
    case(num >= 18 && num <60):
        alert('вам можно')
        break;
    case(num >= 60): 
        alert('вы слищком взрослый')
        break;
    default:
        alert('ведите число')
}