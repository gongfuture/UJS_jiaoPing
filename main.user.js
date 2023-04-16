// ==UserScript==
// @name         Fuck_ujs_Pj
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  江苏大学教务系统的自动评教脚本
// @author       KSroido
// @homepageURL  https://github.com/KSroido/UJS_jiaoPing/
// @supportURL   https://github.com/KSroido/UJS_jiaoPing/issues/
// @downloadURL  https://raw.githubusercontent.com/KSroido/UJS_jiaoPing/main/main.user.js
// @updateURL    https://raw.githubusercontent.com/KSroido/UJS_jiaoPing/main/main.user.js
// @match        https://*.ujs.edu.cn/http/*/xspjgl/*.html?*
// @grant        none
// ==/UserScript==

function autoPj() {
    var rad_a,rad_b;
    rad_a = "pjf_F9066C26C99";
    rad_b = "89D1E05383001CAC1890";
    for(var i=0x4;i<=0xC;i++)
    {
        var m = i.toString()
        m = m.toUpperCase()
        document.getElementById(rad_a+m+rad_b).value = 100;
    }
    //document.getElementById("Datagrid1:__ctl8:rb").checked = true;
    document.getElementById("py").value = '老师备课充分，授课重点突出。';
    // document.getElementById("Button1").click();
}
autoPj();


// https://webvpn.ujs.edu.cn/http/*/xspjgl/kcgcpj_cxKcgcpjxxIndex.html


// pjf_F9066C26C99489D1E05383001CAC1890
// pjf_F9066C26C99589D1E05383001CAC1890
// pjf_F9066C26C99689D1E05383001CAC1890
// pjf_F9066C26C99789D1E05383001CAC1890
// pjf_F9066C26C99889D1E05383001CAC1890
// pjf_F9066C26C99989D1E05383001CAC1890
// pjf_F9066C26C99A89D1E05383001CAC1890
// pjf_F9066C26C99B89D1E05383001CAC1890
// pjf_F9066C26C99C89D1E05383001CAC1890
