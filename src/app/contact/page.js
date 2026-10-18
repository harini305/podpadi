import Img from "@/components/Img";
import ContactForm from "@/components/ContactForm";
import site from "@/data/site";
import { contactIntro } from "@/data/content";

export const metadata = {
  title: "Contact",
  description: "Podpadi Design Spaces, Jl. Katik Lantang No.8, Singakerta, Ubud, Bali — about a 10-minute ride from central Ubud.",
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero" aria-labelledby="contact-heading">
        <div className="contact-hero__media">
          <Img id="rice-field-walk" alt="A walker on a path through the rice field at sunset" sizes="100vw" priority position="50% 55%" />
        </div>
        <div className="wrap contact-hero__text" data-reveal>
          <h1 id="contact-heading" data-reveal-item>
            Get in touch
          </h1>
        </div>
      </section>

      <section className="contact wrap" aria-label="Contact details and enquiry form">
        <div className="contact__info" data-reveal>
          <p className="lead" data-reveal-item>
            {contactIntro}
          </p>
          <dl className="contact__details" data-reveal-item>
            <div>
              <dt>Address</dt>
              <dd>
                <address>
                  {site.fullName}
                  <br />
                  {site.contact.address.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </address>
              </dd>
            </div>
            <div>
              <dt>Cell / WhatsApp</dt>
              <dd>
                {site.contact.whatsapp} ({site.contact.contactPerson})
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{site.contact.email}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>
                {site.contact.distance}
                <br />
                {site.contact.coordinates}
              </dd>
            </div>
          </dl>
          <p className="contact__caveat" data-reveal-item>
            These details are shown for reference only. This demo does not open WhatsApp, email or maps.
          </p>
        </div>
        <div className="contact__form" data-reveal>
          <h2 data-reveal-item>Send an enquiry</h2>
          <div data-reveal-item>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
