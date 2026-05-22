import { PricingPlan } from '@/types';

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$0',
    period: 'month',
    description: 'Perfect for individuals and small projects.',
    features: ['Up to 5 projects', 'Basic analytics', 'Email support', '1GB storage'],
    highlighted: false,
    cta: 'Get started free',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$12',
    period: 'month',
    description: 'Great for growing teams and businesses.',
    features: ['Unlimited projects', 'Advanced analytics', 'Priority support', '50GB storage', 'Custom integrations'],
    highlighted: true,
    cta: 'Start 14-day trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'month',
    description: 'For large organizations with custom needs.',
    features: ['Everything in Pro', 'Dedicated support', 'SLA guarantee', 'Unlimited storage', 'SSO & advanced security'],
    highlighted: false,
    cta: 'Contact sales',
  },
];

export default function Pricing() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl border p-6 flex flex-col gap-4 shadow-sm ${
                plan.highlighted
                  ? 'border-indigo-400 bg-indigo-50'
                  : 'border-gray-100 bg-white'
              }`}
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
              </div>
              <div className="text-3xl font-bold text-indigo-600">
                {plan.price}
                {plan.period && <span className="text-sm font-normal text-gray-400">/{plan.period}</span>}
              </div>
              <ul className="flex flex-col gap-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-indigo-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto py-2 rounded-xl font-semibold text-sm transition-colors ${
                  plan.highlighted
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
