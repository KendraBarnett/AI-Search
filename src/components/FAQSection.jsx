import { useState } from 'react'

export default function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-brand-black mb-6">Frequently Asked Questions</h2>
      <dl className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-brand-light rounded-lg overflow-hidden">
            <dt>
              <button
                className="w-full text-left px-6 py-4 font-semibold text-brand-black bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="text-xl ml-4" aria-hidden="true">{openIndex === index ? '−' : '+'}</span>
              </button>
            </dt>
            {openIndex === index && (
              <dd className="px-6 py-4 text-brand-dark leading-relaxed bg-white">
                {faq.answer}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </section>
  )
}
