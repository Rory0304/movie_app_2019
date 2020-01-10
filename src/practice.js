// import React from "react";
// import PropTypes from "prop-types";

// const foodIlike = [
//   {
//     id: 1,
//     name: "kimchi",
//     image:
//       "http://www.doctorsreview.com/media/cache/60/1c/601c6b27c7cf347e4bd2616631f5f2cc.jpg",
//     rating: 4
//   },

//   {
//     id: 2,
//     name: "lamen",
//     image:
//       "http://receitasdeminuto.com/wp-content/uploads/2019/08/como_fazer_lamen_super_facil1.jpg",
//     rating: 4.3
//   }
// ];

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h1>I like {name}</h1>
//       <h3>{rating}/5.0</h3>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// function App() {
//   // return <div className="App" />;
//   return (
//     <div>
//       {foodIlike.map(dish => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating}
//         />
//       ))}
//     </div>
//   );
// }

// class App extends React.Component {
//     state = {
//       count: 0
//     };

//     add = () => {
//       this.setState(current => ({ count: current.count + 1 }));
//     };
//     minus = () => {
//       this.setState(current => ({ count: current.count - 1 }));
//     };
//     render() {
//       return (
//         <div>
//           <h1>The number is {this.state.count}</h1>
//           <button onClick={this.add}>Add</button>
//           <button onClick={this.minus}>Minus</button>
//         </div>
//       );
//     }
//   }

// export default App;
