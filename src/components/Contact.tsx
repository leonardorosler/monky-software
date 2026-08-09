import { type FormEvent, useMemo, useState } from 'react'
import { siteConfig } from '../data.js'
import './Contact.css'

const projectTypes = [
  'Site institucional',
  'Landing page para vender ou captar contatos',
  'Sistema para organizar minha empresa',
  'Ferramenta digital ou plataforma própria',
  'Melhoria em algo que já existe',
]

const initialValues = {
  name: '',
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

  const whatsappHref = useMemo(() => {
    if (!siteConfig.whatsapp) return ''

    const text = [
      'Olá, quero conversar sobre um projeto digital para meu negócio.',
      values.projectType ? `Projeto: ${values.projectType}` : '',
      values.phone ? `WhatsApp: ${values.phone}` : '',
      values.message ? `Contexto: ${values.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`
  }, [values.message, values.phone, values.projectType])

  const emailHref = useMemo(() => {
    if (!siteConfig.email) return ''

    const body = [
      `Nome: ${values.name}`,
      `E-mail: ${values.email}`,
      values.phone ? `WhatsApp: ${values.phone}` : '',
      values.projectType ? `Tipo: ${values.projectType}` : '',
      '',
      values.message,
    ]
      .filter((line) => line !== '')
      .join('\n')

    return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      'Diagnóstico Monky',
    )}&body=${encodeURIComponent(body)}`
  }, [values.email, values.message, values.name, values.phone, values.projectType])

  const contactHref = whatsappHref || emailHref

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
    if (!values.phone.trim()) nextErrors.phone = 'Informe seu WhatsApp.'
    if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = 'Informe um e-mail válido.'
    }
    if (!values.projectType) nextErrors.projectType = 'Escolha o tipo de projeto.'
    if (!values.message.trim()) {
      nextErrors.message = 'Conte o que você quer organizar, vender ou melhorar.'
    }

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

    if (contactHref) {
      window.open(contactHref, '_blank', 'noopener,noreferrer')
      setSent(true)
      return
    }

    setSent(true)
  }

  return (
    <section className="section section--dark contact-section" id="contato">
      <div className="container contact-grid">
        <div className="contact-heading reveal">
          <p className="section-label section-label--dark">Diagnóstico gratuito</p>
          <h2>Receba um diagnóstico gratuito.</h2>
          <p>
            Conte em poucas linhas se você precisa de um site, landing page,
            sistema ou ferramenta para sua empresa.
          </p>
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
            <label htmlFor="phone">WhatsApp</label>
            <input
              id="phone"
              name="phone"
              value={values.phone}
              onChange={(event) => updateValue('phone', event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              autoComplete="tel"
            />
            {errors.phone && <small id="phone-error">{errors.phone}</small>}
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
            <label htmlFor="email">E-mail opcional</label>
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

          <div className="field field--full">
            <label htmlFor="message">O que você precisa criar ou melhorar?</label>
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
              Receber diagnóstico
            </button>
            <p className="form-note" aria-live="polite">
              {sent
                ? contactHref
                  ? 'Seu briefing foi preparado no canal de contato.'
                  : 'Briefing pronto. Envie pelo canal oficial da Monky para continuar.'
                : 'Resposta ideal em até 1 dia útil.'}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
