# azarel-website

Static website hosted on GitHub Pages at https://azarelsa.com.

## Contact form

The form in `index.html` posts to [FormSubmit](https://formsubmit.co/), which
emails each enquiry to **info@azarelsa.co.za**, copying **brendon@azarelsa.com**
and **dylan@azarelsa.com** using the `_cc` field.
The visitor's `email` field supplies the reply-to address and receives a
confirmation email through FormSubmit's `_autoresponse` setting.
No API keys or server are needed in this repository.

The hidden `_url` field always reports `https://azarelsa.com/` to FormSubmit,
including when the visitor opens `/index.html` or their browser omits the
referrer. This matches the public homepage URL shown during activation.

### One-time activation

1. After deployment, submit the form once from the live website.
2. Open the activation email sent to **info@azarelsa.co.za** from FormSubmit
   (check spam as well)
   and confirm the form. Delivery is not active until this is done.
3. Submit a fresh enquiry and confirm that the info inbox, Brendon, and Dylan receive it,
   including the name, company, email, area of interest, and message. Confirm
   that the visitor's email address also receives the automatic confirmation.

If FormSubmit keeps requesting activation after confirmation, verify that
the activation email was sent to **info@azarelsa.co.za**, not a previous
recipient. FormSubmit also provides a random-string form endpoint in its
confirmation email; that endpoint can replace the email-based form action
without changing the CC recipients, autoresponse, or success return URL.
The website cannot inspect or reset FormSubmit's activation state.

The form uses a standard browser POST, keeping FormSubmit's default reCAPTCHA
enabled. After submission, `_next` returns the visitor to
`https://azarelsa.com/#contact-success`, where CSS `:target` reveals the success
message in the contact form. This works without JavaScript. The spam check
may still appear on FormSubmit; its default success page is skipped.

Do not disable reCAPTCHA or switch to AJAX: FormSubmit's documentation states
that automatic confirmation emails do not work with either configuration.
