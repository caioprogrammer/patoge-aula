!(function (e) {


    console.log("<><><><><>FUNFOU<><><><><>")

    document.querySelectorAll(".c-menu__box-title")[0, 1].addEventListener(("click"), (e) => {
        e.target.classList.toggle("active")
    })

    $(".page-institutional .c-institutional__menu button#open-options").on("click", function() {
        $(".page-institutional .c-institutional__menu .menu-institucional ul").toggleClass("active");
    })

    $(".c-categories__buttons button#masculino").on("click", function() {
        $(".c-categories__buttons button#masculino").addClass("active");
        $(".c-categories__buttons button#feminino").removeClass("active");
        $(".c-categories__content").show()
        $(".c-categories__content--2").hide()
    });
    $(".c-categories__buttons button#feminino").on("click", function() {
        $(".c-categories__buttons button#masculino").removeClass("active");
        $(".c-categories__buttons button#feminino").addClass("active");
        $(".c-categories__content").hide()
        $(".c-categories__content--2").show()
    });

    $(".c-person, .c-person.modal-body").on({
        mouseenter: function () {
            $(".c-person").addClass("active");
        },
        mouseleave: function () {
            $(".c-person").removeClass("active");
        }
    })

    $(".c-support, .c-support.modal-body").on({
        mouseenter: function () {
            $(".c-support").addClass("active");
        },
        mouseleave: function () {
            $(".c-support").removeClass("active");
        }
    })

    $(".header-patoge__top-content").slick({
        slidesToShow: 1, 
        slidesToScroll: 1, 
        infinite: false, 
        dots: false, 
        arrows: false, 
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    })
    


    var t = {};
    function n(o) {
        if (t[o]) return t[o].exports;
        var i = (t[o] = { i: o, l: !1, exports: {} });
        return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var i in e)
                    n.d(
                        o,
                        i,
                        function (t) {
                            return e[t];
                        }.bind(null, i)
                    );
            return o;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 148));
})({
    
    1: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i;
        });
        const o = {
            icons: {
                loader: '<i class="fas fa-sync fa-spin"></i>',
                carouselDesktop: !0,
                mobile: !0,
                thumbsQty: 5,
                thumbVertical: !0,
                logo:
                    '\n  <svg class="logo-patoge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214.48 32.68"><path d="M64.74,140.49c0-6.48-10-7.75-16.71-7.75H34.49v25.79h8.69V148.45c.57,0,1.2.06,1.86.07l2.49,0C54.07,148.54,64.74,147,64.74,140.49ZM47.4,144.3c-.72,0-1.88,0-2.56,0s-1.23,0-1.66-.08V137h4.76c3.54,0,8.1,1,8.1,3.75S51,144.3,47.4,144.3Z" transform="translate(-34.49 -126.33)" /><rect x="191.9" width="20.26" height="3.39" /><polygon points="64.03 11.09 76.46 11.09 76.46 32.2 85.19 32.2 85.19 11.09 97.59 11.09 97.59 6.42 64.03 6.42 64.03 11.09" /><path d="M204.9,149.55h5.62v4.56a45.58,45.58,0,0,1-5.49.31c-7.94,0-15.25-2.59-15.27-8.53s9-9,16.92-9a56.73,56.73,0,0,1,10.52,1l.24-4.69a45.63,45.63,0,0,0-4.93-.68c-2-.18-4.12-.28-6.36-.28a49.11,49.11,0,0,0-7.07.48,37,37,0,0,0-6.06,1.35,24.37,24.37,0,0,0-4.91,2.14,17,17,0,0,0-3.67,2.81,11.16,11.16,0,0,0-2.28,3.37,9.6,9.6,0,0,0-.78,3.82,9.49,9.49,0,0,0,1.47,5.17,12.18,12.18,0,0,0,4.44,4,25.09,25.09,0,0,0,7.42,2.63,50.7,50.7,0,0,0,10.42.94c1.32,0,2.66,0,4-.11s2.66-.18,3.92-.31,2.42-.25,3.45-.41,1.87-.3,2.53-.44v-13H204.9Z" transform="translate(-34.49 -126.33)" /><polygon points="197.57 27.49 197.57 21.29 211.43 21.29 211.43 16.49 197.57 16.49 197.57 11.09 214.35 11.09 214.35 6.42 188.82 6.42 188.82 32.2 214.49 32.2 214.49 27.49 197.57 27.49" /><path d="M78.32,132.74,59.94,158.53h9l4.53-5.79H90.94l4.54,5.79h9L86.06,132.74ZM88.2,148h-12l1.59-2.29q1.9-2.72,4.33-6.76h.12c1.62,2.69,3.06,4.94,4.34,6.76Z" transform="translate(-34.49 -126.33)" /><path d="M154.52,132.47c-12.09,0-21.89,5.89-21.89,13.17s9.8,13.17,21.89,13.17,21.88-5.9,21.88-13.17S166.6,132.47,154.52,132.47Zm0,22.11c-7.57,0-13.7-4-13.7-8.94s6.13-8.94,13.7-8.94,13.69,4,13.69,8.94S162.08,154.58,154.52,154.58Z" transform="translate(-34.49 -126.33)" /></svg>\n',
                menu:
                    '\n\t<svg class="icon-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 20"><path d="M4,10H28a2,2,0,0,0,0-4H4a2,2,0,0,0,0,4Zm24,4H4a2,2,0,0,0,0,4H28a2,2,0,0,0,0-4Zm0,8H4a2,2,0,0,0,0,4H28a2,2,0,0,0,0-4Z" transform="translate(-2 -6)"/></svg>\n',
                sacola: 
                    '\n\t<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M17.27 4.657v2H4.44l3.243 3.242-1.414 1.415L.612 5.657 6.27 0l1.414 1.414-3.242 3.243H17.27Z" fill="#000"/>\n\t</svg>\n',
                left:
                    '\n\t<svg class="icon-arrow icon-arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.13 490.79">\n\t\t<path d="M362.67,490.79a10.68,10.68,0,0,1-7.55-3.12L120.45,253a10.68,10.68,0,0,1,0-15.09L355.12,3.26a10.66,10.66,0,1,1,15.34,14.82c-.08.09-.17.17-.26.26L143.09,245.45,370.22,472.57a10.67,10.67,0,0,1-7.55,18.22Z" transform="translate(-117.33 0)" /><path d="M362.67,490.79a10.68,10.68,0,0,1-7.55-3.12L120.45,253a10.68,10.68,0,0,1,0-15.09L355.12,3.26a10.66,10.66,0,1,1,15.34,14.82c-.08.09-.17.17-.26.26L143.09,245.45,370.22,472.57a10.67,10.67,0,0,1-7.55,18.22Z" transform="translate(-117.33 0)"/>\n\t</svg>\n',
                right:
                    '\n\t<svg class="icon-arrow icon-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.15 490.8">\n\t\t<path d="M135.68,3.13A10.66,10.66,0,0,0,120.6,18.21L347.72,245.35,120.58,472.46a10.67,10.67,0,0,0,14.82,15.35l.26-.27L370.33,252.88a10.68,10.68,0,0,0,0-15.09Z" transform="translate(-117.33 0)" /><path d="M128.13,490.68a10.67,10.67,0,0,1-7.55-18.22L347.72,245.35,120.58,18.23a10.68,10.68,0,1,1,15.1-15.1L370.35,237.8a10.65,10.65,0,0,1,0,15.08L135.68,487.54A10.64,10.64,0,0,1,128.13,490.68Z" transform="translate(-117.33 0)"/>\n\t</svg>\n',
                close:
                    '\n  <svg class="icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310.99 311"><title>close</title><path d="M16.07,311A16,16,0,0,1,4.76,283.68l279-279a16,16,0,0,1,22.62,22.63l-279,279A16.09,16.09,0,0,1,16.07,311Z" transform="translate(-0.08)"/><path d="M295.08,311a15.88,15.88,0,0,1-11.3-4.69l-279-279A16,16,0,0,1,27.4,4.69l279,279A16,16,0,0,1,295.08,311Z" transform="translate(-0.08)"/></svg>\n',
                up:
                    '\n  <svg class="icon-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.02 10.99"><path d="M16.71,11.3a1,1,0,0,0-1.42,0l-9,9A1,1,0,0,0,7.71,21.7L16,13.44l8.28,8.26a1,1,0,0,0,1.43,0,1,1,0,0,0,0-1.43Z" transform="translate(-5.99 -11.01)"/></svg>\n',
                down:
                    '\n  <svg class="icon-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.02 11.02"><path id="Expand_More" d="M24.28,11.28,16,19.57,7.72,11.28a1,1,0,0,0-1.43,0,1,1,0,0,0,0,1.43l9,9h0a1,1,0,0,0,1.43,0l9-9a1,1,0,0,0,0-1.43A1,1,0,0,0,24.28,11.28Z" transform="translate(-5.99 -10.99)"/></svg>\n',
                search:
                    '\n  <svg class="icon-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M27.41,24.59l-5.07-5.08a10,10,0,1,0-2.83,2.83l5.08,5.07a2,2,0,0,0,2.82-2.82ZM7,14a7,7,0,1,1,7,7A7,7,0,0,1,7,14Z" transform="translate(-4 -4)"/></svg>\n',
                bag:
                    '\n  <svg class="icon-bag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792.82 1792"><path d="M1757,1408l35,313q3,28-16,50-19,21-48,21H64q-29,0-48-21-19-22-16-50l35-313Zm-93-839,86,775H42l86-775a64.15,64.15,0,0,1,21-40.5Q167,512,192,512H448V640q0,53,37.5,90.5T576,768q53,0,90.5-37.5T704,640V512h384V640q0,53,37.5,90.5T1216,768q53,0,90.5-37.5T1344,640V512h256q25,0,43,16.5A64.15,64.15,0,0,1,1664,569ZM1280,384V640q0,26-19,45t-45,19q-26,0-45-19t-19-45V384q0-106-75-181T896,128q-106,0-181,75T640,384V640q0,26-19,45t-45,19q-26,0-45-19t-19-45V384q0-159,112.5-271.5T896,0q159,0,271.5,112.5T1280,384Z" transform="translate(0.41)"/></svg>\n',
                store:
                    '\n  <svg class="icon-store" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M24,29H8a3,3,0,0,1-3-3V16a1,1,0,0,1,2,0V26a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V16a1,1,0,0,1,2,0V26A3,3,0,0,1,24,29Z"/><path d="M15,29H10a1,1,0,0,1-1-1V22a3,3,0,0,1,3-3h1a3,3,0,0,1,3,3v6A1,1,0,0,1,15,29Zm-4-2h3V22a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1Z"/><path d="M25,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0v-.76L24.38,7H7.62L5,12.24V13a2,2,0,0,0,4,0,1,1,0,0,1,2,0,4,4,0,0,1-8,0V12a1,1,0,0,1,.11-.45l3-6A1,1,0,0,1,7,5H25a1,1,0,0,1,.89.55l3,6A1,1,0,0,1,29,12v1A4,4,0,0,1,25,17Z"/><path d="M13,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,13,17Z"/><path d="M19,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,19,17Z"/><path d="M22,22H19a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"/><rect width="32" height="32" style="fill:none"/></svg>\n',
                whatsapp:
                    '\n  <svg class="icon-whats" height="512pt" viewBox="0 -2 512.00001 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m255.996094 507.949219h-.101563c-39.945312-.015625-79.550781-9.445313-115.042969-27.335938l-109.40625 24.886719c-6.675781 1.515625-13.667968-.488281-18.527343-5.3125s-6.910157-11.800781-5.441407-18.488281l23.707032-107.757813c-20.367188-37.613281-31.121094-78.808594-31.17968775-119.65625-.00390625-.140625-.00390625-.28125-.00390625-.417968.0273438-67.691407 26.796875-131.441407 75.371094-179.503907 48.464844-47.953125 112.609375-74.363281 180.621094-74.363281 68.164062.0273438 132.207031 26.460938 180.351562 74.425781 48.8125 48.632813 75.679688 112.433594 75.65625 179.644531-.019531 50.792969-15.25 99.882813-44.042969 141.957032-6.238281 9.117187-18.683593 11.449218-27.800781 5.210937-9.113281-6.238281-11.449219-18.683593-5.210938-27.800781 24.222657-35.398438 37.035157-76.679688 37.054688-119.382812.019531-56.496094-22.667969-110.226563-63.886719-151.292969-40.597656-40.449219-94.625-62.738281-152.128906-62.761719-118.917969 0-215.734375 95.742188-215.984375 213.507812 0 .128907.003906.253907.003906.378907-.015625 36.453125 10.238282 73.414062 29.648438 106.886719 2.511718 4.332031 3.308594 9.445312 2.230468 14.332031l-18.566406 84.394531 85.839844-19.527344c4.738281-1.074218 9.707031-.390625 13.980469 1.925782 31.363281 17.027343 66.898437 26.035156 102.765625 26.050781h.089844c39.003906 0 77.308593-10.546875 110.769531-30.496094 9.484375-5.660156 21.761719-2.554687 27.417969 6.933594s2.554687 21.761719-6.933594 27.421875c-39.652344 23.640625-85.039063 36.140625-131.253906 36.140625zm-56.484375-355.730469c-4.386719-9.71875-9.003907-10.050781-13.175781-10.21875h-11.222657c-3.90625 0-10.25 1.460938-15.613281 7.300781-5.367188 5.839844-20.496094 19.957031-20.496094 48.671875s20.984375 56.464844 23.910156 60.363282c2.929688 3.890624 40.511719 64.699218 100.027344 88.09375 49.464844 19.441406 59.53125 15.574218 70.265625 14.597656 10.738281-.96875 34.648438-14.113282 39.523438-27.742188 4.882812-13.625 4.882812-25.304687 3.417969-27.746094-1.460938-2.429687-5.367188-3.890624-11.222657-6.808593-5.859375-2.917969-34.558593-17.28125-39.925781-19.226563-5.367188-1.945312-9.269531-2.917968-13.175781 2.925782-3.90625 5.835937-15.40625 19.332031-18.824219 23.222656-3.414062 3.902344-6.832031 4.386718-12.6875 1.46875-5.855469-2.929688-24.523438-9.199219-46.894531-29.078125-17.410157-15.472657-29.488281-35.199219-32.90625-41.042969-3.417969-5.835938-.367188-9 2.570312-11.910156 2.628907-2.613282 6.1875-6.1875 9.117188-9.59375 2.921875-3.40625 3.757812-5.839844 5.707031-9.734375 1.953125-3.894531.976562-7.300781-.484375-10.222657-1.464844-2.917968-12.707031-31.78125-17.914063-43.320312"/></svg>\n',
                plus:
                    '\n  <svg class="icon-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><defs><style>.a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><line x1="10" y1="1" x2="10" y2="19"/><line x1="1" y1="10" x2="19" y2="10"/></svg>\n',
            },
        };
        function i(e) {
            return null != e && void 0 !== o[e] ? o[e] : o;
        }
    },
    12: function (e, t, n) {
        "use strict";
        var o = n(1);
        const i = Object(o.a)("icons");
        t.a = class {
            constructor(e) {
                (this.element = e), this.createStructure(), this.selectors(), this.events();
            }
            createStructure() {
                this.element.html(
                    '\n\t\t\t<div class="productCep">\n        <span class="productCep__title active">\n          Calcule o frete e prazo de entrega!\n        </span>\n\t\t\t\t<fieldset>\n\t\t\t\t\t<div class="productCep__form">\n            <div class="productCep__form-calculate">\n              <div class="form">\n                <input id="productCep-valorCep" type="number" class="productCep__valorCep" max="8" placeholder="Digite seu CEP"></input>\n                <button class="productCep__submit-cep">Calcular</button>\n              </div>\n              <a class="productCep__form-link active" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank">Não sei o CEP</a>\n            </div>\n\t\t\t\t\t\t<span class="productCep__precoFrete"></span>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t\t<button class="productCep__refreshCalc">Trocar o CEP</button>\n\t\t\t</div>\n\t\t'
                );
            }
            selectors() {
                (this.inputCep = this.element.find(".productCep__valorCep")), (this.submitBtn = this.element.find(".productCep__submit-cep")), (this.refreshBtn = this.element.find(".productCep__refreshCalc"));
            }
            events() {
                const e = this;
                this.submitBtn.click(() => {
                    e.readZip();
                });
            }
            readZip() {
                let e = this.inputCep.val();
                this.getZip(e)
                    .then((e) => {
                        let t = e.logisticsInfo[0].slas,
                            n = t.length;
                        const o = e.logisticsInfo.reduce(
                            (e, t, n) => (
                                t.slas.forEach((t) => {
                                    e[t.id] || ((e[t.id] = {}), (e[t.id].price = 0)), (e[t.id].price += t.price), (e[t.id].name = t.name), (e[t.id].id = t.id), (e[t.id].type = t.deliveryChannel), (e[t.id].estimate = t.shippingEstimate);
                                }),
                                e
                            ),
                            []
                        );
                        if (
                            ($(".productCep__error").length > 0 &&
                                ($(".productCep__error").fadeOut("fast"),
                                setTimeout(() => {
                                    $(".productCep__error").remove();
                                }, 500)),
                            n > 0)
                        ) {
                            $(
                                '\n          <div class="productCep__header">\n            <div class"title valor">Valor</div>\n            <div class"title entrega">Tipo de entrega</div>\n          </div>\n          <div class="productCep__content">\n            <div class="productCep__content-delivery"></div>\n            <div class="productCep__content-retire"></div>\n          </div>\n        '
                            ).insertBefore(".productCep__refreshCalc"),
                                t.forEach((e, n) => {
                                    let a = t[n].id,
                                        r = o[a].type,
                                        s = parseFloat(o[a].price / 100)
                                            .toFixed(2)
                                            .replace(".", ",");
                                    s = "R$ " + s;
                                    let c = o[a].estimate.replace("bd", ""),
                                        l = a.indexOf("(") - 1;
                                    const d = a.slice(0, l);
                                    let u = `\n            <div class="item ${r}">\n              <div class="icon">\n                <i class="fas fa-truck"></i>\n              </div>\n              <div class="info">\n                <div class="entrega"><strong>${a}</strong></div>\n                <div class="time">\n                  <div class="estimativa">${
                                            c > 1 ? c + " dias Ãºteis - " : c + " dia Ãºtil - "
                                        } </div>\n                  <div class="valor">${"R$ 0,00" == s ? "Frete GrÃ¡tis" : s}</div>\n                <div>\n              <div>\n            </div>\n          `,
                                        p = `\n            <div class='item ${r}'>\n              <div class='icon'>\n                ${
                                            i.store
                                        }\n              </div>\n              <div class='info'>\n                <div class='entrega'><strong>${d}</strong></div>\n                <div class='time'>\n                  <div class='estimativa'>${
                                            c > 1 ? c + " dias Ãºteis - " : c + " dia Ãºtil - "
                                        }</div>\n                  <div class='valor'>${"R$ 0,00" == s ? "Frete GrÃ¡tis" : s}</div>\n                <div>\n              <div>\n            </div>\n          `;
                                    "delivery" == r ? $(u).appendTo(".productCep__content-delivery") : $(p).appendTo(".productCep__content-retire");
                                });
                        }
                        this.emptyZip();
                    })
                    .catch(
                        (e) => (
                            0 == $(".productCep__error").length && Swal.fire({ icon: "error", title: "NÃ£o foi possÃ­vel calcular o CEP!", toast: "true", position: "top-end", showConfirmButton: !1, timerProgressBar: "true", timer: "3000" }),
                            console.log(e)
                        )
                    );
            }
            emptyZip() {
                let e = $(".productCep__refreshCalc");
                $(".productCep__submit-cep, .productCep__valorCep").fadeOut("fast"),
                    e.addClass("active"),
                    $(".productCep__title, .productCep__form-link").removeClass("active"),
                    e.on("click", (t) => {
                        t.preventDefault(),
                            e.removeClass("active"),
                            $(".productCep__valorCep").val(""),
                            $(".productCep__header, .productCep__content").fadeOut("fast"),
                            setTimeout(() => {
                                $(".productCep__header, .productCep__content").remove(), $(".productCep__submit-cep, .productCep__valorCep").fadeIn("fast"), $(".productCep__title, .productCep__form-link").addClass("active");
                            }, 500);
                    });
            }
            getZip(e) {
                this.zipCode = e;
                let t = this.zipCode,
                    n = "/api/checkout/pub/orderForm/" + window.vtexjs.checkout.orderForm.orderFormId + "/attachments/shippingData",
                    o = { address: { postalCode: t, country: "BRA" } };
                return new Promise((e, t) => {
                    $.ajax({ headers: { "Content-Type": "application/json" }, url: n, type: "POST", data: JSON.stringify(o) })
                        .done(function (t) {
                            e(t.shippingData);
                        })
                        .fail(function (e) {
                            t(e);
                        });
                });
            }
        };
    },
    144: function (e, t) {
        !(function (e, t, n) {
            "function" != typeof String.prototype.replaceSpecialChars &&
                (String.prototype.replaceSpecialChars = function () {
                    var e = {
                        'Ã§': "c",
                        'Ã¦': "ae",
                        'Å“': "oe",
                        'Ã¡': "a",
                        'Ã©': "e",
                        'Ã­': "i",
                        'Ã³': "o",
                        'Ãº': "u",
                        'Ã ': "a",
                        'Ã¨': "e",
                        'Ã¬': "i",
                        'Ã²': "o",
                        'Ã¹': "u",
                        'Ã¤': "a",
                        'Ã«': "e",
                        'Ã¯': "i",
                        'Ã¶': "o",
                        'Ã¼': "u",
                        'Ã¿': "y",
                        'Ã¢': "a",
                        'Ãª': "e",
                        'Ã®': "i",
                        'Ã´': "o",
                        'Ã»': "u",
                        'Ã¥': "a",
                        'Ã£': "a",
                        'Ã¸': "o",
                        'Ãµ': "o",
                        'u': "u",
                        'Ã': "A",
                        'Ã‰': "E",
                        'Ã': "I",
                        'Ã“': "O",
                        'Ãš': "U",
                        'ÃŠ': "E",
                        'Ã”': "O",
                        'Ãœ': "U",
                        'Ãƒ': "A",
                        'Ã•': "O",
                        'Ã€': "A",
                        'Ã‡': "C",
                    };
                    return this.replace(/[\u00e0-\u00fa]/g, function (t) {
                        return void 0 !== e[t] ? e[t] : t;
                    });
                }),
                "function" != typeof String.prototype.trim &&
                    (String.prototype.trim = function () {
                        return this.replace(/^\s+|\s+$/g, "");
                    }),
                (jQuery.fn.vtexSmartResearch = function (o) {
                    var i = jQuery(this),
                        a = function (e, t) {
                            "object" == typeof console && console.log("[Smart Research - " + (t || "Erro") + "] " + e);
                        },
                        r = {
                            pageLimit: null,
                            loadContent: ".shelf[id^=ResultItems]",
                            shelfClass: ".shelf",
                            filtersMenu: ".search-multiple-navigator",
                            linksMenu: ".search-single-navigator",
                            menuDepartament: ".navigation .menu-departamento",
                            mergeMenu: !0,
                            insertMenuAfter: ".search-multiple-navigator h3:first",
                            emptySearchElem: jQuery('<div class="vtexsr-emptySearch"></div>'),
                            elemLoading: '<div id="scrollLoading">Carregando...</div>',
                            returnTopText: '<span class="text">Voltar ao</span><span class="text2">topo</span>',
                            emptySearchMsg: "<h3>Esta combinaÃ§Ã£o de filtros nÃ£o retornou nenhum resultado!</h3>",
                            alertFilterErro: !0,
                            filterErrorMsg: "Houve um erro ao tentar filtrar a pÃ¡gina!",
                            searchUrl: null,
                            usePopup: !1,
                            showLinks: !0,
                            popupAutoCloseSeconds: 3,
                            filterOnChange: !0,
                            filterButtonClass: ".filter-btn",
                            clearButtonClass: ".clear-filter-btn",
                            infinitScroll: !1,
                            loadMoreText: "Carregar mais",
                            filterScrollTop: function (e) {
                                return e.top - 20;
                            },
                            callback: function () {
                                console.log('callback!');
                            },
                            getShelfHeight: function (e) {
                                return e.scrollTop() + e.height();
                            },
                            shelfCallback: function () {
                                console.log('shelfCallback!');
                            },
                            ajaxCallback: function () {
                                console.log('ajaxCallback!');
                            },
                            emptySearchCallback: function () {
                                console.log('emptySearchCallback!');
                            },
                            authorizeScroll: function () {
                                return !0;
                            },
                            authorizeUpdate: function () {
                                return !0;
                            },
                            labelCallback: function (e) {
                                console.log('labelCallback!');
                            },
                        },
                        s = jQuery.extend(r, o),
                        c = jQuery(""),
                        l = jQuery(s.elemLoading),
                        d = 2,
                        u = !0,
                        p = jQuery(t),
                        m = (jQuery(e), jQuery("html, body")),
                        v = jQuery("body"),
                        f = "",
                        h = "",
                        _ = "",
                        g = !1,
                        $ = jQuery(s.loadContent),
                        C = jQuery(s.filtersMenu),
                        b = { requests: 0, filters: 0, isEmpty: !1 },
                        y = {},
                        x = function (e) {
                            return e || !1 ? f.replace(/PageNumber=[0-9]*/, "PageNumber=" + d) : (_ + h).replace(/PageNumber=[0-9]*/, "PageNumber=" + A);
                        },
                        w = function () {
                            var e, t, n;
                            return (
                                jQuery("script:not([src])").each(function () {
                                    if (((t = jQuery(this)[0].innerHTML), (n = /\/buscapagina\?.+&PageNumber=/i), t.search(/\/buscapagina\?/i) > -1)) return (e = n.exec(t)), !1;
                                }),
                                void 0 !== e && void 0 !== e[0] ? e[0] : (a("NÃ£o foi possÃ­vel localizar a url de busca da pÃ¡gina.\n Tente adicionar o .js ao final da pÃ¡gina. \n[MÃ©todo: getSearchUrl]"), "")
                            );
                        },
                        k = function () {
                            var e = v.find("#returnToTop");
                            e.length < 1 && ((e = jQuery('<div id="returnToTop" style="opacity: 0; display: none;"><a href="#">' + s.returnTopText + '<span class="arrowToTop"></span></a></div>')), v.append(e));
                            var t = p.height();
                            p.bind("resize", function () {
                                t = p.height();
                            }),
                                p.bind("scroll", function () {
                                    p.scrollTop() > t
                                        ? e.stop(!0).fadeTo(300, 1, function () {
                                              e.show();
                                          })
                                        : e.stop(!0).fadeTo(300, 0, function () {
                                              e.hide();
                                          });
                                }),
                                e.bind("click", function () {
                                    return m.animate({ scrollTop: 0 }, "slow"), !1;
                                });
                        },
                        j = function (e) {
                            p.on("scroll", function () {
                                var t = jQuery(this);
                                if (!e.isDisponivelParaNovaBusca() || !s.authorizeScroll(b)) return !1;
                                t.scrollTop() + t.height() >= s.getShelfHeight($) && e.proxima();
                            });
                        },
                        T = function (e) {
                            if (e.isDisponivelParaNovaBusca()) {
                                var o = n("<div />", { class: "load-more" }).insertAfter($),
                                i = n("<button />", { class: "btn", text: s.loadMoreText }).appendTo(o);
                                i.click(function () {
                                    e.isDisponivelParaNovaBusca() && e.proxima();
                                }),
                                    n(t).on("vsr-request-init", function () {
                                        i.prop("disabled", !0).addClass("loading"), !i.is(":visible") && u && i.fadeIn();
                                    }),
                                    n(t).on("vsr-contagem-produtos", function (e, t) {
                                        var n = parseInt(t);
                                        $.find("li[layout]").length >= n && i.fadeOut();
                                    }),
                                    n(t).on("vsr-no-more-results", function () {
                                        i.fadeOut();
                                    }),
                                    n(t).on("vsr-more-results", function () {
                                        i.fadeIn();
                                    }),
                                    n(t).on("vsr-request-init", function () {
                                        i.prop("disabled", !1).removeClass("loading");
                                    });
                            }
                        },
                        S = function (e, t, o) {
                            null != e && n((t = t || C)).trigger(e, o);
                        },
                        M = (function () {
                            var e,
                                o = !0;
                            (e = parseInt(
                                (function (e, n) {
                                    n || (n = t.location.href), (e = e.replace(/[\[\]]/g, "\\$&"));
                                    var o = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(n);
                                    return o ? (o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "") : null;
                                })("cc", w())
                            )),
                                n(t).on("vsr-no-more-results", function () {
                                    u = !1;
                                }),
                                n(t).on("vsr-more-results", function () {
                                    u = !0;
                                });
                            var i = {
                                isDisponivelParaNovaBusca: function () {
                                    return !g && d <= i.getTotalPaginas() && u;
                                },
                                getTotalPaginas: function () {
                                    var e;
                                    if (null !== s.pageLimit) return s.pageLimit;
                                    e = (v.find(".pager:first").attr("id") || "").split("_").pop();
                                    var n = t["pagecount_" + e];
                                    return void 0 === n && (n = 99999999), n;
                                },
                                proxima: function () {
                                    if (!o) return null;
                                    var t = $.find(s.shelfClass).filter(":last");
                                    t.after(l),
                                        (o = !1),
                                        S("vsr-request-init", $),
                                        (B = jQuery.ajax({
                                            url: x(!0),
                                            success: function (i) {
                                                var a = n(i).find("li[layout]").length;
                                                a > 0 && t.after(i), S(a > 0 && a == e ? "vsr-more-results" : "vsr-no-more-results", p), (o = !0), l.remove(), b.requests++, s.ajaxCallback(b), S("vsr-ajax-sucess");
                                            },
                                            complete: function () {
                                                S("vsr-request-end", $);
                                            },
                                        })),
                                        d++;
                                },
                            };
                            return i;
                        })();
                    if (((f = _ = null !== s.searchUrl ? s.searchUrl : w()), i.length < 1))
                        return a("Nenhuma opÃ§Ã£o de filtro encontrada", "Aviso"), s.showLinks && jQuery(s.linksMenu).css("visibility", "visible").show(), s.infinitScroll ? j(M) : T(M), k(), i;
                    if ($.length < 1) return a("Elemento para destino da requisiÃ§Ã£o nÃ£o foi encontrado \n (" + $.selector + ")"), !1;
                    C.length < 1 && a("O menu de filtros nÃ£o foi encontrado \n (" + C.selector + ")");
                    e.location.href;
                    var F = jQuery(s.linksMenu),
                        q = jQuery('<div class="vtexSr-overlay"></div>'),
                        O = jQuery(s.menuDepartament),
                        P = $.offset(),
                        A = 1,
                        E = null,
                        B = null;
                    s.emptySearchElem.append(s.emptySearchMsg), $.before(q);
                    var D = {
                        exec: function () {
                            D.setFilterMenu(),
                                D.fieldsetFormat(),
                                D.newMenuFuncionality(),
                                i.each(function () {
                                    var e = jQuery(this),
                                        t = e.parent();
                                    e.is(":checked") && ((h += "&" + (e.attr("rel") || "")), t.addClass("sr_selected")),
                                        D.adjustText(e),
                                        t.append('<span class="sr_box"></span><span class="sr_box2"></span>'),
                                        e.bind("change", function () {
                                            D.inputAction(), 
                                            e.is(":checked") ? D.addFilter(e) : D.removeFilter(e), 
                                            s.filterOnChange && (b.filters = i.filter(":checked").length);
                                        });
                                }),
                                jQuery(s.filterButtonClass).on("click", function () {
                                    D.applyFilter();
                                }),
                                jQuery(s.clearButtonClass).on("click", function (e) {
                                    D.removeAllFilters(e, this);
                                }),
                                "" !== h && D.addFilter(c),
                                D.contadorDeProdutos(),
                                D.atualizarPaginador(),
                                S("vsr-complete");
                        },
                        newMenuFuncionality: function () {
                            jQuery( ".page-department .c-filters__content-body .search-multiple-navigator fieldset" ).each(function(index) {
                                jQuery(this).on("click", function(){
                                    jQuery(this).find('h5').next().toggleClass('active');
                                });
                            });
                        },
                        mergeMenu: function () {
                            if (!s.mergeMenu) return !1;
                            var e = O;
                            e.insertAfter(s.insertMenuAfter), 
                            D.departamentMenuFormat(e);
                        },
                        mergeMenuList: function () {
                            var e = 0;
                            C.find("h3, h4").each(function () {
                                var t = F.find("h3, h4").eq(e).next("ul");
                                t.insertAfter(jQuery(this)), 
                                D.departamentMenuFormat(t), e++;
                            });
                        },
                        departamentMenuFormat: function (e) {
                            e.find("a").each(function () {
                                var e = jQuery(this);
                                e.text(D.removeCounter(e.text()));
                            });
                        },
                        fieldsetFormat: function () {
                            (y.fieldsetCount = 0),
                                (y.tmpCurrentLabel = {}),
                                C.find("fieldset").each(function () {
                                    var e = jQuery(this),
                                        t = e.find("label"),
                                        n = "filtro_" + (e.find("h5:first").text() || "").toLowerCase().replaceSpecialChars().replace(/\s/g, "-");
                                    (y[n] = {}),
                                        t.length < 1
                                            ? e.hide()
                                            : (e.addClass(n),
                                              t.each(function (t) {
                                                  var o = jQuery(this),
                                                      i = o.find("input").val() || "",
                                                      a = "sr_" + i.toLowerCase().replaceSpecialChars().replace(/\s/g, "-");
                                                  (y.tmpCurrentLabel = { fieldsetParent: [e, n], elem: o }), 
                                                  (y[n][t.toString()] = { className: a, title: i }), o.addClass(a).attr({ title: i, index: t }), 
                                                  s.labelCallback(y);
                                              }),
                                              y.fieldsetCount++);
                                });
                        },
                        setFilterMenu: function () {
                            C.length > 0 && (F.hide(), C.show());
                        },
                        inputAction: function () {
                            null !== B && B.abort(), null !== E && E.abort(), (d = 2), (u = !0);
                        },
                        applyFilter: function () {
                            (f = x()),
                                S("vsr-request-init", $, f),
                                (E = jQuery.ajax({
                                    url: f,
                                    success: D.filterAjaxSuccess,
                                    error: D.filterAjaxError,
                                    complete: function () {
                                        S("vsr-request-end", $);
                                    },
                                }));
                        },
                        addFilter: function (e) {
                            (h += "&" + (e.attr("rel") || "")), (f = x()), s.filterOnChange && (q.fadeTo(300, 0.6), D.applyFilter(), S("vsr-add-filter")), e.parent().addClass("sr_selected");
                        },
                        removeAllFilters: function (e, t) {
                            (h = ""), n("input:checked").prop("checked", !1).parent().removeClass("sr_selected"), D.applyFilter(), S("vsr-clean-all-filter");
                        },
                        removeFilter: function (e) {
                            var t = e.attr("rel") || "";
                            "" !== t && (h = h.replace("&" + t, "")), s.filterOnChange && (q.fadeTo(300, 0.6), D.applyFilter(), S("vsr-remove-filter")), e.parent().removeClass("sr_selected");
                        },
                        filterAjaxSuccess: function (e) {
                            var t = jQuery(e);
                            q.fadeTo(300, 0, function () {
                                jQuery(this).hide();
                            }),
                                D.updateContent(t),
                                b.requests++,
                                s.ajaxCallback(b),
                                m.animate({ scrollTop: s.filterScrollTop(P || { top: 0, left: 0 }) }, 600),
                                S("vsr-ajax-sucess");
                        },
                        filterAjaxError: function () {
                            q.fadeTo(300, 0, function () {
                                jQuery(this).hide();
                            }),
                                s.alertFilterErro && alert(s.filterErrorMsg),
                                a("Houve um erro ao tentar fazer a requisiÃ§Ã£o da pÃ¡gina com filtros."),
                                S("vsr-ajax-fail");
                        },
                        updateContent: function (e) {
                            if (((g = !0), !s.authorizeUpdate(b))) return !1;
                            var t = e.filter(s.shelfClass),
                                n = $.find(s.shelfClass);
                            (n.length > 0 ? n : s.emptySearchElem).slideUp(600, function () {
                                jQuery(this).remove(),
                                    s.usePopup ? v.find(".boxPopUp2").vtexPopUp2() : s.emptySearchElem.remove(),
                                    t.length > 0
                                        ? (t.hide(),
                                          $.append(t),
                                          s.shelfCallback(),
                                          t.slideDown(600, function () {
                                              g = !1;
                                          }),
                                          (b.isEmpty = !1))
                                        : ((b.isEmpty = !0),
                                          s.usePopup
                                              ? s.emptySearchElem
                                                    .addClass("freeContent autoClose ac_" + s.popupAutoCloseSeconds)
                                                    .vtexPopUp2()
                                                    .stop(!0)
                                                    .show()
                                              : ($.append(s.emptySearchElem),
                                                s.emptySearchElem
                                                    .show()
                                                    .css("height", "auto")
                                                    .fadeTo(300, 0.2, function () {
                                                        s.emptySearchElem.fadeTo(300, 1);
                                                    })),
                                          s.emptySearchCallback(b));
                            });
                        },
                        adjustText: function (e) {
                            var t = e.parent(),
                                n = t.text();
                            (n = D.removeCounter(n)), t.text(n).prepend(e);
                        },
                        removeCounter: function (e) {
                            return e.replace(/\([0-9]+\)/gi, function (e) {
                                return "";
                            });
                        },
                        atualizarPaginador: function () {
                            n(t).on("vsr-contagem-produtos", function (e, t) {
                                var n = parseInt(t),
                                    o = $.find("li[layout]").length;
                                S(o >= n ? "vsr-no-more-results" : "vsr-more-results", p);
                            });
                        },
                        contadorDeProdutos: function () {
                            n(t).on("vsr-request-init", function (e, o) {
                                n(t).one("vsr-request-end", function (e, t) {
                                    var o = "/api/catalog_system/pub/products/search" + f.replace("/buscapagina", "");
                                    -1 !== o.indexOf("?") ? (o += "&_from=1&_to=1") : (o += "?_from=1&_to=1"),
                                        n
                                            .get(o)
                                            .done(function (e, t, n) {
                                                var o = n.getResponseHeader("resources").split("/"),
                                                    i = 0;
                                                o.length > 1 && (i = o[1]),
                                                    setTimeout(function () {
                                                        S("vsr-contagem-produtos", $, i);
                                                    }, 200);
                                            })
                                            .fail();
                                });
                            });
                        },
                    };
                    v.hasClass("page-department") ? D.mergeMenu() : (v.hasClass("page-category") || v.hasClass("page-search")) && D.mergeMenuList(), D.exec(), s.infinitScroll ? j(M) : T(M), k(), s.callback(), C.css("visibility", "visible");
                });
        })(document, window, jQuery);
    },
    145: function (e, t) {
        $(function () {
            1 == $(".c-news").length &&
                $(".js-news-submit").on("click", function (e) {
                    e.preventDefault(),
                        (function () {
                            const e = { name: $("#nome").val(), email: $("#email").val() };
                            $("#mensagem").html('\n      <div class="message-success message-enviando">\n        <span class="text"><strong>Enviando...</strong></span>\n      </div>\n    '),
                                $.ajax({
                                    url: "/api/dataentities/NW/documents",
                                    type: "put",
                                    dataType: "json",
                                    contentType: "application/json",
                                    success: function () {
                                        $("#mensagem").html(
                                            '\n          <div class="c-message__content">\n            <div class="c-message__content-success">\n              <span class="text"><strong>Obrigado por se cadastrar na PatogÃª!</strong></span>\n              <span class="text">Em breve entraremos em contato com vocÃª para oferecer as melhores promoÃ§Ãµes.</span>\n            </div>\n          </div>\n          '
                                        );
                                    },
                                    data: JSON.stringify(e),
                                });
                        })();
                });
        });
    },
    146: function (e, t, n) {},
    148: function (e, t, n) {
        "use strict";
        n.r(t);
        var o = n(12),
            i = n(1);
        const a = Object(i.a)("icons"),
            r = () => {
                $(function () {
                    new o.a($(".c-minicart__footer-delivery"));
                    const e = {
                        init: function () {
                            e.icons(), e.navigation(), e.openMenu(), e.closeMenu(), e.openMinicart(), e.closeMinicart(), e.verifyLogin(), e.searchAutocomplete();
                        },
                        icons: function () {
                            $(".c-minicart__header-links .close").prepend(a.sacola), $(".c-minicart__empty span").prepend(a.bag), $(".header-patoge__top .c-search, .header-patoge__bottom .c-search").append(a.search);
                        },
                        navigation: function () {
                            $.ajax({ async: !0, crossDomain: !0, url: "/api/catalog_system/pub/category/tree/2/", method: "GET" }).done(function (e) {
                                const t = e.reduce((e, t, n) => ((e[t.name] = { ...t }), e), {}),
                                    n = {
                                        "Ã¢": "a",
                                        "Ã‚": "A",
                                        "Ã ": "a",
                                        "Ã€": "A",
                                        "Ã¡": "a",
                                        "Ã": "A",
                                        "Ã£": "a",
                                        "Ãƒ": "A",
                                        "Ãª": "e",
                                        "ÃŠ": "E",
                                        "Ã¨": "e",
                                        "Ãˆ": "E",
                                        "Ã©": "e",
                                        "Ã‰": "E",
                                        "Ã®": "i",
                                        "ÃŽ": "I",
                                        "Ã¬": "i",
                                        "ÃŒ": "I",
                                        "Ã­": "i",
                                        "Ã": "I",
                                        "Ãµ": "o",
                                        "Ã•": "O",
                                        "Ã´": "o",
                                        "Ã”": "O",
                                        "Ã²": "o",
                                        "Ã’": "O",
                                        "Ã³": "o",
                                        "Ã“": "O",
                                        "Ã¼": "u",
                                        "Ãœ": "U",
                                        "Ã»": "u",
                                        "Ã›": "U",
                                        "Ãº": "u",
                                       "Ãš": "U",
                                        "Ã¹": "u",
                                        "Ã™": "U",
                                        "Ã§": "c",
                                        "Ã‡": "C",
                                    };
                                const o = `\n            <div id='c-menu'>\n              <ul class='c-menu'>\n                ${Object.keys(t)
                                    .map((e) => {
                                        const o = t[e],
                                            i = o.name.toLowerCase().replace(" ", "-");
                                        return `\n                    <li class='c-menu__item c-menu__${
                                            ((a = i),
                                            a.replace(/[\W\[\] ]/g, function (e) {
                                                return n[e] || e;
                                            }))
                                        }'>\n                      <a class='c-menu__link' href="${o.url}">${o.name}</a>\n                      ${
                                            o.children.length > 0 ? '<ul class="c-submenu">' : ""
                                        }\n                        ${o.children
                                            .map(
                                                (e) =>
                                                    `\n                            <li class='c-submenu__item'>\n                              <a class='c-submenu__link' href="${e.url}">${e.name}</a>\n                            </li>\n                          `
                                            )
                                            .join("")}\n                      ${o.children.length > 0 ? "</ul>" : ""}\n                    </li>\n                  `;
                                        var a;
                                    })
                                    .join("")}\n              </ul>\n            </div>\n          `;
                                $(".header-patoge__menu-add").append(o),
                                    $(".header-patoge__menu-add .c-menu").append(
                                        "\n            <li class='c-menu__item c-menu__colNovidades'>\n              <a class='c-menu__link' href=\"/novidades\">Novidades</a>\n            </li>\n          "
                                    );
                            });
                        },
                        openMenu: function () {
                            $(".js-menuMobile").click(function () {
                                $(".js-menu").addClass("active"), $(".mask").addClass("active");
                            });
                        },
                        closeMenu: function () {
                            $(".js-btnClose").click(function () {
                                $(".js-menu").removeClass("active"), $(".mask").removeClass("active");
                            });
                        },
                        openMinicart: function () {
                            $(".header-patoge .c-menucart").click(function () {
                                $(".c-minicart").addClass("open"), $(".c-minicart__overlay").addClass("open"), $("body").attr("style", "overflow-y: hidden;");
                            });
                        },
                        closeMinicart: function () {
                            $(".c-minicart .close").click(function () {
                                $(".c-minicart").removeClass("open"), $(".c-minicart__overlay").removeClass("open"), $("body").removeAttr("style");
                            });
                        },
                        verifyLogin: function () {
                            $(document).one("ajaxStop", function () {
                                $(".header-patoge .ajax-content-loader").each(function () {
                                    if ($("#login", this).length) $(this).parent().addClass("loginOff"), $("body").addClass("loginOff");
                                    else if (
                                        ($(this).parent().addClass("loginOn"),
                                        $("body").addClass("loginOn"),
                                        $(".ajax-content-loader").append(
                                            "\n                <div class=\"conta__box\">\n                  <a href='/account#/orders' class='conta__box-link link-perfil'>Meus Pedidos</a>\n                  <a href='/account#/profile' class='conta__box-link link-perfil'>Meu Cadastro</a>\n                  <a class='conta__box-link' href='/no-cache/user/logout'><strong>Sair<strong></a>\n                </div>\n              "
                                        ),
                                        $("body").hasClass("loginOn"))
                                    ) {
                                        $("p.welcome em").remove();
                                        var e = $("p.welcome").html();
                                        (e = e.replace(/ /g, "").replace("OlÃ¡", "").replace(".", "")), $("p.welcome").html("OlÃ¡" + e), $(".welcome").prependTo($(".header-patoge .conta__box"), $(".welcome").addClass("logado"));
                                    }
                                    $("body").on("click", function (e) {
                                        document.getElementsByClassName(".header-patoge .conta")[0] && !document.getElementsByClassName(".header-patoge .conta")[0].contains(e.target) && $(".header-patoge .conta__box").removeClass("active");
                                    }),
                                        $(".header-patoge .conta").click(function () {
                                            $(".header-patoge .conta__box, .welcome").toggleClass("active");
                                        }),
                                        1 == $(".page-account").length && ($(".header-patoge .conta__box, .welcome").removeClass("active"), $(".header-patoge .link-perfil").attr("style", "display: none;"));
                                });
                            });
                        },
                        searchAutocomplete: function () {
                            if ($(window).width() < 992) {
                                const e = $("fieldset.busca");
                                $(".header-patoge__bottom .c-search").append(e);
                            }
                            !(function (e, t, n = "childList") {
                                let o = document.querySelector(e);
                                var i = new MutationObserver(function () {
                                    t();
                                });
                                switch (n) {
                                    case "attributes":
                                        i.observe(o, { attributes: !0 });
                                        break;
                                    case "childList":
                                        i.observe(o, { childList: !0 });
                                }
                            })(".ui-autocomplete", function () {
                                const e = $(".c-search").height();
                                setTimeout(function () {
                                    $(".ui-autocomplete").attr("style", `height: ${e - 108}px !important;`);
                                }, 1e3),
                                    $(".ui-autocomplete li").each(function () {
                                        1 == !$(this).find("img").length && $(this).remove();
                                    }),
                                    $(".ui-autocomplete li img").each(function (e) {
                                        $(this)
                                            .parent()
                                            .parent()
                                            .addClass("c-results__content-item item-" + e);
                                        var t = $(this),
                                            n = t.attr("src").replace("25-25", "400-400");
                                        t.attr("src", n);
                                    }),
                                    $(".ui-autocomplete .ui-menu-item").wrapAll('<div class="c-results"></div>'),
                                    setTimeout(function () {
                                        const e = $(".ui-autocomplete .c-results__content-item.item-0");
                                        $(".c-results").eq(1).addClass("c-results__content"),
                                            $(".c-results__content").removeClass("c-results"),
                                            $(".c-results").append('<div class="c-results__more"></div>'),
                                            $(".c-results__more").append(e),
                                            $(".c-results__more").eq(1).remove(),
                                            $(".c-results__content-item.item-9, .c-results__content-item.item-10, .c-results__content-item.item-11").remove(),
                                            $(".c-results__more .ui-corner-all").html(`\n              ${a.plus}\n              <span class="text">Mais resultados</span>\n            `);
                                    }, 100);
                            });
                        },
                    };
                    e.init();
                });
            };
        var s = () => {
            r();
        };
        const c = Object(i.a)("icons"),
            l = () => {
                $(function () {
                    const e = {
                        init: function () {
                            e.whatsapp();
                        },
                        icons: function () {},
                        whatsapp: function () {
                            $(".c-whats").append(
                                `\n          <div class="c-whats__content">\n            <a class="c-whats__link" href="https://api.whatsapp.com/send?phone=5531971447720&text=OlÃ¡, tenho algumas dÃºvidas e preciso de ajuda!" target="_blank">\n              ${c.whatsapp}\n            </a>\n          </div>\n        `
                            );
                        },
                    };
                    e.init();
                });
            };
        var d = () => {
            l();
        };
        function u() {
            const e = document.querySelectorAll("[required]");
            function t(e) {
                function t(t) {
                    const n = e.parentNode.querySelector("span.form-error");
                    t ? (n.classList.add("active"), (n.innerHTML = t)) : (n.classList.remove("active"), (n.innerHTML = ""));
                }
                return function () {
                    const n = (function () {
                        let t = !1;
                        for (let n in e.validity) e.validity[n] && !e.validity.valid && (t = n);
                        return t;
                    })();
                    if (n) {
                        const i =
                            ((o = n),
                            {
                                text: { valueMissing: "Este campo Ã© obrigatÃ³rio!" },
                                email: { valueMissing: "E-mail Ã© obrigatÃ³rio", typeMismatch: "Por favor, preencha um e-mail vÃ¡lido" },
                                phone: { valueMissing: "Telefone Ã© obrigatÃ³rio!" },
                                select: { valueMissing: "Selecione um assunto" },
                                textarea: { valueMissing: "Este campo Ã© obrigatÃ³rio!" },
                            }[e.getAttribute("data-type")][o]);
                        (e.style.borderColor = "red"), t(i);
                    } else (e.style.borderColor = "green"), t();
                    var o;
                };
            }
            function n(e) {
                t(e.target)();
            }
            for (let t of e)
                t.addEventListener("invalid", (e) => {
                    console.log(t.getAttribute("data-type")), e.preventDefault(), n(e);
                }),
                    t.addEventListener("blur", n);
            const o = {
                cpf: (e) =>
                    e
                        .replace(/\D+/g, "")
                        .replace(/(\d{3})(\d)/, "$1.$2")
                        .replace(/(\d{3})(\d)/, "$1.$2")
                        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                        .replace(/(-\d{2})\d+?$/, "$1"),
                cnpj: (e) =>
                    e
                        .replace(/\D+/g, "")
                        .replace(/(\d{2})(\d)/, "$1.$2")
                        .replace(/(\d{3})(\d)/, "$1.$2")
                        .replace(/(\d{3})(\d)/, "$1/$2")
                        .replace(/(\d{4})(\d)/, "$1-$2")
                        .replace(/(-\d{2})\d+?$/, "$1"),
                phone: (e) =>
                    e
                        .replace(/\D+/g, "")
                        .replace(/(\d{2})(\d)/, "($1) $2")
                        .replace(/(\d{4})(\d)/, "$1-$2")
                        .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
                        .replace(/(-\d{4})\d+?$/, "$1"),
                phoneDDI: (e) =>
                    e
                        .replace(/\D+/g, "")
                        .replace(/(\d{2})(\d)/, "+$1 $2")
                        .replace(/(\d{2})(\d)/, "($1) $2")
                        .replace(/(\d{4})(\d)/, "$1-$2")
                        .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
                        .replace(/(-\d{4})\d+?$/, "$1"),
                cep: (e) =>
                    e
                        .replace(/\D+/g, "")
                        .replace(/(\d{5})(\d)/, "$1-$2")
                        .replace(/(-\d{3})\d+?$/, "$1"),
                pis: (e) =>
                    e
                        .replace(/\D+/g, "")
                        .replace(/(\d{3})(\d)/, "$1.$2")
                        .replace(/(\d{5})(\d)/, "$1.$2")
                        .replace(/(\d{5}\.)(\d{2})(\d)/, "$1$2-$3")
                        .replace(/(-\d)\d+?$/, "$1"),
                money(e) {
                    const t = +e.replace(/\D+/g, "");
                    return new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(t / 100);
                },
                date: (e) =>
                    e
                        .replace(/\D+/g, "")
                        .replace(/(\d{2})(\d)/, "$1/$2")
                        .replace(/(\/\d{2})(\d)/, "$1/$2")
                        .replace(/(\/\d{4})\d+?$/, "$1"),
                dateWithDashes: (e) =>
                    e
                        .replace(/\D+/g, "")
                        .replace(/(\d{2})(\d)/, "$1-$2")
                        .replace(/(-\d{2})(\d)/, "$1-$2")
                        .replace(/(-\d{4})\d+?$/, "$1"),
            };
            document.querySelectorAll("input").forEach((e) => {
                const t = e.dataset.type;
                e.addEventListener(
                    "input",
                    (e) => {
                        e.target.value = o[t](e.target.value);
                    },
                    !1
                );
            });
        }
        const p = Object(i.a)("icons");
        $(".popup").append(
            `\n  <div class="popup__modal">\n    <div class="popup__container">\n      <div class="popup__logo">${p.logo}</div>\n      <div class="popup__close">${p.close}</div>\n      <div class="popup__close-cupom">${p.close}</div>\n      <div class="popup__content"></div>\n    </div>\n  </div>\n\n`
        ),
            $(".popup__content").append(
                `\n  <div class="popup__message">   \n    <p class="text__message-1">10%</p>\n    <p class="text__message-2">OFF</p>\n    <p class="text__message-3">+ Frete GrÃ¡tis</p>\n\n    <p class="text__divisoria">\n      <span class="dot"></span>\n      <span class="dot"></span>\n      <span class="dot"></span>\n      <span class="dot"></span>\n      <span class="dot"></span>\n      <span class="dot"></span>\n      <span class="dot"></span>\n      <span class="dot"></span>\n      <span class="dot"></span>\n      <span class="dot"></span>\n\n      ${
                    $(window).width() >= 576
                        ? '\n            <span class="dot"></span>\n            <span class="dot"></span>\n            <span class="dot"></span>\n            <span class="dot"></span>\n            <span class="dot"></span>\n            <span class="dot"></span>\n            <span class="dot"></span>\n          '
                        : ""
                }\n\n    </p>\n\n    <p class="text__message-4">na primeira compra</p>\n\n  </div>\n  \n  <form class="form">\n    <div class="form__item">\n      <input class="form__input" id="popupEmail" type="email" placeholder="Digite seu e-mail" data-type="email" required="required"/>\n      <span class="form-error"></span>\n    </div>\n    <button class="form__button js-popup-submit" type="submit">Cadastrar</button>\n  </form>\n`
            ),
            $(function () {
                function e(e, t, n) {
                    var o = new Date();
                    o.setDate(o.getDate() + n);
                    var i = escape(t) + (null == n ? "" : "; expires=" + o.toUTCString());
                    document.cookie = e + "=" + i;
                }
                u(),
                    $(".popup__close").on("click", function () {
                        $(".popup").removeAttr("style");
                    }),
                    $(".popup__close-cupom").on("click", function () {
                        e("popup__cookie", "ok", 1), $(".popup").removeAttr("style");
                    }),
                    1 == $(".popup").length &&
                        $(".js-popup-submit").on("click", function (t) {
                            t.preventDefault(),
                                (function () {
                                    const t = { popupEmail: $("#popupEmail").val() };
                                    $(".popup__send").html("\n      <p><strong>Cadastrando...</strong></p>\n    "),
                                        $.ajax({
                                            url: "/api/dataentities/BV/documents",
                                            type: "put",
                                            dataType: "json",
                                            contentType: "application/json",
                                            success: function () {
                                                e("c-popup__cookie", "ok", 365),
                                                    $(".popup__logo").remove(),
                                                    $(".popup__close").remove(),
                                                    $(".popup .form").remove(),
                                                    $(".popup__close-cupom").addClass("active"),
                                                    $(".popup__container").addClass("active"),
                                                    $(".popup__message").html(
                                                        '\n          <p class="text__cupom-1">Presente de boas</p>\n          <p class="text__cupom-2">vindas para vocÃª!</p>\n          <p class="text__cupom-3">Cupom</p>\n          <p class="text__cupom-4">BEMVINDO10</p>\n        '
                                                    );
                                            },
                                            data: JSON.stringify(t),
                                        });
                                })();
                        }),
                    "ok" !=
                        (function (e) {
                            var t,
                                n,
                                o,
                                i = document.cookie.split(";");
                            for (t = 0; t < i.length; t++) if (((n = i[t].substr(0, i[t].indexOf("="))), (o = i[t].substr(i[t].indexOf("=") + 1)), (n = n.replace(/^\s+|\s+$/g, "")) == e)) return unescape(o);
                        })("popup__cookie") && $(".popup").show();
            });
        var m = n(88),
            v = n.n(m);
        $(function () {
            const e = {
                init: function () {
                    e.images();
                },
                images: function () {
                    const e = v()(),
                        t = document.querySelectorAll("img");
                    t.forEach((t) => {
                        var n = t.getAttribute("src");
                        t.setAttribute("data-src", n),
                            t.setAttribute("data-lazy", n),
                            t.removeAttribute("id"),
                            t.removeAttribute("src"),
                            e.watch(
                                t,
                                ((t) => () => {
                                    (t.src = t.dataset.src), (t.classList = "loaded"), e.unWatch(t);
                                })(t)
                            );
                    });
                },
            };
            e.init();
        });
        const f = Object(i.a)("icons");
        $(function () {
            const e = {
                miniCartInit: function () {
                    vtexjs.checkout.getOrderForm().done(function (t) {
                        e.addClassVitrine(), 
                        e.pricePercent(), 
                        e.vitrineCarousel(),
                        e.categoriesCarousel(), 
                        $(window).width() < 576 && e.limitedTitle();
                    });
                },
                icons: function () {},
                pricePercent: function () {
                    $(".c-vitrine").each(function () {
                        const e = parseFloat($(this).find(".c-vitrine__info-listPrice").text().replace("R$ ", "").replace(".", "").replace(",", ".")),
                            t = parseFloat($(this).find(".c-vitrine__info-bestPrice").text().replace("R$ ", "").replace(".", "").replace(",", ".")),
                            n = Math.round((100 * (t - e)) / e)
                                .toString()
                                .replace("-", "");
                        $(this)
                            .find(".percentage")
                            .html(n + "% Off");
                    });
                },
                variantesCompraRapida: function () {
                    setTimeout(function () {
                        $(".c-vitrine__item")
                            .not(".c-vitrine__ajax-completed")
                            .each(function (e, t) {
                                var n = $(this);
                                n.addClass("c-vitrine__ajax-completed"),
                                    n.find(".c-vitrine__selection").prepend('\n                <div class="list-skus-hidden"></div>\n                <ul class="c-vitrine__selection-colors"></ul>\n              ');
                                var o,
                                    i = n.find(".c-vitrine__id").val();
                                vtexjs.catalog.getProductWithVariations(i).done(function (e) {
                                    o = e.skus;
                                    e.dimensionsMap.Cor;
                                    for (var t = 0; t < o.length; t++) {
                                        var i = o[t].dimensions.Cor,
                                            a = o[t].dimensions.Tamanho,
                                            r = o[t].sku,
                                            s = o[t].available;
                                        n.find(".list-skus-hidden").append(`\n                <input class="hidden-select" type="hidden" data-id="${r}" data-color="${i}" data-size="${a}" data-available="${s}" />\n              `),
                                            void 0 !== i && n.find(".c-vitrine__selection-colors").prepend(`\n                  <li class="${i}" data-color="${i}">${i}</li>\n                `),
                                            void 0 !== a && n.find(".c-vitrine__selection-variations").prepend(`\n                  <li class="prod-size ${a} ${s}" data-size="${a}">${a}</li>\n                `);
                                    }
                                }),
                                    $(document).on("click", ".c-vitrine__selection-variations li", function () {
                                        $(this).parent().find("li").removeClass("active"),
                                            $(this).addClass("active"),
                                            $(this).parent().parent().find(".c-vitrine__selection-colors li").addClass("active"),
                                            n.find(".c-vitrine__selection-button .buy").removeAttr("href");
                                    }),
                                    n.find(".c-vitrine__selection-button").hover(function () {
                                        var e = $(".c-vitrine__selection-variations li.active").attr("data-size"),
                                            t = $(".c-vitrine__selection-colors li.active").attr("data-color");
                                        n.parent().find(`\n              .list-skus-hidden input[data-size="${e}"][data-color="${t}"]\n            `).addClass("selected");
                                    }),
                                    n.find(".c-vitrine__selection-button").click(function () {
                                        var e = n.parent().find(".selected");
                                        if ("false" == e.attr("data-available")) alert("Produto nÃ£o disponÃ­vel nesta combinaÃ§Ã£o"), $(".list-skus-hidden input").removeClass("selected"), n.parent().find("li").removeClass("active");
                                        else if (e.length) {
                                            var t = { id: e.attr("data-id"), quantity: "1", seller: "1" };
                                            vtexjs.checkout.addToCart([t]).done(function () {
                                                Swal.fire({ icon: "success", type: "success", title: "Produto adicionado com sucesso!", toast: "true", position: "top-end", showConfirmButton: !1, timerProgressBar: "true", timer: "2000" }),
                                                    $(".c-minicart").addClass("open"),
                                                    $(".c-minicart__overlay").addClass("open"),
                                                    setTimeout(function () {
                                                        $(".c-minicart").removeClass("open"), $(".c-minicart__overlay").removeClass("open");
                                                    }, 3e3);
                                            }),
                                                $(".list-skus-hidden input").removeClass("selected"),
                                                n.parent().find("li").removeClass("active");
                                        } else alert("Selecione uma cor e um tamanho.");
                                    });
                            });
                    }, 2e3);
                },
                addClassVitrine: function () {
                    $(".prateleira ul li").addClass("c-vitrine__item"), $(".helperComplement").remove();
                },
                vitrineCarousel: function () {
                    try {
                        $(".c-vitrine").addClass("active");
                    } catch (e) {
                        console.error("NÃ£o foi carregar a vitrine - " + e);
                    }
                    $(".c-vitrine.vitrine-carousel ul li").length <= 4 && 
                    $(".c-vitrine.vitrine-carousel").removeClass("vitrine-carousel"),
                        $(".vitrine-carousel ul li").length > 4 &&
                            $(".vitrine-carousel ul").slick({
                                slidesToShow: 4,
                                // centerMode: true,
                                slidesToScroll: 4,
                                dots: !1,
                                prevArrow: f.left,
                                nextArrow: f.right,
                                responsive: [
                                    { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4, infinite: !0, dots: !1, arrows: !0, prevArrow: f.left, nextArrow: f.right } },
                                    { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: !0, dots: !1, arrows: !0, prevArrow: f.left, nextArrow: f.right } },
                                    { breakpoint: 768, settings: { slidesToShow: 1.5,centerMode: true, slidesToScroll: 1.5, infinite: !0, dots: !1, arrows: !0, prevArrow: f.left, nextArrow: f.right } },
                                    { breakpoint: 576, settings: { slidesToShow: 1.5,centerMode: true, slidesToScroll: 1.5, infinite: !0, dots: !1, arrows: !0, prevArrow: f.left, nextArrow: f.right } },
                                ],
                            });
                },
                categoriesCarousel: function () {
                    try {
                        $(".c-categories").addClass("active");
                    } catch (e) {
                        console.error("NÃ£o foi carregar a categories - " + e);
                    }
                    $(".categories-carousel .box-banner").length <= 4 && 
                    $(".c-categories.categories-carousel").removeClass(".categories-carousel"),
                        $(".categories-carousel .box-banner").length > 4 &&
                            $(".categories-carousel .c-categories__content").slick({
                                slidesToShow: 4,
                                slidesToScroll: 1,
                                dots: !1,
                                prevArrow: false,
                                autoplay: true,
                                infinite: false,
                                nextArrow: false,
                                centerMode: false,
                                vertical: false,
                                responsive: [
                                    { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4, infinite: !0, dots: !1, arrows: !0} },
                                    { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: !0, dots: !1, arrows: !0} },
                                    { breakpoint: 768, settings: { slidesToShow: 1.5,centerMode: true, slidesToScroll: 1, infinite: !0, dots: !1, arrows: !0} },
                                    { breakpoint: 576, settings: { slidesToShow: 1.5, centerMode: true, slidesToScroll: 1, infinite: !0, dots: !1, arrows: !0} },
                                ],
                            });
                            $(".categories-carousel .c-categories__content--2").slick({
                                slidesToShow: 4,
                                slidesToScroll: 1,
                                dots: !1,
                                prevArrow: false,
                                autoplay: true,
                                infinite: false,
                                nextArrow: false,
                                centerMode: false,
                                vertical: false,
                                responsive: [
                                    { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4, infinite: !0, dots: !1, arrows: !0} },
                                    { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: !0, dots: !1, arrows: !0} },
                                    { breakpoint: 768, settings: { slidesToShow: 1.5,centerMode: true, slidesToScroll: 2, infinite: !0, dots: !1, arrows: !0} },
                                    { breakpoint: 576, settings: { slidesToShow: 1.5,centerMode: true, slidesToScroll: 2, infinite: !0, dots: !1, arrows: !0} },
                                ],
                            })
                },
                limitedTitle: function () {
                    $(".c-vitrine .title").each(function () {
                        $(this).text().trim().length > 40 && $(this).text($(this).text().trim().slice(0, 40) + "â€¦");
                    });
                },
            };
            e.miniCartInit();
        });
        const h = Object(i.a)("icones");
        $(function () {
            const e = {
                init: function () {
                    e.pricePercent(), e.flagDiscount(), e.listShelf(), e.ofertaDoDia();
                },
                pricePercent: function () {
                    $(".c-shelf").each(function () {
                        const e = parseFloat($(this).find(".c-shelf__info-listPrice").text().replace("R$ ", "").replace(".", "").replace(",", ".")),
                            t = parseFloat($(this).find(".c-shelf__info-bestPrice").text().replace("R$ ", "").replace(".", "").replace(",", ".")),
                            n = Math.round((100 * (t - e)) / e)
                                .toString()
                                .replace("-", "");
                        $(this)
                            .find(".percentage")
                            .html(n + "% Off");
                    });
                },
                flagDiscount: function () {
                    $(".prateleira .flag-desconto")
                        .not(".complete")
                        .each(function () {
                            $(this).toggleClass("complete");
                            let e = $(this).find(".porcentagem").text();
                            (e = parseInt(e)),
                                $(this)
                                    .find(".porcentagem")
                                    .html(Math.round(e) + "%");
                        });
                },
                listShelf: function () {
                    $(".c-productVitrine ul").eq(0).addClass("c-productVitrine__content-list");
                },
                ofertaDoDia: function () {
                    1 == $(".flag.oferta-do-dia").length &&
                        ($(".flag.oferta-do-dia").append(
                            `\n          <div class="c-countdown">\n            <div class="c-countdown__icon">${h.clock}</div>\n            <div id="timerCountdown" class="c-countdown__info">\n              <span class="c-countdown__info-message">Esta oferta expira em:</span>\n              <div class="c-countdown__info-clock">\n                <div class="c-countdown__info-item hour">\n                  <span class="number"></span>\n                  <span class="text">hor</span>\n                </div>\n                <div class="dot">:</div>\n                <div class="c-countdown__info-item min">\n                  <span class="number"></span>\n                  <span class="text">min</span>\n                </div>\n                <div class="dot">:</div>\n                <div class="c-countdown__info-item seg">\n                  <span class="number"></span>\n                  <span class="text">seg</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        `
                        ),
                        setInterval(function () {
                            var e = new Date(),
                                t = 23 - e.getHours(),
                                n = 59 - e.getMinutes();
                            1 == (t + "").length && (t = "0" + t), 1 == (n + "").length && (n = "0" + n);
                            var o = 59 - e.getSeconds();
                            1 == (o + "").length && (o = "0" + o), $("#timerCountdown .hour .number").html(t), $("#timerCountdown .min .number").html(n), $("#timerCountdown .seg .number").html(o);
                        }, 1e3));
                },
                variantesCompraRapida: function () {
                    setTimeout(function () {
                        $(".c-shelf")
                            .not(".c-shelf__ajax-completed")
                            .each(function (e, t) {
                                var n = $(this);
                                n.addClass("c-shelf__ajax-completed"),
                                    n.find(".c-shelf__selection").prepend('\n                <div class="list-skus-hidden"></div>\n                <ul class="c-shelf__selection-colors"></ul>\n              ');
                                var o,
                                    i = n.find(".c-shelf__id").val();
                                vtexjs.catalog.getProductWithVariations(i).done(function (e) {
                                    o = e.skus;
                                    for (var t = e.dimensionsMap.Cor, i = 0; i < o.length; i++) {
                                        var a = o[i].dimensions.Cor,
                                            r = o[i].dimensions.Tamanho,
                                            s = o[i].sku,
                                            c = o[i].available;
                                        n.find(".list-skus-hidden").append(`\n                <input class="hidden-select" type="hidden" data-id="${s}" data-color="${a}" data-size="${r}" data-available="${c}" />\n              `);
                                    }
                                    for (var l = 0; l < t.length; l++) {
                                        var d = t[l];
                                        void 0 !== d && n.find(".c-shelf__selection-colors").prepend(`\n                  <li class="${d}" data-color="${d}">${d}</li>\n                `);
                                    }
                                    for (var u = 0; u < o.length; u++) {
                                        var p = o[u].dimensions.Tamanho,
                                            m = o[u].available;
                                        void 0 !== p && n.find(".c-shelf__selection-variations").prepend(`\n                  <li class="prod-size ${p} ${m}" data-size="${p}">${p}</li>\n                `);
                                    }
                                }),
                                    $(document).on("click", ".c-shelf__selection-variations li", function () {
                                        $(this).parent().find("li").removeClass("active"),
                                            $(this).addClass("active"),
                                            $(this).parent().parent().find(".c-shelf__selection-colors li").addClass("active"),
                                            n.find(".c-shelf__selection-button .buy").removeAttr("href");
                                    }),
                                    n.find(".c-shelf__selection-button").hover(function () {
                                        var e = $(".c-shelf__selection-variations li.active").attr("data-size"),
                                            t = $(".c-shelf__selection-colors li.active").attr("data-color");
                                        n.parent().find(`\n              .list-skus-hidden input[data-size="${e}"][data-color="${t}"]\n            `).addClass("selected");
                                    }),
                                    n.find(".c-shelf__selection-button").click(function () {
                                        var e = n.parent().find(".selected");
                                        if ("false" == e.attr("data-available")) alert("Produto nÃ£o disponÃ­vel nesta combinaÃ§Ã£o"), $(".list-skus-hidden input").removeClass("selected"), n.parent().find("li").removeClass("active");
                                        else if (e.length) {
                                            var t = { id: e.attr("data-id"), quantity: "1", seller: "1" };
                                            vtexjs.checkout.addToCart([t]).done(function () {
                                                Swal.fire({ icon: "success", type: "success", title: "Produto adicionado com sucesso!", toast: "true", position: "top-end", showConfirmButton: !1, timerProgressBar: "true", timer: "2000" }),
                                                    $(".c-minicart").addClass("open"),
                                                    $(".c-minicart__overlay").addClass("open"),
                                                    setTimeout(function () {
                                                        $(".c-minicart").removeClass("open"), $(".c-minicart__overlay").removeClass("open");
                                                    }, 3e3);
                                            }),
                                                $(".list-skus-hidden input").removeClass("selected"),
                                                n.parent().find("li").removeClass("active");
                                        } else alert("Selecione uma cor e um tamanho.");
                                    });
                            });
                    }, 2e3);
                },
                shelfCarousel: function () {
                    $(".c-productVitrine__navigation-prev").append(h.left), $(".c-productVitrine__navigation-next").append(h.right), $(".c-productVitrine .helperComplement").remove();
                    const e = $(".c-productVitrine.carousel .c-productVitrine__content-list");
                    e.length > 4 && e.owlCarousel({ loop: !0, nav: !1, dots: !1, margin: 15, responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 3 }, 1400: { items: 4, loop: !1 } } }),
                        $(".c-productVitrine__navigation-prev").on("click", function () {
                            e.trigger("prev.owl.carousel");
                        }),
                        $(".c-productVitrine__navigation-next").on("click", function () {
                            e.trigger("next.owl.carousel");
                        });
                },
            };
            e.init();
        });
        class _ {
            constructor(e) {
                try {
                    window.vtexjs.checkout.getOrderForm();
                } catch (e) {
                    console.warn("vtexjs not found.");
                }
                (this.element = e), this.buildCouponForm(), this.selectors(), this.events();
            }
            buildCouponForm() {
                const e = this;
                $(this.element).html(
                    '\n\t\t\t<div class="discount-coupon">\n\t\t\t\t<div class="discount-coupon__wait-screen"></div>\n\t\t\t\t<div class="discount-coupon__form">\n\t\t\t\t\t<label for="coupon-code">CÃ³digo do cupom</label>\n\t\t\t\t\t<input type="text" placeholder="Cupom de Desconto" id="coupon-code">\n\t\t\t\t\t<button class="discount-coupon__apply">Aplicar</button>\n\t\t\t\t\t<button class="discount-coupon__remove">Remover</button>\n\t\t\t\t</div>\n\t\t\t\t<div class="discount-coupon__msg"></div>\n\t\t\t</div>\n\t\t'
                );
                try {
                    vtexjs.checkout.getOrderForm().then(function (t) {
                        t.marketingData ? t.marketingData.coupon && (e.couponContainer.addClass("have-coupon"), e.couponCode.val(t.marketingData.coupon).prop("disabled", !0)) : console.log("marketingData nÃ£o encontrado");
                    });
                } catch (e) {
                    console.log("Erro ao inicializar o campo do cupom. " + e);
                }
            }
            selectors() {
                (this.couponContainer = this.element.find(".discount-coupon")),
                    (this.couponCode = this.element.find("#coupon-code")),
                    (this.addButton = this.element.find(".discount-coupon__apply")),
                    (this.removeButton = this.element.find(".discount-coupon__remove")),
                    (this.mesageContainer = this.element.find(".discount-coupon__msg")),
                    (this.waitOverlay = this.element.find(".discount-coupon__wait-screen"));
            }
            events() {
                const e = this;
                this.addButton.click(() => {
                    e.addCoupon();
                }),
                    this.removeButton.click(() => {
                        e.removeCoupon();
                    });
            }
            addCoupon() {
                try {
                    const e = this;
                    e.waitOverlay.addClass("active");
                    let t = e.couponCode.val();
                    t
                        ? window.vtexjs.checkout
                              .getOrderForm()
                              .then(function (e) {
                                  return vtexjs.checkout.addDiscountCoupon(t);
                              })
                              .then(function (t) {
                                  e.waitOverlay.removeClass("active"),
                                      t.marketingData.coupon
                                          ? (e.couponContainer.addClass("have-coupon"),
                                            e.couponCode.prop("disabled", !0),
                                            e.element.trigger("discount-coupon-change"),
                                            Swal.fire({ icon: "success", type: "success", title: "Cupom adicionado com sucesso!", toast: "true", position: "top-end", showConfirmButton: !1, timerProgressBar: "true", timer: "3000" }))
                                          : Swal.fire({ icon: "error", type: "error", title: "Cupom invÃ¡lido!", toast: "true", position: "top-end", showConfirmButton: !1, timerProgressBar: "true", timer: "3000" });
                              })
                        : Swal.fire({ icon: "warning", type: "warning", title: "Por favor, informe o cÃ³digo do cupom!", toast: "true", position: "top-end", showConfirmButton: !1, timerProgressBar: "true", timer: "3000" });
                } catch (e) {
                    _this.waitOverlay.removeClass("active"), console.warn("Erro ao adicionar o cupom. " + e);
                }
            }
            removeCoupon() {
                try {
                    const e = this;
                    e.waitOverlay.addClass("active"),
                        window.vtexjs.checkout
                            .getOrderForm()
                            .then(function (e) {
                                return window.vtexjs.checkout.removeDiscountCoupon();
                            })
                            .then(function (t) {
                                e.waitOverlay.removeClass("active"),
                                    e.couponContainer.removeClass("have-coupon"),
                                    e.couponCode.val("").prop("disabled", !1),
                                    e.element.trigger("discount-coupon-change"),
                                    Swal.fire({ icon: "success", type: "success", title: "Cupom removido com sucesso!", toast: "true", position: "top-end", showConfirmButton: !1, timerProgressBar: "true", timer: "3000" });
                            });
                } catch (e) {
                    _this.waitOverlay.removeClass("active"), console.warn("Erro ao remover o cupom. " + e);
                }
            }
            notifyUser(e, t) {
                const n = this;
                this.mesageContainer.empty(),
                    this.mesageContainer.html(`<div class="${t}">${e}</div>`),
                    setTimeout(
                        function () {
                            n.mesageContainer.find("> div").fadeOut();
                        }.bind(this),
                        3e3
                    );
            }
        }
        const g = Object(i.a)("icones");
        $(function () {
            new _($(".c-minicart__footer-cupom")), new o.a($(".c-minicart__footer-delivery"));
            const e = {
                miniCartInit: function () {
                    vtexjs.checkout.getOrderForm().done(function (t) {
                        e.icons(), e.mountCart(), e.isEmptyCart(), e.controlers(), e.update(), e.closeMinicart(), e.listHeight(), e.delivery();
                    });
                },
                icons: function () {
                    $(".c-minicart__header-links .close").prepend(g.sacola), $(".c-minicart__empty span").prepend(g.bag);
                },
                closeMinicart: function () {
                    $(".c-minicart__empty button, .continueToBuy").on("click", function () {
                        $(".c-minicart").removeClass("open"), $(".c-minicart__overlay").removeClass("open"), $("body").removeAttr("style");
                    });
                },
                formatPrice: function (e) {
                    return e.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
                },
                removeItem: function (e) {
                    var t = $(e).parents(".c-minicart__box").index() - 1;
                    vtexjs.checkout.getOrderForm().done(function (e) {
                        var n = t,
                            o = (e.items[n], [{ index: n, quantity: 1 }]);
                        return vtexjs.checkout.removeItems(o);
                    }),
                        Swal.fire({ icon: "warning", type: "warning", title: "Removendo produto!", toast: "true", position: "top-end", showConfirmButton: !1, timerProgressBar: "true", timer: "2000" }).then();
                },
                update: function () {
                    $(window).on("orderFormUpdated.vtex", function (t, n) {
                        e.isEmptyCart(),
                            e.mountCart(),
                            $(".c-minicart__content-list .c-minicart__box").each(function () {
                                var e = $(this).find('.c-minicart__box-title h4:contains("brinde")');
                                e.parents().eq(2).find(".c-minicart__box-price").hide(), e.parents().eq(2).find(".c-minicart__box-remove").hide();
                            });
                    });
                },
                isEmptyCart: function () {
                    var e = vtexjs.checkout.orderForm.items.length;
                    $(".c-minicart__empty").show(), e > 0 ? ($(".c-minicart__empty").hide(), $(".c-minicart__badge, .c-minicart__footer").show()) : ($(".c-minicart__footer").hide(), $(".c-minicart__content-title").show());
                },
                checkIndex: function (t, n) {
                    $(".c-minicart__box").length > 0
                        ? $(".c-minicart__box").each(function () {
                              if ($(this).attr("dataskuid") == t) {
                                  var o = $(this).index(),
                                      i = parseInt(n) + parseInt($(this).attr("dataqtd"));
                                  e.updateCart(o, i);
                              } else e.addToCart(t, n);
                          })
                        : e.addToCart(t, n);
                },
                toggleMinicartTimeout: function () {
                    var e = $(".c-minicart");
                    $(window).width() > 520 && e.addClass("open"),
                        setTimeout(function () {
                            return e.removeClass("open");
                        }, 1e3);
                },
                addToCart: function (t, n) {
                    var o = { id: t, quantity: n, seller: "1" };
                    vtexjs.checkout.addToCart([o], null, jssalesChannel).then(function (t) {
                        Swal.fire({ icon: "success", type: "success", title: "Produto adicionado com sucesso!", toast: "true", position: "top-end", showConfirmButton: !1, timerProgressBar: "true", timer: "3000" }).then(function () {
                            e.toggleMinicartTimeout();
                        });
                    });
                },
                updateCart: function (t, n) {
                    console.log("update", t),
                        console.log("quantidade", n),
                        vtexjs.checkout
                            .getOrderForm()
                            .then(function (e) {
                                var o = { index: t, quantity: n };
                                return vtexjs.checkout.updateItems([o], null, !1);
                            })
                            .then(function () {
                                var o = vtexjs.checkout.orderForm.items[t].quantity;
                                n > o
                                    ? Swal.fire({
                                          icon: "error",
                                          type: "error",
                                          title: "VocÃª jÃ¡ possui o limite deste produto no carrinho",
                                          toast: "true",
                                          position: "bottom-start",
                                          showConfirmButton: !1,
                                          timerProgressBar: "true",
                                          timer: "3000",
                                      }).then(function () {
                                          e.toggleMinicartTimeout();
                                      })
                                    : Swal.fire({
                                          icon: "success",
                                          type: "success",
                                          title: "Quantidade atualizada com sucesso!",
                                          toast: "true",
                                          position: "bottom-start",
                                          showConfirmButton: !1,
                                          timerProgressBar: "true",
                                          timer: "3000",
                                      }).then(function () {
                                          e.toggleMinicartTimeout();
                                      });
                            });
                },
                mountCart: function () {
                    var t = vtexjs.checkout.orderForm.items.length,
                        n = (vtexjs.checkout.orderForm.items.length, 0);
                    if (t > 0) for (var o = 0; o < t; o++) n += vtexjs.checkout.orderForm.items[o].quantity;
                    if (0 == vtexjs.checkout.orderForm.totalizers.length) 0 == (i = vtexjs.checkout.orderForm.value) && (i = 0);
                    else var i = vtexjs.checkout.orderForm.totalizers[0].value;
                    for (
                        $(".quantity-price").html(e.formatPrice(i / 100)),
                            $(".header-patoge .c-menucart .qtd-cart").text(n),
                            $(".c-minicart__badge").text(n),
                            $(".itens__badge").text(n),
                            $(".c-minicart__itens").text(n > 1 ? "produtos" : "produto"),
                            $(".itens__itens").text(n > 1 ? " itens" : " item"),
                            $(".c-minicart__box").remove(),
                            o = 0;
                        o < t;
                        o++
                    ) {
                        const t = e.formatPrice((vtexjs.checkout.orderForm.items[o].listPrice * vtexjs.checkout.orderForm.items[o].quantity) / 100),
                            n = e.formatPrice((vtexjs.checkout.orderForm.items[o].price * vtexjs.checkout.orderForm.items[o].quantity) / 100);
                        $(
                            `\n          <div class="c-minicart__box" dataprodid="${vtexjs.checkout.orderForm.items[o].productId}" dataskuid="${vtexjs.checkout.orderForm.items[o].id}" dataqtd="${
                                vtexjs.checkout.orderForm.items[o].quantity
                            }">\n            <div class="c-minicart__box-image">\n              <a href="${vtexjs.checkout.orderForm.items[o].detailUrl}">\n                <img src="${vtexjs.checkout.orderForm.items[o].imageUrl.replace("-85-129", "-250-375").replace("http", "https")}" 
                            alt="${
                                vtexjs.checkout.orderForm.items[o].name
                            }" />\n              </a>\n            </div>\n            <div class="c-minicart__box-info">\n              <div class="c-minicart__box-info-content">\n                <div class="c-minicart__box-title">\n                  <a href="${
                                vtexjs.checkout.orderForm.items[o].detailUrl
                            }">\n                    <h4>${
                                vtexjs.checkout.orderForm.items[o].name
                            }</h4>\n                  </a>\n                </div>\n                <div class="c-minicart__box-qtdePrice">\n                  <div class="c-minicart__box-qtde">\n                    <span class="qtde-remove"><i class="fas fa-minus"></i></span>\n                    <span class="qtde-value">${
                                vtexjs.checkout.orderForm.items[o].quantity
                            }</span>\n                    <span class="qtde-add"><i class="fas fa-plus"></i></span>\n                  </div>\n                  <div class="c-minicart__box-price">\n                    <span class="list-price" ${
                                t == n ? 'style="display: none;"' : ""
                            }>\n                      ${t}\n                    </span>\n                    <span class="price">\n                      ${n}\n                    </span>\n                  </div>\n                </div>\n              </div>\n              <div class="c-minicart__box-remove">\n                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.035 15.081c0 1.135.92 2.056 2.057 2.056h6.855a2.057 2.057 0 0 0 2.056-2.056l1.371-10.968H1.664l1.371 10.968Zm7.54-8.912h1.372v8.912h-1.371V6.169Zm-2.741 0h1.37v8.912h-1.37V6.169Zm-2.742 0h1.37v8.912h-1.37V6.169Zm9.94-4.798h-4.457S10.268 0 9.89 0H7.148c-.38 0-.685 1.371-.685 1.371H2.007c-.569 0-1.028.46-1.028 1.028v1.028h15.08V2.4c0-.568-.46-1.028-1.028-1.028Z" fill="#151414"/></svg>\n              </div>\n            </div>\n          </di>\n        `
                        ).appendTo(".c-minicart__content-list");
                    }
                    $(".c-minicart__box-qtde").removeClass("updating"),
                        vtexjs.checkout.orderForm &&
                        vtexjs.checkout.orderForm.totalizers &&
                        vtexjs.checkout.orderForm.totalizers &&
                        vtexjs.checkout.orderForm.totalizers[0] &&
                        vtexjs.checkout.orderForm.totalizers &&
                        vtexjs.checkout.orderForm.totalizers[0].value
                            ? $(".subtotal__value").html(e.formatPrice(vtexjs.checkout.orderForm.totalizers[0].value / 100))
                            : $(".subtotal__value").html("R$ 00,00");
                },
                controlers: function () {
                    $("body").on("click", ".c-minicart__box-remove", function () {
                        e.removeItem(this);
                    }),
                        $("body").on("click", ".qtde-add", function () {
                            var t = $(this).parents(".c-minicart__box").index() - 1,
                                n = vtexjs.checkout.orderForm.items[t].quantity,
                                o = vtexjs.checkout.orderForm.items[t].quantity + 1;
                            $(this).parents(".c-minicart__box").find(".c-minicart__box-qtde").addClass("updating"), e.updateItem(this, o, t, n);
                        }),
                        $("body").on("click", ".qtde-remove", function () {
                            var t = $(this).parents(".c-minicart__box").index() - 1,
                                n = vtexjs.checkout.orderForm.items[t].quantity,
                                o = vtexjs.checkout.orderForm.items[t].quantity - 1;
                            $(this).parents(".c-minicart__box").find(".c-minicart__box-qtde").addClass("updating"), e.updateItem(this, o, t, n);
                        });
                },
                updateItem: function (e, t, n, o) {
                    var i = n;
                    vtexjs.checkout
                        .getOrderForm()
                        .then(function (e) {
                            var n = i,
                                o = (e.items[n], [{ index: n, quantity: t }]);
                            return vtexjs.checkout.updateItems(o);
                        })
                        .then(function (e) {
                            vtexjs.checkout.orderForm.items[i].quantity < t
                                ? ($(".c-minicart__box").eq(i).find(".c-minicart__box-qtde").addClass("limit"),
                                  Swal.fire({
                                      icon: "error",
                                      type: "error",
                                      title: "VocÃª jÃ¡ adicionou todo o estoque que temos deste tamanho na sacola!",
                                      toast: "true",
                                      position: "top-end",
                                      showConfirmButton: !1,
                                      timerProgressBar: "true",
                                      timer: "7000",
                                  }).then())
                                : ($(".c-minicart__box").eq(i).find(".c-minicart__box-qtde").removeClass("limit"),
                                  Swal.fire({ icon: "success", type: "success", title: "Quantidade atualizada com sucesso!", toast: "true", position: "top-end", showConfirmButton: !1, timerProgressBar: "true", timer: "2000" }).then());
                        });
                },
                delivery: function () {
                    $(window).load(function () {
                        $("#txtCep").attr("placeholder", "00000-000"),
                            $("#txtCep").attr("autocomplete", "none"),
                            $("#txtCep").attr("autocomplete", "off"),
                            $("#txtCep").on("focus click", function () {
                                $(this)[0].setSelectionRange(0, 0);
                            });
                    });
                },
                verificaValorFreteGratis: function () {
                    return (
                        setTimeout(function () {
                            var e = vtexjs.checkout.orderForm.totalizers[0].value;
                            if (e < 39998) {
                                var t = Math.floor((e / 39998) * 100),
                                    n = 39998 - e;
                                $(".text-bar").html(
                                    `\n            <div>\n              <span>Faltam </span>\n              <span class="valor-moeda">${n} </span>\n              <span>para Frete GrÃ¡tis</span>\n            </div>\n          `
                                ),
                                    n < 1e4 ? $(".valor-moeda").mask("R$ #0,00") : n < 1e3 ? $(".valor-moeda").mask("R$ #,00") : n < 100 ? $(".valor-moeda").mask("R$ 0,##") : $(".valor-moeda").mask("R$ #00,00"),
                                    $(".bar-color").css("width", t + "%");
                            } else e >= 39998 ? ($(".bar-color").css("width", "100%"), $(".text-bar").html("\n            <div>\n              <span><strong>ParabÃ©ns!</strong> VocÃª ganhou Frete GrÃ¡tis</span>\n            </div>\n          ")) : ($(".bar-color").css("width", "0%"), $(".text-bar").html('\n            <div>\n              <span>Faltam </span>\n              <span class="valor-moeda">R$ 399,99 </span>\n              <span>para Frete GrÃ¡tis</span>\n            </div>\n          '));
                        }, 2e3),
                        this
                    );
                },
                verificaAdicaoSubtracaoCart: function () {
                    $(document).on("click", ".qtde-remove, .qtde-add, .c-shelf__selection-button .buy, .c-minicart__box-remove", function () {
                        e.verificaValorFreteGratis();
                    });
                },
                listHeight: function () {
                    const e = $(".c-minicart__footer").innerHeight();
                    $(".c-minicart__content").css("height", `calc(100% - ${e + 78}px)`);
                },
            };
            e.miniCartInit();
            $('.c-product__right-content .buy-button').click(function(element){
                var cart_url = $(this).attr('href');

                if (typeof cart_url.split('/cart/add')[1] != 'undefined') {
                    element.preventDefault();
                    element.stopPropagation();
                    
                    var button_text = $('.c-product__right-content .buy-button').text();
                    
                    $('.c-product__right-buy').addClass('disabled');
                    $('.c-product__right-content .buy-button').text('Carregando...');

                    $.ajax({
                        type: 'GET',
                        url: cart_url,
                        success: function() {
                            vtexjs.checkout.getOrderForm().done(function(){
                                e.isEmptyCart(),
                                e.mountCart(),
                                $(".c-minicart__content-list .c-minicart__box").each(function () {
                                    var e = $(this).find('.c-minicart__box-title h4:contains("brinde")');
                                    e.parents().eq(2).find(".c-minicart__box-price").hide(), e.parents().eq(2).find(".c-minicart__box-remove").hide();
                                });
                                $('.c-menucart').trigger('click');
                                $('.c-product__right-buy').removeClass('disabled');
                                $('.c-product__right-content .buy-button').text(button_text);
                            });
                        }
                    });

                    return false;
                }
            });
        });
        n(144), n(145), n(146);
        document.addEventListener("DOMContendLoaded", (s(), void d()));
    },
    88: function (e, t, n) {
        e.exports = (function () {
            "use strict";
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                }
            }
            function t() {
                if (!("IntersectionObserver" in window))
                    throw new Error(
                        "\n      bounds.js requires IntersectionObserver on the global object.\n      IntersectionObserver is unavailable in IE and other older\n      versions of browsers.\n      See https://github.com/ChrisCavs/bounds.js/blob/master/README.md\n      for more compatibility information.\n    "
                    );
            }
            function n() {}
            var o =
                ((function (t, n, o) {
                    n && e(t.prototype, n), o && e(t, o);
                })(
                    i,
                    [
                        {
                            key: "watch",
                            value: function (e, t, o) {
                                var i = { el: e, onEnter: 1 < arguments.length && void 0 !== t ? t : n, onLeave: 2 < arguments.length && void 0 !== o ? o : n };
                                return this.nodes.push(i), this.observer.observe(e), i;
                            },
                        },
                        {
                            key: "unWatch",
                            value: function (e) {
                                var t = this._findByNode(e, !0);
                                return -1 !== t && (this.nodes.splice(t, 1), this.observer.unobserve(e)), this;
                            },
                        },
                        {
                            key: "check",
                            value: function (e) {
                                return (this._findByNode(e) || {}).history;
                            },
                        },
                        {
                            key: "clear",
                            value: function () {
                                return (this.nodes = []), this.observer.disconnect(), this;
                            },
                        },
                        {
                            key: "_emit",
                            value: function (e) {
                                var t = this,
                                    n = e.map(function (e) {
                                        var n = t._findByNode(e.target),
                                            o = e.intersectionRatio;
                                        return (n.history = e.isIntersecting), e.isIntersecting ? n.onEnter(o) : n.onLeave(o), { el: e.target, inside: e.isIntersecting, outside: !e.isIntersecting, ratio: e.intersectionRatio };
                                    });
                                this.onEmit(n);
                            },
                        },
                        {
                            key: "_findByNode",
                            value: function (e, t) {
                                var n = 1 < arguments.length && void 0 !== t && t ? "findIndex" : "find";
                                return this.nodes[n](function (t) {
                                    return t.el.isEqualNode(e);
                                });
                            },
                        },
                    ],
                    [
                        {
                            key: "checkCompatibility",
                            value: function () {
                                t();
                            },
                        },
                    ]
                ),
                i);
            function i() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    o = e.root,
                    a = e.margins,
                    r = e.threshold,
                    s = e.onEmit;
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, i),
                    t();
                var c = {
                    root: o || null,
                    rootMargin: (function (e) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {},
                            n = t.top,
                            o = void 0 === n ? 0 : n,
                            i = t.right,
                            a = void 0 === i ? 0 : i,
                            r = t.bottom,
                            s = void 0 === r ? 0 : r,
                            c = t.left;
                        return o + "px " + a + "px " + s + "px " + (void 0 === c ? 0 : c) + "px";
                    })(a),
                    threshold: r || 0,
                };
                (this.nodes = []), (this.onEmit = s || n), (this.observer = new IntersectionObserver(this._emit.bind(this), c));
            }
            return function (e) {
                return new o(e);
            };
        })();
    },

});