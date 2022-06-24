import Document, { Html, Head, Main, NextScript, Script } from 'next/document'

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        const {locale} = this.props.__NEXT_DATA__ 
        const dir = locale === 'ar' ? 'rtl' : 'ltr';
        return (
            
            <Html dir={dir} lang={locale}>
                <Head>
                <meta name="facebook-domain-verification" content="o40376jeco0o7i1q7o8x0d04xf49if" />
                    <link 
                        rel="icon" 
                        type="image/png" 
                        href="/favicon.png"
                    ></link>
                    <link 
                        href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" 
                        rel="stylesheet"
                    ></link>
                       <NextScript dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TP87XKZ');`}}>
                    </NextScript>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8073049211625467" crossOrigin="anonymous"></script>

                </Head>
                <body>
                <NextScript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TP87XKZ"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></NextScript>
                    <Main />
                    <NextScript />
                </body>
                </Html>
               
        )
    }
}

export default MyDocument;