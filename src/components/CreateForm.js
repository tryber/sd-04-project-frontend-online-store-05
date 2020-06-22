// import React, { Component } from 'react';

// class CreateForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       cpf: '',
//       phone: '',
//       cep: '',
//       address: '',
//     };
//     this.finishShop = this.finishShop.bind(this);
//     this.updState = this.updState.bind(this);
//   }

//   finishShop() {
//     this.setState({
//       name: '',
//       email: '',
//       cpf: '',
//       phone: '',
//       cep: '',
//       address: '',
//     });
//   }

//   updState(e, key) {
//     this.setState({ [key]: e.target.value });
//   }

//   createInputForm(label, type, id, testid, value) {
//     return (
//       <div>
//         <label htmlFor={id}>{label}</label>
//         <input
//           type={type}
//           id={id}
//           data-testid={testid}
//           value={value}
//           onChange={(e) => this.updState(e, id)}
//         />
//       </div>
//     );
//   }

//   render() {
//     const { name, email, cpf, phone, cep, address } = this.state;

//     return (
//       <div>
//         <form>
//           {this.createInputForm(
//             'Nome completo:',
//             'text',
//             'name',
//             'checkout-fullname',
//             name,
//           )}
//           {this.createInputForm(
//             'Email:',
//             'email',
//             'email',
//             'checkout-email',
//             email,
//           )}
//           {this.createInputForm('CPF:', 'text', 'cpf', 'checkout-cpf', cpf)}
//           {this.createInputForm(
//             'Telefone:',
//             'text',
//             'phone',
//             'checkout-phone',
//             phone,
//           )}
//           {this.createInputForm('CEP:', 'text', 'cep', 'checkout-cep', cep)}
//           {this.createInputForm(
//             'Endereço:',
//             'text',
//             'address',
//             'checkout-address',
//             address,
//           )}
//           <button type="submit" onClick={this.finishShop}>
//             Finalizar compra
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default CreateForm;
