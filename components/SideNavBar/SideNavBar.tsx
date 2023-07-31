import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBucket } from "@fortawesome/free-solid-svg-icons";

export default function SideNavBar() {
  return (
    <>
      <div className="border border-2 rounded border-dark px-4 py-3 mb-2">
        <p className="fs-4 fw-medium m-0 mb-1">Quick Access</p>
        <table className="table table-borderless table-hover m-0">
          <tbody>
            <tr>
              <td>Photo.jpg</td>
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

      <div className="border border-2 rounded border-dark px-4 py-3">
        <p className="fs-4 fw-medium m-0 mb-1">Browse Bucket</p>
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
