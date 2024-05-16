import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

export const Contacts = () => {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null);

    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // TODO: email to env?
        emailjs.send(
            import.meta.env.VITE_APP_EMAIL_JS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAIL_JS_TEMPLATE_ID,
            {
                from_name: formState.name,
                to_name: 'Aliaxei',
                from_email: formState.email,
                to_email: 'olesik736@gmail.com',
                message: formState.message
            },
            import.meta.env.VITE_APP_EMAIL_JS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            setFormState({name: '', email: '', message: ''});
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
        });
    };
    const handleFocus = () => {
    };
    const handleBlur = () => {
    };


    return (
        <section className="relative flex lg:flex-row flex-col max-container">
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h2 className="head-text">Get in touch</h2>
                <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}
                      ref={formRef}>
                    <label htmlFor="name" className="text-black font-semibold">
                        Name
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Jhon"
                            required value={formState.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                    </label>
                    <label htmlFor="email" className="text-black font-semibold">
                        Email
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="jhon@gmail.com"
                            required value={formState.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                    </label>
                    <label htmlFor="message" className="text-black font-semibold">
                        Your message
                        <textarea
                            name="message"
                            rows={4}
                            className="textarea"
                            placeholder="Let me know how can I help you!"
                            required
                            value={formState.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                    </label>
                    <button type="submit" className="btn" onFocus={handleFocus}
                            onBlur={handleBlur}>
                        {isLoading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </section>
    );
};
