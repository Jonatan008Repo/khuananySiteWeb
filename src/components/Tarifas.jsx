import { auditFormUrl, cta, formatMXN, pricing } from '../data/site'
import { useAuditModal } from './audit/auditContext'
import { formatEndDate, getPlanPricing } from '../utils/discounts'
import Button from './ui/Button'
import Diamond from './ui/Diamond'
import Eyebrow from './ui/Eyebrow'
import SectionTitle from './ui/SectionTitle'

const amount = (n) => `$${n.toLocaleString('es-MX')}`

export default function Tarifas() {
  const plans = pricing.plans.map((plan) => ({ plan, price: getPlanPricing(plan, pricing.promotion) }))
  const anyDiscount = plans.some(({ price }) => price.discount)

  const { openAudit } = useAuditModal()

  return (
    <section id="tarifas" aria-labelledby="tarifas-title" className="bg-deep-black px-5 lg:px-16 py-section lg:pt-section-lg lg:pb-28">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col items-center text-center gap-3.5 lg:gap-5 mb-8 lg:mb-16">
          <Eyebrow>{pricing.eyebrow}</Eyebrow>
          <SectionTitle id="tarifas-title" title={pricing.title} accent={pricing.titleAccent} />
          <p className="max-w-[620px] text-body lg:text-body-lg leading-copy text-mist">{pricing.lead}</p>
        </header>

        <div className="border border-gold/30 p-1.5 lg:p-2">
          <ul className="border border-gold/15 grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gold/20">
            {plans.map(({ plan, price }) => {
              const discount = price.discount
              return (
              <li key={plan.id} className={`relative flex flex-col ${plan.recommended ? 'bg-gold/[0.05]' : ''}`}>
                {plan.recommended && !discount && <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gold" />}
                {discount && (
                  <p className="lg:absolute lg:inset-x-0 lg:top-0 lg:h-14 flex flex-col items-center justify-center gap-1 bg-gold text-deep-black px-4 py-2.5 lg:py-0 text-center">
                    <span className="flex items-baseline gap-2 text-2xs font-bold uppercase tracking-caps">
                      <span className="font-display lining-nums text-base leading-none tracking-normal">−{discount.percent}%</span>
                      {discount.label ?? pricing.discountLabel}
                    </span>
                    {discount.endsAt && (
                      <span className="text-micro font-semibold leading-none">
                        {pricing.discountUntilLabel} {formatEndDate(discount.endsAt)}
                      </span>
                    )}
                  </p>
                )}
                <article className={`w-full flex flex-col gap-5 px-6 py-8 lg:px-10 lg:py-12 ${anyDiscount ? 'lg:pt-[104px]' /* 56 px de pleca + 48 px de relleno */ : ''}`}>
                  <div className="flex items-start justify-between gap-4">
                    <span aria-hidden="true" className="font-display font-bold lining-nums text-display-2xs lg:text-[38px] leading-none text-gold/25">
                      {plan.numeral}
                    </span>
                    {plan.recommended && (
                      <span className="border border-gold text-gold px-3 py-1.5 text-3xs font-bold uppercase tracking-label">
                        {pricing.recommendedLabel}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-soft-gold uppercase tracking-label">{plan.name}</h3>

                  <div className="flex flex-col gap-1.5">
                    {discount && (
                      <p className="text-body text-mist">
                        <span className="sr-only">{pricing.previousPriceLabel} </span>
                        <del className="decoration-gold/80">{formatMXN(plan.setup)}</del>
                      </p>
                    )}
                    <p className="flex items-baseline gap-2 flex-wrap">
                      {discount && <span className="sr-only">{pricing.currentPriceLabel} </span>}
                      <span className="font-display font-bold lining-nums text-display-xs lg:text-display-sm leading-none text-gold">
                        {amount(price.setup)}
                      </span>
                      <span className="text-2xs font-semibold uppercase tracking-[2px] text-mist">
                        MXN · {pricing.setupLabel}
                      </span>
                    </p>
                    <p className="text-body text-ivory">
                      +{' '}
                      {price.monthly !== plan.monthly && (
                        <del className="text-mist decoration-gold/80 mr-1.5">{formatMXN(plan.monthly)}</del>
                      )}
                      {formatMXN(price.monthly)} <span className="text-mist">{pricing.monthlyLabel}</span>
                    </p>
                  </div>

                  <span aria-hidden="true" className="h-px bg-gold/20" />

                  <ul className="flex flex-col gap-bullet">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-bullet text-sm text-mist-light">
                        <Diamond className="mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-auto pt-2 text-2xs font-semibold uppercase tracking-caps text-gold">
                    {pricing.deliveryLabel} {plan.deliveryDays} días hábiles
                  </p>
                </article>
              </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-8 lg:mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16 items-start">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xs font-semibold uppercase tracking-eyebrow text-gold font-body">{pricing.extrasTitle}</h3>
            <ul className="flex flex-col">
              {pricing.extras.map((extra) => (
                <li key={extra.id} className="flex flex-col gap-1 py-3 border-t border-gold/15">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm text-mist-light">{extra.name}</span>
                    <span className="text-sm text-ivory whitespace-nowrap">{formatMXN(extra.price)}</span>
                  </div>
                  {extra.note && <p className="fine-print">{extra.note}</p>}
                </li>
              ))}
            </ul>
            <p className="fine-print">{pricing.taxNote}</p>
            <p className="fine-print">{pricing.deliveryNote}</p>
          </div>

          <div className="flex flex-col gap-5 border-l-0 lg:border-l border-gold/20 lg:pl-10">
            <p className="text-body leading-copy text-mist">{pricing.growthNote}</p>
            <Button href={auditFormUrl} onClick={openAudit} aria-haspopup="dialog" className="h-btn px-8">
              {cta.audit}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
