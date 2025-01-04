export const INVOICE_TEMPLATE = `
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Faktura VAT</title>
    <style>
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
    </style>
  </head>
  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0">
    <div
      style="
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ddd;
      "
    >
      <header
        style="
          margin-bottom: 20px;
          display: flex;
          gap: 10px;
          justify-content: center;
          align-items: center;
        "
      >
        <h1 style="margin: 0; font-size: 24px">Faktura</h1>
        <p style="margin: 0; font-size: 24px">
          <strong> {{invoice_number}} </strong>
        </p>
      </header>

      <section
        style="
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: flex-start;
          margin-bottom: 10px;
        "
      >
        <div style="display: flex; flex-direction: column; gap: 10px">
          <div style="display: flex; flex-direction: column; gap: 5px">
            <p style="font-weight: bold; font-size: 10px">Miejscowość:</p>
            <p style="font-size: 10px"> {{seller_city}} </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 5px">
            <p style="font-weight: bold; font-size: 10px">
              Data zakończenia dostawy lub wykonania usługi:
            </p>
            <p style="font-size: 10px"> {{invoice_createdAt}} </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 5px">
            <p style="font-weight: bold; font-size: 10px">Data wystawienia:</p>
            <p style="font-size: 10px"> {{invoice_createdAt}} </p>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px">
          <div style="display: flex; flex-direction: column; gap: 5px">
            <p style="font-weight: bold; font-size: 10px">Forma płatności:</p>
            <p style="font-size: 10px">{{paymentMethod}}</p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 5px">
            <p style="font-weight: bold; font-size: 10px">Termin płatności:</p>
            <p style="font-size: 10px">{{payment_date}}</p>
          </div>
        </div>
      </section>

      <div style="border: 2px solid black; border-radius: 2px">
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            font-size: 10px;
            padding: 5px;
          "
        >
          <div style="margin-bottom: 20px">
            <h2 style="font-size: 12px; margin-bottom: 10px">Sprzedawca</h2>
            <div style="display: flex; flex-direction: column; gap: 5px">
              <p style="margin: 0">{{seller_name}}</p>

              <div style="display: flex; gap: 10px; margin-top: 10px">
                <p>{{seller_postalCode}}</p>
                <p>{{seller_city}}</p>
              </div>
              <p>{{seller_address}}</p>

              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  gap: 50px;
                "
              >
                <div style="display: flex; flex-direction: column; gap: 5px">
                  <p style="font-weight: bold">NIP:</p>
                  <p>{{seller_NIP}}</p>
                </div>

                <div style="display: flex; flex-direction: column; gap: 5px">
                  <p style="font-weight: bold">REGON:</p>
                  <p>{{seller_REGON}}</p>
                </div>
              </div>

              <div style="display: flex; flex-direction: column; gap: 5px">
                <p style="font-weight: bold">Telefon:</p>
                <p>{{seller_code}}{{seller_phone}}</p>
              </div>

              <div style="display: flex; flex-direction: column; gap: 5px">
                <p style="font-weight: bold">Nazwa banku:</p>
                <p>{{bank_name}}</p>
              </div>

              <div style="display: flex; flex-direction: column; gap: 5px">
                <p style="font-weight: bold">Numer konta:</p>
                <p>{{bank_account}}</p>
              </div>
            </div>
          </div>

          <div style="margin-bottom: 20px">
            <h2 style="font-size: 12px; margin-bottom: 10px">Nabywca</h2>
            <div style="display: flex; flex-direction: column; gap: 5px">
              <p style="margin: 0">{{buyer_name}}</p>

              <div style="display: flex; gap: 10px; margin-top: 10px">
                <p>{{buyer_postalCode}}</p>
                <p>{{buyer_city}}</p>
              </div>
              <p>{{buyer_address}}</p>

              <div style="display: flex; flex-direction: column; gap: 5px">
                <p style="font-weight: bold">NIP:</p>
                <p>{{buyer_NIP}}</p>
              </div>
            </div>
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse">
          <thead style="font-size: 12px">
            <tr>
              <th
                style="
                  border: 2px solid black;
                  padding: 8px;
                  text-align: center;
                "
              >
                Lp.
              </th>
              <th
                style="
                  border: 2px solid black;
                  padding: 8px;
                  text-align: center;
                "
              >
                Nazwa towaru (usługi)
              </th>
              <th
                style="
                  border: 2px solid black;
                  padding: 8px;
                  text-align: center;
                "
              >
                Jednostka miary
              </th>
              <th
                style="
                  border: 2px solid black;
                  padding: 8px;
                  text-align: center;
                "
              >
                Ilość
              </th>
              <th
                style="
                  border: 2px solid black;
                  padding: 8px;
                  text-align: center;
                "
              >
                Cena
              </th>
              <th
                style="
                  border: 2px solid black;
                  padding: 8px;
                  text-align: center;
                "
              >
                Wartość
              </th>
            </tr>
          </thead>
          <tbody style="font-size: 10px">
            <tr>
              <td
                style="
                  border: 2px solid black;
                  padding: 8px;
                  text-align: center;
                "
              >
                1
              </td>
              <td
                style="
                  border: 2px solid black;
                  padding: 8px;
                  text-align: center;
                "
              >
                {{product_name}}
              </td>
              <td
                style="
                  border: 2px solid black;
                  padding: 8px;
                  text-align: center;
                "
              >
                szt.
              </td>
              <td
                style="
                  border: 2px solid black;
                  padding: 8px;
                  text-align: center;
                "
              >
                1
              </td>
              <td
                style="
                  border: 2px solid black;
                  padding: 8px;
                  text-align: center;
                "
              >
                {{price}} {{currency}}
              </td>
              <td
                style="
                  border: 2px solid black;
                  padding: 8px;
                  text-align: center;
                "
              >
                {{price}} {{currency}}
              </td>
            </tr>

            <tr>
              <td
                colspan="5"
                style="border: 2px solid black; padding: 8px; text-align: left"
              >
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                  <div style="font-size: 14px; font-weight: bold">
                    Do zapłaty: {{price}} {{currency}}
                  </div>
                  <div style="font-size: 10px; font-weight: 400">
                    {{price_words}}
                  </div>
                  <p style="margin: 0">Razem PLN</p>
                </div>
              </td>
              <td
                style="border: 2px solid black; padding: 8px; text-align: right"
              >
                {{price}} {{currency}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</html>

`;
