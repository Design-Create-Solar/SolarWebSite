import React, { useState, useEffect } from "react"
// import * as constants from "../js/components/MultiplePages/constants"

const BlocksContext = React.createContext()

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

    return (
        <BlocksContext.Provider value={{ blocks, setBlocks }}>{props.children}</BlocksContext.Provider>
    );
}

export { BlocksContext, BlocksProvider }