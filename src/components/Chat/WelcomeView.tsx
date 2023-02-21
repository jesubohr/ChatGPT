import { BoltIcon, SunIcon, WarningIcon } from '../Icons'

export function WelcomeView() {
  const examples = [
    '"Explain quantum computing in simple terms" →',
    '"Got any creative ideas for a 10 year old\'s birthday?" →',
    '"What is the best way to learn to code?" →'
  ]
  const capabilities = [
    'Remembers what user said earlier in the conversation',
    'Allows user to provide follow-up corrections',
    'Trained to decline inappropriate requests'
  ]
  const limitations = [
    'May occasionally generate incorrect information',
    'May occasionally produce harmful instructions or biased content',
    'Limited knowledge of world and events after 2021'
  ]

  return (
    <div className='flex flex:col ai:center h:full overflow-y:auto'>
      <div className='flex flex:col ai:center px:24 w:full max-w:42rem@sm max-w:sm@md h:full@sm'>
        <h1 className='mx:auto mt:24 mt:20vh@xs mb:40 mb:64@xs font:36 font:semibold lh:2.5rem'>
          ChatGPT
        </h1>
        <section className='flex flex:row@sm  ai:start gap:14 text:center'>
          <FeatureColumn title='Examples' features={examples}>
            <SunIcon size={24} strokeWidth={1.5} />
          </FeatureColumn>
          <FeatureColumn title='Capabilities' features={capabilities}>
            <BoltIcon size={24} strokeWidth={1.5} />
          </FeatureColumn>
          <FeatureColumn title='Limitations' features={limitations}>
            <WarningIcon size={24} strokeWidth={1.5} />
          </FeatureColumn>
        </section>
      </div>
      <div className='w:full h:8rem h:12rem@sm flex-shrink:0' />
    </div>
  )
}

interface FeatureColumnProps {
  title: string
  features: string[]
  children?: React.ReactNode
}
function FeatureColumn({ title, features, children }: FeatureColumnProps) {
  return (
    <article className='flex flex:col gap:14 w:full'>
      <h2 className='flex flex:col@sm jc:center ai:center gap:14 mx:auto w:fit font:18 font:regular lh:1.25'>
        {children}
        {title}
      </h2>
      <ul className='flex flex:col gap:14 m:auto w:full font:14 lh:1.5'>
        {features.map((feature, index) => (
          <li key={index} className='p:12 w:full bg:white/.05 r:6'>
            {feature}
          </li>
        ))}
      </ul>
    </article>
  )
}
