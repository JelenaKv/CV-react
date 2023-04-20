function Podaci() {
  return (
    <div className="podaci">
      <table>
        <tbody>
          <tr>
            <th colSpan={2}><h2>OPĆI PODACI</h2></th>
          </tr>
          <tr>
            <td>Datum rođenja:</td>
            <td>03.02.2000.</td>
          </tr>
          <tr>
            <td>Adresa:</td>
            <td>Cvite Fiskovića 3</td>
          </tr>
          <tr>
            <td>e-mail:</td>
            <td><a href="mailto:jkvesi01@fesb.hr? Subject=e-mail">jkvesi01fesb.hr </a></td>
          </tr>
          <tr>
            <td>Kontakt:</td>
            <td>+385 91 987 7358</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Podaci