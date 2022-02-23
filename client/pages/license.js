import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Docs() {
  return (
    <div className={styles.docs_page}>
      <Head>
        <title>ApexChain &mdash; Docs</title>
        <meta name="description" content="ApexChain" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className={styles.docs_content}>
        <div id={styles.back_button}>
          <Link href="/">← back</Link>
        </div>
        <div id={styles.docs_title}>
          ApexChain // License
        </div>
        <div className={styles.license_container}>
          <p>
            MIT License
            <br /> <br />
            Copyright (c) 2022 ApexChain
            <br /> <br />
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the &quot;Software&quot;), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
            <br /> <br />
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
            <br /> <br />
            THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </div>
      </div>
    </div >
  );
}
