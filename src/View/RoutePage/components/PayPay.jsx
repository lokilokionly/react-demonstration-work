function PayPay() {
    function CashPage() {
      return (
        <div className="px-12">
          <h1 className=" text-center text-2xl pt-8">Оплата наличными</h1>
          <div>
            <p>При оплате наличным маршрута оплата проиходит по адресу "Великолугская 25А"</p>
            <div>
              <button>Перейти</button>
            </div>
          </div>
        </div>
      )
    }
    function CreditPage() {
      return (
        <div>
          <h1>Оплата банковской картой</h1>
          <div>
            <div class="checkout_form">
              <div class="card_number" id="card-container">
                <input type="text" class="input" id="card" placeholder="0000 0000 0000 0000"></input>
                <div id="logo"></div>
              </div>
              <div class="card_grp">
                <div class="expiry_date">

                  <input type="text" class="expiry_input" data-mask="00" placeholder="00"></input>
                  <input type="text" class="expiry_input" data-mask="00" placeholder="00"></input>
                </div>
                <div class="cvc">
                  <input type="text" class="cvc_input" data-mask="000" placeholder="000"></input>
                  <div class="cvc_img">
                    ?
                    <div class="img">
                      <img src="https://i.imgur.com/2ameC0C.png" alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn">
                pay
              </div>
            </div>
          </div>
        </div>
      )
    }
    if (PaySwap) {
      return <CashPage />;
    }
    return <CreditPage />;
  }