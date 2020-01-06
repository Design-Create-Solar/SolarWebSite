// import React, { Component } from "react"
// import * as constants from "../../constants"
// import TopBar from "../TopBar"
// import { styled } from '@material-ui/styles'
// import PDFViewer from 'pdf-viewer-reactjs'
// import pdf2base64 from 'pdf-to-base64'
// import "screw-filereader";
// const fileToBase64 = (filename, filepath) => {
//   return new Promise(resolve => {
//     var file = new File([filename], filepath);
//     var reader = new FileReader();
//     // Read file content on file loaded event
//     reader.onload = function (event) {
//       console.log(event.target.result)
//       resolve(event.target);
//     };

//     // Convert data to base64 
//     reader.readAsDataURL(file);
//   });
// };


// var test = "";

// // fileToBase64 = (filename, filepath) => {
// //   return new Promise(resolve => {
// //     var file = new File([filename], filepath);
// //     var reader = new FileReader();
// //     // Read file content on file loaded event
// //     reader.onload = function (event) {
// //       resolve(event.target.result);
// //     };

// //     // Convert data to base64 
// //     reader.readAsDataURL(file);
// //   });
// // };

// class SponsorsPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pdf: ""
//     }
//   }
//   componentDidMount() {
//     // pdf2base64("../../../../public/sample.pdf")//../../../../public/sample.pdf
//     //   .then(
//     //     (response) => {
//     //       test = response
//     //       console.log(response)
//     //       // this.setState({ pdf: response }); //cGF0aC90by9maWxlLmpwZw==
//     //     }
//     //   )
//     //   .catch(
//     //     (error) => {
//     //       console.log("error"); //Exepection error....
//     //     }
//     //   )

//     // fetch('./0410100.pdf')
//     //   .then(res => res.blob())
//     //   // .then(blob => blob.dataUrl())
//     //   .then(base64 => console.log(base64))
//     fileToBase64("a.pdf", "./0410100.pdf").then(result => {
//       console.log(result);
//     });




//   }

//   render() {
//     return (
//       <Container>
//         {/* <MsgBox>
//               <Msg>We're working on it</Msg>
//             </MsgBox> */}
//         <TopBar history={this.props.history} />
//         <PDFViewer
//           document={{
//             url: "./0410100.pdf"
//           }}
//         />
//       </Container>
//     );
//   }
// };

// const MsgBox = styled("div")({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
//   textAlign: "center"
// })

// const Msg = styled("h1")({
//   fontFamily: "Futura",
//   color: "white",
//   borderStyle: "dashed",
//   padding: "3em 3em",
//   borderColor: constants.HOME_PAGE_YELLOW
// })

// const Container = styled('div')({
//   display: "flex",
//   flexDirection: "column",
//   width: "100%",
//   height: "100%",
//   overflow: "none",
//   backgroundColor: constants.HOME_PAGE_DARK_COLOR
// })

// export default SponsorsPage
import React, { Component } from "react"
import * as constants from "../../constants"
import TopBar from "../TopBar"
import { styled } from '@material-ui/styles'
import PDFViewer from 'pdf-viewer-reactjs'
// import PDFViewer from "./PDFViewer"
// import WebviewerBackend from './webviewer'

class SponsorsPage extends Component {
  constructor() {
    super();
    this.myViewer = React.createRef();
    console.log(process.env)
  }

  onButtonClick = () => {
    this.myViewer.current.rotate('clockwise');
  }


  render() {
    return (
      <Container>
        <div style={{ height: "100px" }} />
        <h1 style={{ color: "white", paddingTop: "2%", paddingBottom: "2%", fontFamily: "Futura", margin: "0 0 5px 0", alignItems: "center", justifyContent: "center", display: "flex" }}>Sponsorship Packet: </h1>

        {/* <MsgBox>
          <Msg>We're working on it</Msg>
        </MsgBox> */}
        <PDFViewer
          scale={1.25}
          document={{
            url: './sponsorship-packet.pdf',
          }}
        />
        {/* <PDFViewer
          ref={this.myViewer}
          backend={WebviewerBackend}
          src='./0410100.pdf'
        /> */}
        <TopBar history={this.props.history} />
      </Container>
    );
  }
};

const MsgBox = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  textAlign: "center"
})

const Msg = styled("h1")({
  fontFamily: "Futura",
  color: "white",
  borderStyle: "dashed",
  padding: "3em 3em",
  borderColor: constants.HOME_PAGE_YELLOW
})

const Container = styled('div')({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "none",
  backgroundColor: constants.HOME_PAGE_DARK_COLOR
})

export default SponsorsPage
