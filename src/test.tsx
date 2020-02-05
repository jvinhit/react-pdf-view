import * as React from "react";
import {Component, Fragment} from "react";
import {PDFReader} from "./components/PDFReader/index";
import {MobilePDFReader} from "./components/MobilePDFReader/index";
// atob() is used to convert base64 encoded PDF to binary-like data.
const pdfData = atob(
  "JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwog" +
  "IC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv" +
  "TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0K" +
  "Pj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg" +
  "L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+" +
  "PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9u" +
  "dAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2Jq" +
  "Cgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJU" +
  "CjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVu" +
  "ZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4g" +
  "CjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAw" +
  "MDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9v" +
  "dCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G");

export default class PDFTest extends Component {
  state = {
    page: 1
  };
  private changePage = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1
    });
  }
  private completeLoad() {

  }
  public render() {
    const { page } = this.state;
    return <Fragment>
              <div style={{height: 600, overflow: "srcoll"}}>
                <PDFReader
                  showAllPage url={"https://raw.githubusercontent.com/merchantCommon/merchant-vinid-folder-public/master/user-guide/20191230_VinID_Huong%20dan%20KH%20thanh%20toan%20VinID%20Pay%20bang%20cach%20Quet%20ma_V2.1.pdf"}
                  // errorMessage="Error"
                  // addCustomPage={canvas => {
                  //     // Embed Youtube link
                  //     const link = "https://www.youtube.com/embed/8ejGAmqWgdQ";
                  //     if (canvas) {
                  //         return (
                  //             <iframe
                  //                 className="guide-video"
                  //                 title={link}
                  //                 src={link}
                  //                 frameBorder="0"
                  //                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  //                 allowFullScreen
                  //                 width={canvas.width}
                  //                 height={canvas.height}
                  //             />
                  //         );
                  //     }
                  // }}
                  />
              </div>
          </Fragment>;
  }
}
