export const getSignupHTML = ({ name, hashLink }) => {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title></title>
      </head>
      <body style="font-family: Tahoma, Verdana, Geneva, sans-serif; width: 100% !important; height: 100%; margin: 0;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td align="center" style="word-break: break-word;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td align="center">
                    <table>
                      <tbody>
                        <tr>
                          <td style="text-align: center; vertical-align: middle; word-break: break-word; padding: 35px 0 0 35px;">
                            <img width="35px" height="35px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPMSURBVFhHzZg/SBtxFMef0Zg2IjrYQoLiH1qwQnBoLeqS0rq1iODooKC4pksXp9bJDkLdBV0UEXXQgII2tgoObTPYgg7NqEjtImiSJlF/fd9fLuldvFxyuRP6hU/ufneX93v3fv/e78rInJyMn+lhnjAPmfuMi0kwp8xPJsxsMZ+ZJGOrPMx7BpUJE+B5/M/LWNYd5i0TZfQqK5YY846BvZL0iPnO6BkvlR8M7JrSc+aM0TNoFdh9wdyQXgeGI0HmLgoOh0NSVma2r/+TEIKur68liv4wr5iPspRHCKGMSEtLi9jY2BDRaFSwEcvADuw1NzerI6RpMvXronN9YXwo7O7uUmdnJy0tLdH5+TlVVlZSRUUFbplSPB6nWCxG9fX11NvbS3t7e+T3Y3aQQh96yiBSGmHUSK9dLpe4vLwUy8vLmbewBX4xkUqlBL+U+jrqlXIoR8wDb9KnPIO5XFReXk5HR0fKlcJCvzo8PKRkMnmD8fFx+UwikZDP5Qj1Yh7LOhNg3OlTnjLZAFRVVSWPxYj7BQWDQVpbW5OEw2FyOp2StrY25Sldod7X6dP0FK+ZWRFGdLq5uTl1OIumoaFBRCIRcXV1Je2geXAd9nAtp5kA6nciMs+Ye4wtYkdoe3ubmpqaaHh4mLjvKXcMhfr9cAaLni1SOzIyMkKzs7PKnaLUA2cep8+ta319vVRHoA44gzTAFs3Pz9PAwIDGkampKVpcXFRKhnqAnzij6VBWO3A+DDowiCMySIz+B7ngDDI0QzU2NtLQ0JBmsfR6vdTX16eUbFECzmCMG2p0dJRmZmbkaIFw3NnZketWbW2tvGaDTuEMclZDYWmAMJVnhi+vvnLUnJ1h8bVFETjzLX1eWGpHMKGVMHyN9BXOGCY4aq2srNyWI9AWnPnE/JbFAqqrq5P5SE1NDQUCARocHLSUAaqE+rGtkcJ2IjvmeaXlTFEIfntZHhsbk+VcYc7weDzZ/xVieno63zyD+rMpxAcG2wmpTIfNpBKTk5PU1dVF3d3dGnw+H52cnMhnihEyPh3hIurXKJvpwXNkegsLC7lvYAlkjrCbE5lsppc3B97f35dJ0erqKh0fH5Pb7ZaYEbekTCEQ4erqaurv76eDgwNqb29XnsifA0PZ3QE3gQiFQuLi4kK2s1W4icTm5qZobW3NRMRwd5CR7r7JqpCWAkWIxEsmJEsFdNs7Stg3JYTQ7r027Gmaxozs+gqB/8NOyV8h1MK+ZoL5xehVlo/M9xm5Lyoks3O5+stVB4NUMffLVYTB4osvV1hqUkwRIvoLngMP5u8pldMAAAAASUVORK5CYII="/>
                          </td>
                          <td style="text-align: center; vertical-align: middle; word-break: break-word; padding: 35px 35px 0 0;">
                            <span style="font-weight: 500; font-size: 16px; text-align: center; line-height: 30px; margin-left: 8px;">
                              Full Context Development
                            </span>
                          </td>  
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td width="100%" cellpadding="0" cellspacing="0" style="word-break: break-word;">
                    <table align="center" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 680px; width: 100%;">
                      <tr>
                        <td style="word-break: break-word; padding: 35px; font-size: 15px; color:#51545E;">
                          <h1 style="font-size: 22px; margin: 0 auto 15px auto; line-height: 1.6; color: #333333;">Hi${name ? ' ' + name : ''}! ???? 
                            <br />
                            Welcome to the Full Context Development community!
                          </h1>
                          <p style="line-height: 1.8;">I'm absolutely thrilled that you joined us and
                            sincerely hope you will enjoy the book and take away a lot of useful ideas and practices.
                            I'd love to hear about your experience, feel free to hit me up through any of the channels!
                            You have not seen it yet, but once you are logged in you will land on a different home page 
                            where I display news important to the users, check it out.
                          </p>
                          <h1 style="font-size: 22px; margin: 35px auto 15px auto; line-height: 1.6; color: #333333;">
                            Here's how your access works:
                          </h1>
                          <p style="line-height: 1.8; margin-bottom: 35px;">
                            I use the simplest yet still highly secure system to control the user's access to the material.
                            You got your <i><b>very secret</b></i> login URL below. Use it to get instantly authenticated on the site.
                            That will keep you logged in for 14 days in that browser.
                            You can be logged in stimulatniously from 4 different devices.
                          </p>
                          <table align="center" width="95%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #f1f1f1; padding: 30px; margin: 10px auto; font-family: Consolas,'courier new';">
                            <tr>
                              <td align="center" style="word-break: break-word;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                  <tr>
                                    <td align="center" style="word-break: break-word;">
                                      <a style='color: black;'href="${hashLink}">${hashLink}</a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <p style="margin-top: 35px; line-height: 1.8;">
                            In case you lose this email, you can request a new link from the Login menu on the site. Talking about the Login menu.
                            If you log in using that button on the site we can store the unique access code in the browser so if your session expires you can get back simply with the click of a button.
                          </p><p style="margin-top: 35px; line-height: 1.8;">
                            If you face any problems with the process 
                            please <a href="https://www.fullcontextdevelopment.com/support" target="_blank" style="color: #808080;">contact support</a>. 
                          </p>
                          <p style="line-height: 1.5; font-style: italic; margin-top: 30px; margin-bottom: 0;">Best Regards,
                            <br>Joe
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table align="center" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 580px; width: 100%;">
                      <tr>
                        <td align="start" style="font-size: 12px; color: gray; line-height: 1.5; word-break: break-word; padding: 0 35px; text-align: start;">
                          <p style="padding-top: 35px; border-top: 1px solid #cacaca; margin-top:0;">
                            You received this message, because you are signed up to Full Context Software Development and used the services. 
                            We don't deliver email that's not transactional, so there's <u>nothing to unsubscribe</u> from.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table align="center" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 602px; width: 100%; padding: 0 35px 35px 35px;">
                      <tr>
                        <td align="center" style="font-size: 12px; color: gray; line-height: 1.5; word-break: break-word;">
                          <p style="max-width: 350px; width: 100%; margin-top: 10px; text-align: center;">
                            &copy; 2021 Full Context Development. All rights reserved.
                            <br>Miskolczy J??zsef - Personal Enterprise
                            <br>4031 Debrecen
                            <br>Der??k utca 77. 3./7.
                            <br>Hungary
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}