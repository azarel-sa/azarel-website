# azarel-website

Static website hosted on GitHub Pages at https://azarelsa.com.

## SEO and loading

- GitHub Pages has HTTPS enforcement enabled. Keep the non-www HTTPS domain
  as the preferred site URL.
- Every page has a canonical URL, complete social sharing metadata, and
  consistent homepage links. `sitemap.xml` lists the three canonical pages;
  `robots.txt` points to the sitemap and permits public resources.
- The homepage contains Organization structured data using published company
  information and the crawlable `assets/images/azarel-logo.svg` mark.
- Archivo and Inter variable WOFF2 fonts are served from `assets/fonts/`.
  Their SIL Open Font License files are included alongside them.
- Responsive WebP hero images are preloaded at high priority. Decorative MP4
  sources are attached only on desktop, after page load and near the viewport.
  Mobile, reduced-motion, and data-saving visitors receive static images.
  Below-fold static images use native lazy loading.
- Shared CSS and JavaScript URLs use a version query. Bump it when changing
  loading behavior or styles so returning visitors receive matching files.

GitHub Pages controls HTTP cache headers; this repository does not configure
a separate CDN. Search Console verification and sitemap submission require
the site's owner account and are not performed by a source deployment.

## Contact form

The form in `index.html` posts to [FormSubmit](https://formsubmit.co/), which
emails each enquiry to **info@azarelsa.co.za**, copying **brendon@azarelsa.com**
and **dylan@azarelsa.com** using the `_cc` field.
The visitor's `email` field supplies the reply-to address and receives a
confirmation email through FormSubmit's `_autoresponse` setting.
No API keys or server are needed in this repository.

The form action uses FormSubmit's public identifier supplied in the activation
email: `https://formsubmit.co/51d0f501b914166a2df6131f5d294340`.
FormSubmit associates this identifier with the primary recipient; do not
replace it with an email address when editing the CC or confirmation settings.

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
the configured identifier matches the activation email for **info@azarelsa.co.za**,
not a previous recipient, and contact FormSubmit support if it still fails.
The website cannot inspect or reset FormSubmit's activation state.

The form uses a standard browser POST, keeping FormSubmit's default reCAPTCHA
enabled. After submission, `_next` returns the visitor to
`https://azarelsa.com/#contact-success`, where CSS `:target` reveals the success
message in the contact form. This works without JavaScript. The spam check
may still appear on FormSubmit; its default success page is skipped.

Do not disable reCAPTCHA or switch to AJAX: FormSubmit's documentation states
that automatic confirmation emails do not work with either configuration.
