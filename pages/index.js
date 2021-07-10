import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const res = await fetch(`https://api-ropsten.etherscan.io/api?module=account&startblock=0&sort=desc&action=txlist&address=0x3866BBD5996447C9964311F02a106af7Ff33294f&endblock=99999999&apikey=36FZ5MT2T6MQM5RTJQETN61D1YQ8J3H7HJ`)
  const data = await res.json();
  // console.info(data.result[1].hash);
  return {
    props: { txt: data.result }
  }
}




export default function Home({ txt }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>MDAT-Token</title>
        <meta name="description" content="MDAT-Token erc20" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=min-width" />
      </Head>

      <main className={styles.main}>
        <h4 className={styles.title}>
          <div className={styles.titlediv}>

            <Image src="/mdat.png" alt="Vercel Logo" width={70} height={70} />  <a href="https://ropsten.etherscan.io/token/0x3866bbd5996447c9964311f02a106af7ff33294f">MDAT Token</a>
          </div>
        </h4>
        <div className={styles.titlediv}>

          <Image src="/ether.png" alt="Vercel Logo" width={40} height={40} /> <p>MDAT is Ethereum Based Crypto Token</p>
        </div>
        <p className={styles.description}>
          Contract Address{' '}
          <code className={styles.code}>0x3866bbd5996447c9964311f02a106af7ff33294f</code>
        </p>

        <div className={styles.grid}>
          <a href="https://ropsten.etherscan.io/token/0x3866bbd5996447c9964311f02a106af7ff33294f" className={styles.card}>
            <h2>Total Supply &rarr;</h2>
            <p>10,000,000 MDAT</p>
          </a>

          <a href="https://ropsten.etherscan.io/token/0x3866bbd5996447c9964311f02a106af7ff33294f" className={styles.card}>
            <h2>View All Transactions &rarr;</h2>
            <p>Click Here</p>
          </a>

          <div
            className={styles.tablediv}
          >

            <table className={styles.table}>
              <tr>
                <th>Txt Hash</th>
                <th>From</th>
                <th>To</th>
                <th>Status</th>
              </tr>
              <br></br>

              {
                (txt != '') ?
                  txt.map(tetxsrt => (


                    <tr className={styles.table_tr} key={tetxsrt.hash}>
                      <td ><a href={"https://ropsten.etherscan.io/tx/" + tetxsrt.hash}>{truncate(tetxsrt.hash)}</a></td>
                      <td >{truncate(tetxsrt.from)}</td>
                      <td >{truncate(tetxsrt.to)}</td>
                      <td className={styles.statustxt}>Success</td>


                    </tr>
                  )) :
                  <tr className={styles.table_tr} key={tetxsrt.hash}>
                    <td >Loading Transactions......</td>


                  </tr>



              }

            </table>
          </div>




        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by MDAIT Hub Technologies


        </a>
      </footer>
    </div>
  )
}


function truncate(str) {
  return str.length > 10 ? str.substring(0, 17) + "..." : str;
}
