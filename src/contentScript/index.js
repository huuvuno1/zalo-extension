// avatarConfigs = [{name; avatar}]
const avatarConfigs = JSON.parse(localStorage.getItem('avatarConfigs') || "[]")
let selectedName = ""


async function listenChatView() {
  const container = document.getElementById('chatViewContainer');
  const observer = new MutationObserver((mutationsList, observer) => {


    for (let mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.target.id === "conversationListId") {
        renderAvatars();
      }
    }
  });

  // Cấu hình đối tượng MutationObserver
  const config = { childList: true, subtree: true };

  // Bắt đầu quan sát phần tử cha với cấu hình đã chỉ định
  observer.observe(container, config);
}

const changeAvatarButton = `<div-14 class="zmenu-item   --NORMAL  md" activeid=""><div class="truncate flx-1" style="font-weight: bold">Đổi avatar khách nè</div><div class="margin-left-24" style="width: 20px; height: 20px;"></div></div-14>`
const line = `<div class="zmenu-separator"></div>`

const modal = `<div id="zl-confirm-v2-1718332917258" class="zl-modal animated fadeIn " style="z-index: 100;">
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
</div>`

const modalll = document.createElement("div");
modalll.innerHTML = modal;
modalll.querySelector('#btnHideChangeAvatarModal').addEventListener('click', () => document.body.removeChild(modalll))
modalll.querySelector('#closeIconModal').addEventListener('click', () => document.body.removeChild(modalll))
modalll.querySelector('#btnOkeChangeAvatarModal').addEventListener('click', () => {
  const url = document.querySelector("#customerAvatar").value;
  const config = avatarConfigs.find(i => i.name === selectedName);
  if (config) {
    config.url = url
  } else {
    avatarConfigs.push({
      name: selectedName,
      avatar: url
    })
  }
  localStorage.setItem("avatarConfigs", JSON.stringify(avatarConfigs))
  renderAvatars();
  document.body.removeChild(modalll);
})


function renderAvatars() {
  document.querySelectorAll('.msg-item').forEach(item => {
    item.querySelectorAll('img')?.forEach(i => {
      const url = avatarConfigs.find(i => i.name === item.querySelector('.conv-item-title__name')?.innerText)?.avatar;      
      
      if (url) {
        i.src = url;
      }
      
    })
  })
}

function addOptions(e) {
    // e.stopPropagation()
    selectedName = e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.conv-item-title__name').innerText

    setTimeout(() => {
      const div = document.createElement("div");
      div.innerHTML = line + changeAvatarButton;
      div.onclick = () => {
        document.body.appendChild(modalll)
      }
      document.querySelector('.zmenu-body > div > div')?.appendChild(div)
    }, 200)
  
}

function setup() {
  setTimeout(() => {
    renderAvatars();
    // document.querySelector('.ReactVirtualized__Grid__innerScrollContainer')?.removeEventListener('click', listenChatView)
    // document.querySelector('.ReactVirtualized__Grid__innerScrollContainer')?.addEventListener('click', listenChatView)
 


    
    // document.querySelector('.ReactVirtualized__Grid__innerScrollContainer')?.addEventListener('click', () => {
    //   setTimeout(() => {
    //     listenChatView()
    //   })
    // })
    // listenChatView()
  }, 100)


  // const container = document.getElementById('app');

  // // Tạo một đối tượng MutationObserver
  // const observer = new MutationObserver((mutationsList, observer) => {
  //    });

  // // Cấu hình đối tượng MutationObserver
  // const config = { childList: true, subtree: true };

  // // Bắt đầu quan sát phần tử cha với cấu hình đã chỉ định
  // observer.observe(container, config);
}


const container = document.getElementById('app');


// Tạo một đối tượng MutationObserver
const observer = new MutationObserver((mutationsList, observer) => {
  renderAvatars();
    
  for (let mutation of mutationsList) {
    console.log(mutation.target)

    if (mutation.target.id === "conversationListId" || mutation.target.className.includes("ReactVirtualized__Grid__innerScrollContainer")) {
      document.querySelectorAll('.msg-item').forEach(item => {
        item.querySelector("#conv-title-action")?.removeEventListener('click', addOptions)
        item.querySelector("#conv-title-action")?.addEventListener('click', addOptions)
        item.addEventListener('click', () => {selectedName = item.querySelector('.conv-item-title__name').innerText; setTimeout(updateAvatarChat, 100)});
      })
    }
    if (mutation.target.className.includes('main-title-container') || mutation.target.id === "ava_chat_box_view" || mutation.target.className.includes('zavatar-container') || mutation.target.className === "a-child") {
      console.log('vijpp pro')
      updateAvatarChat()
    }
    
  }
});

// Cấu hình đối tượng MutationObserver
const config = { childList: true, subtree: true };

// Bắt đầu quan sát phần tử cha với cấu hình đã chỉ định
observer.observe(container, config);



function updateAvatarChat() {
  document.getElementById('ava_chat_box_view')?.querySelectorAll('img')?.forEach(item => {
    console.log('clickkkk', selectedName, item.src)
    const config = avatarConfigs.find(i => i.name === selectedName);
    if (config) {
      item.src = config.avatar
    }
  })
}