<section class="intro part2" id="intro2-section">

    <div class="content">
        <p class="text-center"><b>PARABÉNS JOGADOR! VOCÊ GANHOU R$500,00 EM BÔNUS!</b></p>
        <form method="post" id="lead-form" action="https://webhook.sellflux.com/webhook/v2/form/lead/302626eb160bcd2ff5b9e4a0578e021b?not_query=true&redirect_url=paginateste.com">
            <div style="margin-bottom:1rem;">
                <input type="text" id="name" name="name" value="" placeholder="Insira seu nome" style="display:block; padding:.375rem .75rem; font-size:1rem; font-weight:400; line-height:1.5; color:#212529; background-color:#fff; border:1px solid #ced4da; border-radius:.25rem;" />
            </div>
            <div style="margin-bottom:1rem;" class="form-group">
                <input type="text" id="email" name="email" value="" placeholder="Insira seu melhor e-mail" required style="display:block; padding:.375rem .75rem; font-size:1rem; font-weight:400; line-height:1.5; color:#212529; background-color:#fff; border:1px solid #ced4da; border-radius:.25rem;" />
            </div>
            <div style="margin-bottom:1rem;" class="form-group">
                <input type="tel" id="tel" name="phone" maxlength="15" placeholder="WhatsApp: (00) 00000-0000" required style="display:block; padding:.375rem .75rem; font-size:1rem; font-weight:400; line-height:1.5; color:#212529; background-color:#fff; border:1px solid #ced4da; border-radius:.25rem;" />
            </div>
            <script type="text/javascript">
                const tt = document.querySelectorAll("#tel");
                for (var i = 0; i < tt.length; i++) {
                    let tel = tt[i]
                    let mascaraTelefone = (valor) => {
                        valor = valor.replace(/\D/g, "")
                        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
                        valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
                        tel.value = valor
                    }
                    tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value))
                    tel.addEventListener('change', (e) => mascaraTelefone(e.target.value))
                }
            </script>
        </form>
            <input type="submit" value="CONTINUAR" class="rounded-pill btn-save" style="display:inline-block; line-height:1.5; text-align:center; text-decoration:none; vertical-align:middle; cursor:pointer; font-size:1rem; width:51%; margin-top: 30px; font-weight: 700; text-transform: uppercase; text-shadow: 0 0 2px rgb(0 0 0 / 80%); padding: 13px; background-color: #16b763; color: #fff; border-radius: 15px 15px 15px 15px; box-shadow: 0 -1px 24px 0 #16b763; border:1px solid transparent; align-self: center;">
    </div>

</section>