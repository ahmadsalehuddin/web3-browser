import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStarRegular,
  faImage as faImageRegular,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBolt,
  faBucket,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";

export default function SideNavBar() {
  return (
    <>
      <div className="border border-3 rounded border-dark py-4 mb-2">
        <h1 className="m-0 fs-2 text-center">Web3 Browser</h1>
      </div>

      <div className="border border-3 rounded border-dark px-4 py-4 mb-2">
        <p className="fs-4 fw-medium m-0 mb-2">Quick Access</p>
        <table className="table table-borderless table-hover m-0">
          <tbody>
            <tr>
              <td className="d-flex align-items-center">
                <FontAwesomeIcon icon={faImageRegular} className="fs-5" />{" "}
                Photo.jpg
                <FontAwesomeIcon icon={faStarRegular} className="ms-auto fs-5" />
              </td>
            </tr>
            <tr>
              <td>Video.mp4</td>
            </tr>
            <tr>
              <td>Document.docx</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="border border-3 rounded border-dark px-4 py-4">
        <p className="fs-4 fw-medium m-0 mb-2">Browse Bucket</p>
        <table className="table table-borderless table-hover m-0">
          <tbody>
            <tr>
              <td>Bucket A</td>
            </tr>
            <tr>
              <td>Bucket B</td>
            </tr>
            <tr>
              <td>Bucket C</td>
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
