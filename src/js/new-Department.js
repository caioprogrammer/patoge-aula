!(function (e) {
    var t = {};
    function a(n) {
        if (t[n]) return t[n].exports;
        var s = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(s.exports, s, s.exports, a), (s.l = !0), s.exports;
    }
    (a.m = e),
        (a.c = t),
        (a.d = function (e, t, n) {
            a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (a.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (a.t = function (e, t) {
            if ((1 & t && (e = a(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if ((a.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var s in e)
                    a.d(
                        n,
                        s,
                        function (t) {
                            return e[t];
                        }.bind(null, s)
                    );
            return n;
        }),
        (a.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return a.d(t, "a", t), t;
        }),
        (a.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (a.p = ""),
        a((a.s = 94));
})({
    1: function (e, t, a) {
        "use strict";
        a.d(t, "a", function () {
            return s;
        });
        const n = {
            icons: {
                loader: '<i class="fas fa-sync fa-spin"></i>',
                carouselDesktop: !0,
                mobile: !0,
                thumbsQty: 5,
                thumbVertical: !0,
                menu:
                    '\n\t<svg class="icon-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 20"><path d="M4,10H28a2,2,0,0,0,0-4H4a2,2,0,0,0,0,4Zm24,4H4a2,2,0,0,0,0,4H28a2,2,0,0,0,0-4Zm0,8H4a2,2,0,0,0,0,4H28a2,2,0,0,0,0-4Z" transform="translate(-2 -6)"/></svg>\n',
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
        function s(e) {
            return null != e && void 0 !== n[e] ? n[e] : n;
        }
    },
    94: function (e, t, a) {
        "use strict";
        a.r(t);
        a(95);
        var n = a(1);
        const s = Object(n.a)("icons");
        $(function () {
            const e = {
                init: function () {
                    e.departmentClass(), 
                    e.iconBreadcrumb(), 
                    e.icons(), 
                    e.listShelf(), 
                    e.removeHelperComplement(), 
                    e.openFilter(), 
                    e.closeFilter(),
                    e.orderBy(), 
                    e.openSelectOrder(), 
                    e.createAppliedFilters(), 
                    e.smartResearch();
                },
                departmentClass: function () {
                    const e = $(".c-breadcrumb .last a").text();
                    $("body").addClass(e.toLowerCase());
                },
                iconBreadcrumb: function () {
                    $(".c-breadcrumb ul li a").first().html("<span>Home</span>");
                    $(".c-breadcrumb li").each(function () {
                        $(this).append('<span class="divisoria">/</span>');
                    });
                },
                icons: function () {
                    $(".page-department .c-filters__content-header").append('<svg xmlns="http://www.w3.org/2000/svg" class="icon-close" width="16.657" height="11.314" viewBox="0 0 16.657 11.314"><path d="M16.656 4.657v2H3.828L7.07 9.899l-1.414 1.415L0 5.657 5.656 0 7.07 1.414 3.828 4.657Z"/></svg>'),
                        $(".page-department .c-filters__link").append(s.down),
                        $(".page-department .c-orderBy__title").append(s.down),
                        $(".page-department .clear-filter-btn").prepend('<i class="far fa-trash-alt"></i>');
                },
                listShelf: function () {
                    $(".page-department .shelf ul").addClass("c-list__shelf-list"), $(".page-department .c-list__shelf-list li").addClass("c-list__shelf-item");
                },
                removeHelperComplement: function () {
                    $(".page-department .helperComplement").remove();
                },
                openFilter: function () {
                    $(window).width() < 767.98
                        ? ($(".c-filters__content").removeAttr("style"),
                          $(".c-filters__link").on("click", function () {
                              $(".c-filters__content").addClass("active"), $(".mask").addClass("active");
                          }))
                        : $(".c-filters__link").on("click", function () {
                              $(this).toggleClass("open"), $(".c-filters__content").slideToggle("fast");
                          });
                },
                closeFilter: function () {
                    $(window).width() < 767.98
                        ? $(".c-filters__content-header .icon-close, .c-filters__content-body label").on("click", function () {
                              $(".c-filters__content").removeClass("active"), $(".mask").removeClass("active");
                          })
                        : $(".c-filters__content-header .icon-close, .c-filters__content-body label").on("click", function () {
                              $(".page-department .c-filters__link").removeClass("open"), $(".c-filters__content").slideUp("fast");
                          });
                },
                orderBy: function () {
                    let e = window.location.search;
                    (e = e.replace("?", "")), (e = e.split("&"));
                    let t = e.filter((e) => -1 === e.indexOf("O="));
                    (e = t.join("&")),
                        $(".c-orderBy__box a").each((t, a) => {
                            let n = a.dataset.value.replace("?", "");
                            a.setAttribute("href", `${window.location.pathname}?${e}&${n}${window.location.hash}`);
                        });
                },
                openSelectOrder: function () {
                    $(".page-department .c-orderBy .c-orderBy__title").on("click", function (e) {
                        let t = e.currentTarget;
                        $(t).toggleClass("open"), 
                        $(t).siblings(".c-orderBy__box").slideToggle("fast");
                    });
                },
                pricePercent: function () {
                    $(".c-shelf").each(function () {
                        const e = parseFloat($(this).find(".c-shelf__info-listPrice").text().replace("R$ ", "").replace(".", "").replace(",", ".")),
                            t = parseFloat($(this).find(".c-shelf__info-bestPrice").text().replace("R$ ", "").replace(".", "").replace(",", ".")),
                            a = Math.round((100 * (t - e)) / e)
                                .toString()
                                .replace("-", "");
                        $(this)
                            .find(".percentage")
                            .html(a + "% Off");
                    });
                },
                variantesCompraRapida: function () {
                    setTimeout(function () {
                        $(".c-shelf")
                            .not(".c-shelf__ajax-completed")
                            .each(function (e, t) {
                                var a = $(this);
                                a.addClass("c-shelf__ajax-completed"),
                                    a.find(".c-shelf__selection").prepend('\n                <div class="list-skus-hidden"></div>\n                <ul class="c-shelf__selection-colors"></ul>\n              ');
                                var n,
                                    s = a.find(".c-shelf__id").val();
                                vtexjs.catalog.getProductWithVariations(s).done(function (e) {
                                    const t = (n = e.skus).reduce(
                                            (e, t) => (
                                                e[t.dimensions.Cor] || (e[t.dimensions.Cor] = {}),
                                                (e[t.dimensions.Cor].image = t.image),
                                                e[t.dimensions.Cor].size || (e[t.dimensions.Cor].size = []),
                                                e[t.dimensions.Cor].size.push(t.dimensions.Tamanho),
                                                (e[t.dimensions.Cor].product = t),
                                                e
                                            ),
                                            {}
                                        ),
                                        s = Object.keys(t).map((e) => t[e]);
                                    console.log("Resultado: ", s),
                                        s.forEach((e, t) => {
                                            const { product: n, size: s } = e,
                                                i = n.dimensions.Cor.replace(" ", "-").toLowerCase(),
                                                l = n.available;
                                            console.log("Produto: ", n),
                                                a
                                                    .find(".c-shelf__selection-colors")
                                                    .prepend(`\n                <li class="${i}" data-color="${i}">\n                  <image src="${n.image}" alt="${n.skuname}"/>\n                </li>\n              `),
                                                a
                                                    .find(".c-shelf__selection-variations")
                                                    .prepend(
                                                        `\n                ${s
                                                            .map(
                                                                (e) =>
                                                                    `\n                    <li class="prod-size ${e} ${i} ${l}" data-size="${e}" data-target="${i}">\n                      ${e}\n                    </li> \n                  `
                                                            )
                                                            .join("")}\n              `
                                                    ),
                                                $(".c-shelf__selection").each(function () {
                                                    const e = $(this).find("[data-color]"),
                                                        t = $(this).find("[data-target]");
                                                    e.click(function (e) {
                                                        e.preventDefault(), t.removeClass("open");
                                                        const a = $(this).data("color"),
                                                            n = $('[data-color="' + a + '"]'),
                                                            s = $('[data-target="' + a + '"]');
                                                        n.addClass("open"), s.addClass("open");
                                                    });
                                                });
                                        });
                                    for (var i = 0; i < n.length; i++) {
                                        var l = n[i].dimensions.Cor,
                                            o = n[i].dimensions.Tamanho,
                                            r = n[i].sku,
                                            c = n[i].available;
                                        a.find(".list-skus-hidden").append(`\n                <input class="hidden-select" type="hidden" data-id="${r}" data-color="${l}" data-size="${o}" data-available="${c}" />\n              `);
                                    }
                                }),
                                    $(document).on("click", ".c-shelf__selection-variations li, .c-shelf__selection-colors li", function () {
                                        $(this).parent().find("li").removeClass("active"), $(this).addClass("active"), a.find(".c-shelf__selection-button .buy").removeAttr("href");
                                    }),
                                    a.find(".c-shelf__selection-button").hover(function () {
                                        var e = $(".c-shelf__selection-variations li.active").attr("data-size"),
                                            t = $(".c-shelf__selection-colors li.active").attr("data-color");
                                        a.parent().find(`\n              .list-skus-hidden input[data-size="${e}"][data-color="${t}"]\n            `).addClass("selected");
                                    }),
                                    a.find(".c-shelf__selection-button").click(function () {
                                        var e = a.parent().find(".selected");
                                        if ("false" == e.attr("data-available")) alert("Produto nÃ£o disponÃ­vel nesta combinaÃ§Ã£o"), $(".list-skus-hidden input").removeClass("selected"), a.parent().find("li").removeClass("active");
                                        else if (e.length) {
                                            var t = { id: e.attr("data-id"), quantity: "1", seller: "1" };
                                            vtexjs.checkout.addToCart([t]).done(function () {
                                                $(".c-minicart").addClass("open"),
                                                    $(".c-minicart__overlay").addClass("open"),
                                                    setTimeout(function () {
                                                        $(".c-minicart").removeClass("open"), $(".c-minicart__overlay").removeClass("open");
                                                    }, 5e3);
                                            }),
                                                $(".list-skus-hidden input").removeClass("selected"),
                                                a.parent().find("li").removeClass("active");
                                        } else alert("Selecione uma cor e um tamanho.");
                                    });
                            });
                    }, 2e3);
                },
                smartResearch: function () {
                    1 === $(".page-department").length &&
                        $(".page-department .js-filter input[type='checkbox']").vtexSmartResearch({
                            pageLimit: null,
                            loadContent: ".shelf[id^=ResultItems]",
                            shelfClass: ".shelf",
                            filtersMenu: ".search-multiple-navigator",
                            linksMenu: ".search-single-navigator",
                            menuDepartament: ".navigation .menu-departamento",
                            clearButtonClass: ".clear-filter-btn",
                            mergeMenu: !0,
                            insertMenuAfter: ".search-multiple-navigator h3:first",
                            emptySearchElem: jQuery('<div class="vtexsr-emptySearch"></div>'),
                            elemLoading: '<div id="scrollLoading">Carregando produtos...</div>',
                            returnTopText: '<span class="text">Voltar</span><span class="text2">ao topo</span>',
                            emptySearchMsg: "<h3>Esta combinaÃ§Ã£o de filtros nÃ£o retornou nenhum resultado!</h3>",
                            filterErrorMsg: "Houve um erro ao tentar filtrar a pÃ¡gina!",
                            searchUrl: null,
                            usePopup: !1,
                            showLinks: !0,
                            popupAutoCloseSeconds: 3,
                            filterScrollTop: function (e) {
                                return e.top - 330;
                            },
                            callback: function () {},
                            getShelfHeight: function (e) {
                                return e.scrollTop() + e.height();
                            },
                            shelfCallback: function () {
                                e.pricePercent();
                            },
                            ajaxCallback: function () {
                                e.pricePercent();
                            },
                            emptySearchCallback: function () {},
                            authorizeScroll: function () {
                                return !0;
                            },
                            authorizeUpdate: function () {
                                return !0;
                            },
                            labelCallback: function (e) {},
                        });
                },
                createAppliedFilters: function () {
                    let e = $(".page-department .clear-filter-btn").clone(!0, !0);
                    $(".page-department .c-list__tags").html("\n        <div class='applied-filter'>\n          <div id='filters'>\n          </div>\n        </div>\n      "),
                        $(".page-department .c-list__tags").append(e),
                        $(".page-department .c-list__tags .clear-filter-btn").on("click", function () {
                            $(".applied-filter__item").remove(), $(".c-list__tags").removeClass("active");
                        });
                    const t = $(".applied-filter");
                    $(document).on("change", "input", function () {
                        this.checked || $(`[id="${this.name}"]`).remove();
                        const e = $(".multi-search-checkbox:checked"),
                            a = e.length;
                        a <= 0
                            ? ($(t).removeClass("applied-filter--draw"), $(".navigation-tabs").removeClass("navigation-tabs--smaller"), $(".c-list__tags").removeClass("active"))
                            : ($(t).addClass("applied-filter--draw"), $(".navigation-tabs").addClass("navigation-tabs--smaller"), $(".c-list__tags").addClass("active")),
                            $("#applied-filters-title").text(`Filtros selecionados (${a}):`),
                            e.each((e, t) => {
                                const a = t.parentElement.innerText,
                                    n = t.name;
                                0 === $(`[id='${n}']`).length &&
                                    $("<span>", {
                                        text: a,
                                        id: n,
                                        class: "applied-filter__item",
                                        click: function () {
                                            $(`input[name="${$(this).attr("id")}"]`)
                                                .prop("checked", !1)
                                                .trigger("change"),
                                                $(this).remove();
                                        },
                                    }).appendTo("#filters");
                            });
                    });
                },
                filterMobileExtraInfo() {
                    var e = function () {
                        var e = $(".search-multiple-navigator .multi-search-checkbox"),
                            t = 0;
                        for (var a in e) {
                            e[a].checked && t++;
                        }
                        var n = $("#open-filter-button");
                        t > 0
                            ? (n.find("span").remove(), $("<span/>", { text: "(" + t + ")" }).appendTo(n), $(".c-list__tags .clear-filter-btn").addClass("active"))
                            : (n.find("span").remove(), $(".c-list__tags .clear-filter-btn").removeClass("active"));
                    };
                    e(),
                        $(".aply-filter-btn").on("click", function () {
                            e();
                        }),
                        $(".page-department .c-list__tags .vsr-clean-all-filter").on("click", function () {
                            $("#open-filter-button").find("span").remove(),
                                $(".multi-search-checkbox").each(function () {
                                    $(this).is(":checked") && $(this).attr("checked", !1).trigger("change");
                                }),
                                $(this).removeClass("active");
                        });
                },
                createCategoryFilter() {
                    let e = $("<fieldset />", { class: "refino links-departamento" }),
                        t = $("<div />");
                    return (
                        $(".search-single-navigator")
                            .find("h4,h3,h5")
                            .each(function (e, a) {
                                let n = $("<label />", { class: "item" });
                                if ($(a).find("a").length > 0) {
                                    let e = $(a).find("a");
                                    e.text(e.attr("title")), n.html(e), n.appendTo(t);
                                }
                            }),
                        $("<h5 />", { text: "Categoria" }).appendTo(e),
                        t.appendTo(e),
                        e
                    );
                },
            };
            e.init();
        });
    },
    95: function (e, t, a) {},
});
