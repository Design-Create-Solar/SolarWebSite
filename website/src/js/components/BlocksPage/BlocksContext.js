import React, { useState, useEffect } from "react"

const BlocksContext = React.createContext()

function BlocksProvider(props) {
    const [blocks, setBlocks] = useState([]);
    const [images, setImages] = useState([]);

    function handleSave(files) {
        if (files.length > 0) {
            setImages(files);
        }
    };

    function validate(values) {
        const errors = {};
        if (!values.header) {
            errors.header = "Provide a valid heading/title.";
        }
        if (!values.color) {
            errors.color = "Provide a valid color, preferably in hexadecimal.";
        }
        if (!values.text) {
            errors.text = "Provide some text to support your header.";
        }
        // if (!values.images) {
        //   errors.images = "Provide at least one image(s).";
        // }
        return errors;
    };

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
        <BlocksContext.Provider value={{
            blocks,
            setBlocks,
            images,
            handleSave,
            validate
        }}>{props.children}</BlocksContext.Provider>
    );
}

export { BlocksContext, BlocksProvider }