# azarel-website

Static website hosted on GitHub Pages at https://azarelsa.com.

## Contact form

The form in `index.html` posts to [FormSubmit](https://formsubmit.co/), which
emails each enquiry to **brendon@azarel.com** and copies **dylan@azarel.com**
using the `_cc` field. The visitor's `email` field supplies the reply-to address.
No API keys or server are needed in this repository.

### One-time activation

1. After deployment, submit the form once from the live website.
2. Brendon must open the activation email from FormSubmit (check spam as well)
   and confirm the form. Delivery is not active until this is done.
3. Submit a fresh enquiry and confirm that both Brendon and Dylan receive it,
   including the name, company, email, area of interest, and message.

The form uses a standard browser POST so FormSubmit's default reCAPTCHA and
confirmation page work, including when JavaScript is unavailable. Do not add
an AJAX submit handler unless it also supports the provider's spam protection.
