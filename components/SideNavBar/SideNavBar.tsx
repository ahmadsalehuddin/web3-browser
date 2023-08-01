import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faBucket,
  faFileWord,
  faImage,
  faVideo,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";

export default function SideNavBar() {
  return (
    <>
      <div className="border border-3 rounded border-dark py-4 mb-2">
        <h1 className="m-0 fs-3 text-center">Web3 Browser</h1>
      </div>

      <div className="border border-3 rounded border-dark px-4 py-4 mb-2">
        <p className="fs-5 fw-medium m-0 mb-2">Quick Access</p>
        <table className="table table-borderless table-hover m-0">
          <tbody>
            <tr>
              <td className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faImage}
                  className="me-3 fs-6"
                  style={{ minWidth: "18px" }}
                />{" "}
                Photo.jpg
                <FontAwesomeIcon
                  icon={faStarRegular}
                  className="ms-auto fs-6"
                />
              </td>
            </tr>
            <tr>
              <td className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faVideo}
                  className="me-3 fs-6"
                  style={{ minWidth: "18px" }}
                />{" "}
                Video.mp4
                <FontAwesomeIcon icon={faStarSolid} className="ms-auto fs-6" />
              </td>
            </tr>
            <tr>
              <td className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faFileWord}
                  className="me-3 fs-6"
                  style={{ minWidth: "18px" }}
                />{" "}
                Document.docx
                <FontAwesomeIcon
                  icon={faStarRegular}
                  className="ms-auto fs-6"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="border border-3 rounded border-dark px-4 py-4">
        <p className="fs-5 fw-medium m-0 mb-2">Browse Bucket</p>
        <table className="table table-borderless table-hover m-0">
          <tbody>
            <tr>
              <td className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faBucket}
                  className="me-3 fs-6"
                  style={{ minWidth: "18px" }}
                />{" "}
                Bucket A
              </td>
            </tr>
            <tr>
              <td className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faBucket}
                  className="me-3 fs-6"
                  style={{ minWidth: "18px" }}
                />{" "}
                Bucket B
              </td>
            </tr>
            <tr>
              <td className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faBucket}
                  className="me-3 fs-6"
                  style={{ minWidth: "18px" }}
                />{" "}
                Bucket C
              </td>
            </tr>
            <tr>
              <td>Show all</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
