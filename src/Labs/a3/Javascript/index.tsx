import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariable from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TeranaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedReturn from "./functions/ImpliedReturn";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays";
import ForLoops from "./arrays/ForLoops";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Desctructing";
import FunctionDestructing from "./json/FunctionDestructing";

function JavaScript() {
   console.log("Hello World!");
   return(
      <div>
         <h1>JavaScript</h1>
         <VariablesAndConstants/>
         <VariableTypes/>
         <BooleanVariable/>
         <IfElse/>
         <TeranaryOperator/>
         <ES5Functions/>
         <ArrowFunctions/>
         <ImpliedReturn/>
         <FunctionParenthesisAndParameters/>
         <WorkingWithArrays/>
         <ArrayIndexAndLength/>
         <AddingAndRemovingDataToFromArrays/>
         <ForLoops/>
         <House/>
         <Spreading/>
         <Destructing/>
         <FunctionDestructing/>
      </div>
   );
}
export default JavaScript