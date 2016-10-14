const number = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGTH','NINE'];
function Captcha(P,O,L,R)
{
  this.generate = function()
  {
    let leftoperand = Left(P,L);
    let rightoperand = Right(P,R);
    let opera = Operator(O);
    return  leftoperand +' '+ opera +' '+ rightoperand;
  }
}
