import { type FormEvent, useState } from 'react'
import './Contact.css'

const projectTypes = [
  'Site ou landing page',
  'Loja virtual ou catálogo',
  'Sistema personalizado',
  'Outro',
]

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
}

type FormValues = typeof initialValues
type FormErrors = Partial<Record<keyof FormValues, string>>

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  const updateValue = (
    field: keyof FormValues,
    value: FormValues[keyof FormValues],
  ) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSent(false)
  }

  const validate = () => {
    const nextErrors: FormErrors = {}

    if (!values.name.trim()) nextErrors.name = 'Informe seu nome.'
    if (!values.email.trim()) {
      nextErrors.email = 'Informe seu e-mail.'
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = 'Informe um e-mail válido.'
    }
    if (!values.projectType) nextErrors.projectType = 'Escolha um tipo de projeto.'
    if (!values.message.trim()) nextErrors.message = 'Conte um pouco sobre a ideia.'

    return nextErrors
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSent(false)
      return
    }

    // Integração futura: enviar `values` para uma API, serviço de e-mail ou CRM.
    setSent(true)
    setValues(initialValues)
  }

  return (
    <section className="section section--dark contact-section" id="contato">
      <div className="container contact-grid">
        <div className="contact-heading reveal">
          <p className="section-label section-label--dark">Contato</p>
          <h2>Tem uma ideia? Vamos entender o que ela precisa para funcionar.</h2>
        </div>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={(event) => updateValue('name', event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              autoComplete="name"
            />
            {errors.name && <small id="name-error">{errors.name}</small>}
          </div>

          <div className="field">
            <label htmlFor="company">Empresa</label>
            <input
              id="company"
              name="company"
              value={values.company}
              onChange={(event) => updateValue('company', event.target.value)}
              autoComplete="organization"
            />
          </div>

          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={(event) => updateValue('email', event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              autoComplete="email"
            />
            {errors.email && <small id="email-error">{errors.email}</small>}
          </div>

          <div className="field">
            <label htmlFor="phone">Telefone ou WhatsApp</label>
            <input
              id="phone"
              name="phone"
              value={values.phone}
              onChange={(event) => updateValue('phone', event.target.value)}
              autoComplete="tel"
            />
          </div>

          <div className="field field--full">
            <label htmlFor="projectType">Tipo de projeto</label>
            <select
              id="projectType"
              name="projectType"
              value={values.projectType}
              onChange={(event) => updateValue('projectType', event.target.value)}
              aria-invalid={Boolean(errors.projectType)}
              aria-describedby={
                errors.projectType ? 'project-type-error' : undefined
              }
            >
              <option value="">Selecione uma opção</option>
              {projectTypes.map((type) => (
                <option value={type} key={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <small id="project-type-error">{errors.projectType}</small>
            )}
          </div>

          <div className="field field--full">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={(event) => updateValue('message', event.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && <small id="message-error">{errors.message}</small>}
          </div>

          <div className="form-actions field--full">
            <button className="button button--light" type="submit">
              Enviar mensagem
            </button>
            <p className="form-note" aria-live="polite">
              {sent
                ? 'Mensagem preparada com sucesso. A integração de envio pode ser conectada futuramente.'
                : 'Envio simulado por enquanto, sem backend conectado.'}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
