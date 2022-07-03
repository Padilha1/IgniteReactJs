import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const CREATE_SUBSCRIBER_MUTATION = gql `
    mutation CreateSubscriber($name: String!, $email: String!, $msg: String!) {
  createSubscriber(data: {name: $name, email: $email, message: $msg}) {
    id
  }
}
`

export function Subscribe() {
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const [createSubscriber] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    async function handleSubscribe(event: FormEvent){
        event?.preventDefault()
        await createSubscriber({
            variables:{
                name,
                email,
                msg,
            }
        })

        navigate('/event')
    }


  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] gap-10 flex items center justify-between mt-20 mx-auto">
        <div className="max-w-[600px]">
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Venha conhecer melhor a <strong className="text-purple-500">plataforma do Padilha </strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            nesciunt nostrum cupiditate nam rem numquam atque ratione nobis
            corporis nulla! Tempora cumque non dolore eum iure, reprehenderit
            possimus dolorum quibusdam. 
          </p>

        </div>

        <div className="p-8 bg-gray-700 border border-gray-100 rounded w-full">
            <strong className="text-2xl mb-6 block"> I'll contact you here </strong>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                <input 
                type="text" 
                placeholder="Your Full name" 
                className="bg-gray-900 px-5 h-14"
                onChange={event => setName(event.target.value)} />
                <input 
                type="email" 
                placeholder="Type your email" 
                className="bg-gray-900 px-5 h-14" 
                onChange={event => setEmail(event.target.value)}/>
                <input 
                type="textarea" 
                placeholder="Type your message" 
                className="bg-gray-900 px-5 h-14" 
                onChange={event => setMsg(event.target.value)}/>

                <button 
                type="submit"
                className="mt-4 bg-purple-500 uppercase py-4 rounded font-bold text-sm hover:bg-purple-200 transitions-color">
                    Send me a message
                </button>
            </form>
        </div> 

      </div>

      <img
        src="/src/assets/My Logo.png"
        className="mt-10"
        alt="logo escrito Matheus Padilha"
      />

      <div></div>
    </div>
  );
}
