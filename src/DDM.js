import React, { useState } from "react";
import styles from "./Entity.module.css";
import Read from "./ReadAction";

export default function DDM() {
  const [isRead, setReadAction] = useState(true);
  const [isAction, setAction] = useState(true);
  const [isCreate, setCreateAction] = useState(true);
  const token =
    "eyJraWQiOiJLaGROZlF3b2d3TGRXWHVqYUZpYXVXUl92RVd4dnpNYS1NRHB2dUxPNDA4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjRrY0dVWkNZN1NIUmI3VE4xemZRZ2NFZUZ0WW53aXJQMng5NWNvQ0xyd1UiLCJpc3MiOiJodHRwczovL3NhbmRib3guaW50ZXJncmFwaHNtYXJ0Y2xvdWQuY29tL29hdXRoMi9hdXMzdjgyNDFpa09PNWxQNjB4NyIsImF1ZCI6IjZBRUUzMkUyLTM2NTYtNEQzRC05ODMyLUI1MDBDNDlFMDE1NSIsImlhdCI6MTcyNzE1Nzk1NCwiZXhwIjoxNzI3MjQ0MzU0LCJjaWQiOiIwb2EzdjgyMTJleXlKUng2cDB4NyIsInVpZCI6IjAwdTZyenoybVVOckt6TjJ6MHg2Iiwic2NwIjpbIjZBRUUzMkUyLTM2NTYtNEQzRC05ODMyLUI1MDBDNDlFMDE1NSJdLCJhdXRoX3RpbWUiOjE3MjcxNTc5NTIsInN1YiI6InN2Yy1pc3Itc3BtYnVpbGQiLCJTaXRlUmVhZEFjY2VzcyI6IioiLCJTaXRlV3JpdGVBY2Nlc3MiOiIqIiwiaW5nci5zZXNzaW9uX2lkIjoiMjAyNDA5MjRUMDYwNTU0NDU0WiIsIm5hbWUiOiJNaWNoYWVsIEdyYW5vdnNreSIsIlNpdGVDcmVhdG9yQWNjZXNzIjoiKiIsIlBsYW50QWNjZXNzIjoiKiJ9.dmOKafCQ396OX9r3ZSeZIpS3xEwyD7cYprqIyR5yWK0BZOLLRaV7sKEOH7BQHze5sKzcKgHOgvwVStVzszXVfjSCEFJTUpenXPQkVZp4-HjssGo7KSbYFx2ye15ghhrE0SmVfMTPzqt6NyGr3EUmoMticrUL_uV1Ca6qP3QHFh1ADTaW2erOo72Tz4aAvjWAIDRy2C3wnmMZGFXGFa5ZJbcuEF7_MytORF5vlzlIAYHSKvTR00oYydXZhieoZ9cfxJRGO_EOCB9kdwq7hF7XtGIrffvpFSRfGPXe62TeV0TywrOe7wtuvgBqJD2MSpOAV7UCKOkRNfHL1MkBqNpykw";

  function handleImgClickEvent() {
    isAction ? setAction(false) : setAction(true);
  }

  function handleReadButtonClick() {
    isRead ? setReadAction(false) : setReadAction(true);
  }
  function handleCreateButtonClick() {
    isCreate ? setCreateAction(false) : setCreateAction(true);
  }

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <img
            onClick={handleImgClickEvent}
            className={styles.img}
            src="./DDM.png"
            alt="Data Dictionary Manager"
          />
          {"Data Dictionary Manager"}
        </h2>
      </div>
      <div hidden={isAction}>
        <button className={styles.button} onClick={handleReadButtonClick}>
          Read
        </button>
      </div>
      <br></br>
      <div hidden={isRead}>
        <Read token={token}></Read>
      </div>
      <div hidden={isAction}>
        <button className={styles.button} onClick={handleCreateButtonClick}>
          Create
        </button>
      </div>
      <div hidden={isCreate}>
        <h3>
          This Create Action is not implemented. As of now please play with
          'Read' Action.
        </h3>
      </div>
    </>
  );
}
