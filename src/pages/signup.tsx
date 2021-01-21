import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import React, { useRef } from 'react'
import Input from '../components/Input'
import Layout from '../components/Layout'

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleFormSubmit = async (data: any) => {
    console.log(data)
  }

  return (
    <Layout title="Login | GETBIG Consultoria">
      <div className="max-w-7xl mx-auto py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-semibold">Faça seu logon</h1>
          <Form
            ref={formRef}
            onSubmit={handleFormSubmit}
            className="flex-col md:flex my-8 mx-5 md:mx-auto md:max-w-lg"
          >
            <Input
              name="email"
              type="text"
              placeholder="Usuário"
              className="w-full p-4 mb-2 rounded-md text-black text-center md:text-left"
            />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              className="w-full p-4 mb-2 rounded-md text-black text-center md:text-left"
            />
            <button
              type="submit"
              className="w-full bg-red-700 p-4 rounded-md font-semibold hover:bg-red-900"
            >
              Entrar
            </button>
          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp
