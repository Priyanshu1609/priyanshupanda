import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


    render() {
        return (
            <Html lang = "en">
                <Head >
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                  
                    <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Raleway&display=swap" rel="stylesheet"></link>
                </Head>
                <body className ="bg-fixed bg-gradient-to-r from-white to-white dark:from-dark-500 dark:to-dark-700 dark:text-white font-Raleway">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument