const d=JSON.parse(localStorage.getItem("avatarConfigs")||"[]");let i="";const u='<div-14 class="zmenu-item   --NORMAL  md" activeid=""><div class="truncate flx-1" style="font-weight: bold">Đổi avatar khách nè</div><div class="margin-left-24" style="width: 20px; height: 20px;"></div></div-14>',_='<div class="zmenu-separator"></div>',f=`<div id="zl-confirm-v2-1718332917258" class="zl-modal animated fadeIn " style="z-index: 100;">
<div id="" class="zl-modal__container flx-1 flx flx-center flx-al-c ovf-hidden">
  <div id="" class="zl-modal__dialog flx flx-col animated zoomIn " style="width: 374px;">
    <div class="zl-modal__dialog__header flx flx-sp-btw ">
      <div class="flx flx-al-c flx-1 between-flex truncate">
        <div class="truncate"><span class="zl-modal__dialog__header__title-text v0 truncate " title="Đổi avatar khách">Ẩn khách chi thuật</span>
          <div style="margin-top: 2px;"></div>
        </div>
        <div icon="close f16"
          id="closeIconModal"
          class="z--btn--v2 btn-tertiary-neutral medium modal-header-icon --full-rounded icon-only modal-header-icon"
          data-disabled="" title=""><i class="fa fa-close f16 pre"></i></div>
      </div>
    </div>
    <div id="zl-modal__dialog-body" class="zl-modal__dialog-body zl-modal__dialog-body--confirm-modal">
      <div class="flx flx-col flx-1">
        <div class="content flx flx-col" tabindex="1" style="outline: none;">
          <div class="textAlign-center" style="word-break: break-word;">
            <div class="confirm-del-conv-modal"><span data-translate-inner="STR_CONV_DEL_CONFIRM_L_1">Nhập vào link
                ảnh để đổi avatar ạ</span><br><span data-translate-inner="STR_CONV_DEL_CONFIRM_L_2">Thao tác đổi chỉ
                có tác dụng trên zalo web thui  </span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="flx flx-al-c" style="
  margin-top: 15px; margin-right: 15px; margin-left: 15px;
"><span class="zl-group-input  zl-group-input__lg"><input name="name" type="text" data-id="txt_NewLabel_Name"
          data-translate-placeholder="STR_INPUT_TAG_NAME_LABEL" placeholder="Dán link ảnh vào đây"
          autocomplete="off" aria-autocomplete="list" class="zl-input  undefined" value="" id="customerAvatar"></span></div>
    <div class="zl-modal__footer">
      <div class="zl-modal__footer__button-action flx  flx-e">
        <div class="flx">
          <div
            class="z--btn--v2 btn-neutral large zl-modal__footer__button zl-modal__footer__button--cancel --rounded zl-modal__footer__button zl-modal__footer__button--cancel"
            data-disabled="" title="" id="btnHideChangeAvatarModal">
            <div class="truncate" >Huỷ</div>
          </div>
          <div class="z--btn--v2 btn-primary large zl-modal__footer__button --rounded zl-modal__footer__button"
            data-disabled="" title="" id="btnOkeChangeAvatarModal">
            <div class="truncate">Oke</div>
          </div>
        </div>
      </div>
    </div>
    <div class="zl-mini-notification mn-modal"></div>
  </div>
</div>
</div>`,n=document.createElement("div");n.innerHTML=f;n.querySelector("#btnHideChangeAvatarModal").addEventListener("click",()=>document.body.removeChild(n));n.querySelector("#closeIconModal").addEventListener("click",()=>document.body.removeChild(n));n.querySelector("#btnOkeChangeAvatarModal").addEventListener("click",()=>{const a=document.querySelector("#customerAvatar").value,t=d.find(e=>e.name===i);t?t.url=a:d.push({name:i,avatar:a}),localStorage.setItem("avatarConfigs",JSON.stringify(d)),m(),document.body.removeChild(n)});function m(){document.querySelectorAll(".msg-item").forEach(a=>{var t;(t=a.querySelectorAll("img"))==null||t.forEach(e=>{var o;const l=(o=d.find(c=>{var r;return c.name===((r=a.querySelector(".conv-item-title__name"))==null?void 0:r.innerText)}))==null?void 0:o.avatar;l&&(e.src=l)})})}function s(a){i=a.target.parentNode.parentNode.parentNode.parentNode.querySelector(".conv-item-title__name").innerText,setTimeout(()=>{var e;const t=document.createElement("div");t.innerHTML=_+u,t.onclick=()=>{document.body.appendChild(n)},(e=document.querySelector(".zmenu-body > div > div"))==null||e.appendChild(t)},200)}const g=document.getElementById("app"),p=new MutationObserver((a,t)=>{m();for(let e of a)console.log(e.target),(e.target.id==="conversationListId"||e.target.className.includes("ReactVirtualized__Grid__innerScrollContainer"))&&document.querySelectorAll(".msg-item").forEach(l=>{var o,c;(o=l.querySelector("#conv-title-action"))==null||o.removeEventListener("click",s),(c=l.querySelector("#conv-title-action"))==null||c.addEventListener("click",s),l.addEventListener("click",()=>{i=l.querySelector(".conv-item-title__name").innerText,setTimeout(v,100)})}),(e.target.className.includes("main-title-container")||e.target.id==="ava_chat_box_view"||e.target.className.includes("zavatar-container")||e.target.className==="a-child")&&(console.log("vijpp pro"),v())}),h={childList:!0,subtree:!0};p.observe(g,h);function v(){var a,t;(t=(a=document.getElementById("ava_chat_box_view"))==null?void 0:a.querySelectorAll("img"))==null||t.forEach(e=>{console.log("clickkkk",i,e.src);const l=d.find(o=>o.name===i);l&&(e.src=l.avatar)})}
