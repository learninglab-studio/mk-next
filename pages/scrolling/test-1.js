import Head from "next/head"
import { motion } from "framer-motion"

export default function Test1() {
    console.log(`test-1.js`)
    return (
        
        <motion.div
            exit = {{ opacity: 0 }}
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            transition={{ duration: .5 }}
        >
            <Head>
                <title>MK Next Test 1</title>
                <meta name="description" content="summer next experiments" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main><div>
            
                <h1>test</h1>
                <p>test</p>
                {
                    Array(20).fill("test").map((text, i) => {
                        console.log(`creating ${i}`)
                        return (
                            <motion.div style={{
                                backgroundColor: "rgba(100,100,150,.7)",
                                // height: "10px",
                                padding: "5px",
                                borderRadius: "5px",
                                width: "150px",
                                margin: "10px"
                            }} animate={{ x: i *5 }} transition={{ duration: .5 }} exit={{ opacity: 0}} key={i}>{ `${text} ${i}`}</motion.div>
                        )
                    })
                }
                <motion.div style={{
                    backgroundColor: "red",
                    height: "100px",
                    "width": "100px"
                }} animate={{ y: 100 }}>test</motion.div>
            </div></main>
            
            
        </motion.div>
    )
}