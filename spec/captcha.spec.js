const number = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
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
      			return number[L];
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
          return number[R];
        }
    }
describe('Captcha App' ,  function()
{
	describe('Pattern is 1', function()
	{
		const pattern = 1
    ////////+
    it('should return "1 + ZERO" when input is 1,1,1,0' , function()
    {
       let app = new Captcha(pattern,1,1,0);
        expect(app.generate()).toEqual('1 + ZERO');
    });
    it('should return "1 + ONE" when input is 1,1,1,1' , function()
    {
      let app = new Captcha(pattern,1,1,1);
       expect(app.generate()).toEqual('1 + ONE');
    });
    it('should return "1 + TWO" when input is 1,1,2,1' , function()
    {
      let app = new Captcha(pattern,1,1,2);
       expect(app.generate()).toEqual('1 + TWO');
    });
    it('should return "1 + THREE" when input is 1,1,2,0' , function()
    {
       let app = new Captcha(pattern,1,1,3);
        expect(app.generate()).toEqual('1 + THREE');
    });
    it('should return "1 + FOUR" when input is 1,1,1,4' , function()
    {
       let app = new Captcha(pattern,1,1,4);
        expect(app.generate()).toEqual('1 + FOUR');
    });
    //////////-
    it('should return "1 - FIVE" when input is 1,2,1,5' , function()
    {
       let app = new Captcha(pattern,2,1,5);
        expect(app.generate()).toEqual('1 - FIVE');
    });
    it('should return "1 - SIX" when input is 1,2,1,6' , function()
    {
       let app = new Captcha(pattern,2,1,6);
        expect(app.generate()).toEqual('1 - SIX');
    });
    it('should return "1 - SEVEN" when input is 1,2,1,7' , function()
    {
       let app = new Captcha(pattern,2,1,7);
        expect(app.generate()).toEqual('1 - SEVEN');
    });
    it('should return "1 - EIGHT" when input is 1,2,1,8' , function()
    {
       let app = new Captcha(pattern,2,1,8);
        expect(app.generate()).toEqual('1 - EIGHT');
    });
    it('should return "1 - NINE" when input is 1,2,1,9' , function()
    {
       let app = new Captcha(pattern,2,1,9);
        expect(app.generate()).toEqual('1 - NINE');
    });
	});

  //pattern 2
  describe('Pattern is 2', function()
  {
    const pattern = 2
    ////////+
    it('should return "ZERO + 1" when input is 2,1,0,1' , function()
    {
       let app = new Captcha(pattern,1,0,1);
        expect(app.generate()).toEqual('ZERO + 1');
    });
    it('should return "ONE + 1" when input is 2,1,1,1' , function()
    {
      let app = new Captcha(pattern,1,1,1);
       expect(app.generate()).toEqual('ONE + 1');
    });
    it('should return "TWO + 1" when input is 2,1,2,1' , function()
    {
      let app = new Captcha(pattern,1,2,1);
       expect(app.generate()).toEqual('TWO + 1');
    });
    it('should return "THREE + 1" when input is 2,1,3,1' , function()
    {
       let app = new Captcha(pattern,1,3,1);
        expect(app.generate()).toEqual('THREE + 1');
    });
    it('should return "FOUR + 1" when input is 2,1,4,1' , function()
    {
       let app = new Captcha(pattern,1,4,1);
        expect(app.generate()).toEqual('FOUR + 1');
    });
    //////////-
    it('should return "FIVE - 1" when input is 2,2,5,1' , function()
    {
       let app = new Captcha(pattern,2,5,1);
        expect(app.generate()).toEqual('FIVE - 1');
    });
    it('should return "SIX - 1" when input is 2,2,6,1' , function()
    {
       let app = new Captcha(pattern,2,6,1);
        expect(app.generate()).toEqual('SIX - 1');
    });
    it('should return "SEVEN - 1" when input is 2,2,7,1' , function()
    {
       let app = new Captcha(pattern,2,7,1);
        expect(app.generate()).toEqual('SEVEN - 1');
    });
    it('should return "EIGHT - 1" when input is 2,2,8,1' , function()
    {
       let app = new Captcha(pattern,2,8,1);
        expect(app.generate()).toEqual('EIGHT - 1');
    });
    it('should return "NINE - 1" when input is 2,2,9,1' , function()
    {
       let app = new Captcha(pattern,2,9,1);
        expect(app.generate()).toEqual('NINE - 1');
    });
  });
});
