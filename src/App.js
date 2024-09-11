// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';
// import { connect } from 'react-redux';
// //reduc  use to manage  global state.it is  a library
// function App(props) {
  
   
//   return (
//     <div className="App">

//       <p>{props.Amount}</p>
     
//       <br/>
//       <button onClick={props.onDeposit}>Deposit</button>
//       <button onClick={props.onWithdrawal}>Withdrawal</button>
//     </div>
//   );
// }
// const mapStateToProps=(state)=>{
//   return{
//   Amount:state.amount
//   }
// }
// const mapDispatchToProps=(dispatch)=>{
//   return{
//     onDeposit: ()=>dispatch({type:'DEPOSIT',value:10000}),
//     onWithdrawal: ()=>dispatch({type:'WITHDRAWAL',value:1000})
//   }
  
// }
// export default connect(mapStateToProps,mapDispatchToProps) (App);

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';
//reduc  use to manage  global state.it is  a library
function App() {
  const Amount =useSelector((state)=>state.amount)
  const dispatch = useDispatch()
   
  return (
    <div className="App">

      <p>{Amount}</p>
     
      <br/>
      <button onClick={()=>dispatch({type:"DEPOSIT",value:10000})}>Deposit</button>
      <button onClick={()=>dispatch({type:"WITHDRAWAL",value:10000})}>Withdrawal</button>
    </div>
  );
}
//useSelector
// const mapStateToProps=(state)=>{
//   return{
//   Amount:state.amount
//   }
// }
//useDispatch
// const mapDispatchToProps=(dispatch)=>{
//   return{
//     onDeposit: ()=>dispatch({type:'DEPOSIT',value:10000}),
//     onWithdrawal: ()=>dispatch({type:'WITHDRAWAL',value:1000})
//   }
  
// }
export default App;