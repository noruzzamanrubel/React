import React, { useState } from 'react'
import { faqsData } from './data'
import FAQ from './FAQ'
import { v4 as uuidv4 } from "uuid";

const FAQS = () => {
    const [faqs, setFaqs] = useState(faqsData)
    return (
        <main className='faq-container'>
            <section className='faqs'>
                <h1>FAQs</h1>
                {faqs.map((faq) => <FAQ key={uuidv4()} faq={faq} />)}
            </section>
        </main>
    )
}

export default FAQS