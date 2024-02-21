const square  = (a: number) => a * a;
const plusOne = (a: number) => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);

function FunctionParenthesisAndParameters(){
  return (
   <>
    <h3>Parenthesis And Parameters</h3>
    twoSquared = {twoSquared}<br />
    square(2) = {twoSquared}<br />
    threePlusOne = {threePlusOne}<br />
    plusOne(3) = {threePlusOne}<br />
   </>
  )
}

export default FunctionParenthesisAndParameters;