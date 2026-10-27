# azarel-website

Static website hosted on GitHub Pages at https://azarelsa.com.

## Contact form

The form in `index.html` posts to [FormSubmit](https://formsubmit.co/), which
emails each enquiry to **info@azarelsa.co.za**, copying **brendon@azarelsa.com**
and **dylan@azarelsa.com** using the `_cc` field.
The visitor's `email` field supplies the reply-to address.
No API keys or server are needed in this repository.

### One-time activation

1. After deployment, submit the form once from the live website.
2. Open the activation email sent to **info@azarelsa.co.za** from FormSubmit
   (check spam as well)
   and confirm the form. Delivery is not active until this is done.
3. Submit a fresh enquiry and confirm that the info inbox, Brendon, and Dylan receive it,
   including the name, company, email, area of interest, and message.

The form uses a standard browser POST so FormSubmit's default reCAPTCHA and
confirmation page work, including when JavaScript is unavailable. Do not add
an AJAX submit handler unless it also supports the provider's spam protection.
