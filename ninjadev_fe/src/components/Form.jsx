import React, { useRef } from "react";
import {useForm} from "react-hook-form";
import './layout/Form.css'

export default Form => {

    const { register, errors, handleSubmit, watch } = useForm({});
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = async data => {
      alert(JSON.stringify(data));
    };


    return(
      <>

        <form className="bodyForm" onSubmit={e => e.preventDefault()}>
        <h2>Cadastre-se Já e procure por programadores</h2>
      <input type="text" placeholder="Nome Completo" name="Nome Completo" ref={register({min: 5, maxLength: 40})} />
      <input type="email" placeholder="E-mail" name="E-mail" ref={register} />

      <input
        name="password"
        type="password"
        placeholder="Senha"
        ref={register({
          required: "O campo não pode estar vazio",
          minLength: {
            value: 8,
            message: "Senha deve ter pelo menos 8 caracteres"
          }
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input
        name="password_repeat"
        type="password"
        placeholder="Confirmar Senha"
        ref={register({
          validate: value =>
            value === password.current || "As senhas são diferentes"
        })}
      />
      {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

      <input  type="submit" onClick={handleSubmit(onSubmit)} />
    </form>
    </>
    )
      





    };
  


























//     return (
//       <form className="bodyForm" onSubmit={handleSubmit(onSubmit)}>   {/* <form onSubmit={e => e.preventDefault()}> */}
//         <input type="text" placeholder="Nome Completo" name="Nome Completo" ref={register({min: 5, maxLength: 40})} />
//         <input type="email" placeholder="E-mail" name="E-mail" ref={register} />
//         <input id="s1" type="password" placeholder="Password" name="Password" ref={register({
//           required: "You must specify a password",
//           minLength: {
//             value: 8,
//             message: "Password must have at least 8 characters"
//           }
//         })} />
//         {errors.password && <p>{errors.password.message}</p>}

//         <input id="s2" type="password" placeholder="Password Confirm" name="Password Confirm" ref={register({
//           validate: value =>
//             value === password.current || "The passwords do not match"
//         })} />

//         {errors.password_repeat && <p>{errors.password_repeat.message}</p>}


//         {/* <Senha senha={document.getElementById('s1')} senha_confirm={document.getElementById('s2')}/> */}
//         <input name="CPF" placeholder="CPF" ref={register({max: 11, min: 11, maxLength: 11, pattern: /...-/i})} />
        
//         <input type="submit" onClick={handleSubmit(onSubmit)} />
//         {/* <input type="submit" onClick={} /> */}
//       </form>
//   );
// }

