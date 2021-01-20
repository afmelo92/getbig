/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react'
import Image from 'next/image'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import Input from '../components/Input'
import Layout from '../components/Layout'
import axios from 'axios'

const IndexPage = () => {
  const formRef = useRef<FormHandles>(null)

  const handleFormSubmit = async (data: any) => {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('E-mail inválido')
          .required('E-mail é obrigatório')
      })

      await schema.validate(data, {
        abortEarly: false
      })
      // Validation passed
      await axios.post('api/subscribe', { email: data.email })
      formRef?.current?.clearField('email')
    } catch (err) {
      const validationErrors: any = {}

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error: any) => {
          validationErrors[error?.path] = error.message
        })

        formRef?.current?.setErrors(validationErrors)
      }
    }
  }

  return (
    <Layout title="Home | GETBIG Consultoria">
      <div className="flex max-w-7xl mx-auto items-center">
        <div className="md:p-20 md:flex md:flex-row mx-auto items-center">
          <div className="flex-col">
            <div className="md:flex md:flex-row pt-28 md:pt-0">
              <h1 className="text-9xl font-black text-center">GET</h1>
              <h1 className="text-9xl font-black text-center">BIG</h1>
            </div>
            <p className="text-center text-xl">
              A consultoria do treinador mais foda do universo!
            </p>
            <Form
              ref={formRef}
              onSubmit={handleFormSubmit}
              className="flex-col md:flex my-8 mx-5 md:mx-0"
            >
              <Input
                name="email"
                type="text"
                placeholder="Seu melhor e-mail"
                className="w-full p-4 mb-2 rounded-md text-black text-center md:text-left"
              />
              <button
                type="submit"
                className="w-full bg-red-700 p-4 rounded-md font-semibold hover:bg-red-900"
              >
                QUERO FICAR GRANDÃO!
              </button>
            </Form>
          </div>
          <div className="hidden md:block">
            <Image
              src={'/jay.png'}
              layout="fixed"
              width={500}
              height={500}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
