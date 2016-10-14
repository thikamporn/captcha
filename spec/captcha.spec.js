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
function Operator(O)
  {
       var Ope ='';
       if(O === 1)
          {
            Ope = "+";
          }
       else
          {
            Ope = "-";
          }
      return Ope;
  }
function Left(P,L)
	{
  		 if(P === 1)
      		{
      			return L;
      		}
    		else
      		{
      			return number[L].toString();
      		}
	}
function Right(P,R)
    {
      if(P === 2)
        {
          return R;
        }
      else
        {
          return number[R].toString();
        }
    }
