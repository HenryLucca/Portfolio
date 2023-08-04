import { useTranslation } from "react-i18next";

export default function EmailForm(){
    const {t} = useTranslation("contact");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = data.get("name");
        const email = data.get("email");
        const message = data.get("message");
      
        const mailtoLink = `mailto:henryluccag@gmail.com?subject=Inquiry from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name} (${email})`;
      
        window.location.href = mailtoLink;
      };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2 text-left mb-4 ">
            <div className="sm:flex sm:gap-4 sm:mx-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="name">{t('form-name')}</label>
                <input type="text" name="name" id="name" className="border border-zinc-800 dark:border-zinc-50 rounded-md p-1 text-black bg-zinc-200"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email">{t('form-email')}</label>
                <input type="email" name="email" id="email" className="border border-zinc-800 dark:border-zinc-50 rounded-md p-1 text-black bg-zinc-200"/>
            </div>

            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message">{t('form-message')}</label>
                <textarea name="message" id="message" className="border border-zinc-800 dark:border-zinc-50 rounded-md p-1 text-black bg-zinc-200"/>
            </div>
            <button type="submit" className="bg-zinc-300 dark:bg-zinc-500 p-1  rounded-md">Send</button>
        </form>
    )
}