import React, { useState, useEffect } from "react"
// import * as constants from "../js/components/MultiplePages/constants"

const BlocksContext = React.createContext()
let imgs = []
function BlocksProvider(props) {
    const [blocks, setBlocks] = useState([]);
    useEffect(() => {
        let mounted = true
        fetch("http://localhost:5000/block/getBlocks")
            .then(data => data.json())
            .then(blocks => {
                if (mounted) setBlocks(blocks)
            })
        return () => mounted = false
    }, [])

    useEffect(() => {
        let mounted = true
        for (const block of blocks) {
            let tmp = []
            for (const img of block.images) {
                tmp.push("https://elasticbeanstalk-us-west-2-127661128201.s3-us-west-2.amazonaws.com/" + img)
            }
            imgs.push(tmp)
        }
        return () => mounted = false
    }, [blocks])

    return (
        <BlocksContext.Provider value={{ blocks, setBlocks, imgs }}>{props.children}</BlocksContext.Provider>
    );
}

export { BlocksContext, BlocksProvider }